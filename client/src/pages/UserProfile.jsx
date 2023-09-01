import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/authSlice";
import Button from "../components/Button";
import PostBlog from "./PostBlog";
import ErrorProfile from "../components/ErrorProfile";
import { userBlogUrl } from "../utils/Api";
import { setUserBlog } from "../Redux/Slices/userBlogSlice";
import axios from "axios";

// dummy data

const people = [
  {
    name: "John Doe",
    title: "Front-end Developer",
    department: "Engineering",
    email: "john@devui.com",
    role: "Developer",
    image:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    name: "Jane Doe",
    title: "Back-end Developer",
    department: "Engineering",
    email: "jane@devui.com",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
];

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const userBlogs = useSelector((state) => state.userBlog);
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (user) {
      const url = `${userBlogUrl}/${user._id}`;
      axios
        .get(url)
        .then((response) => {
          dispatch(setUserBlog(response?.data?.userBlog?.blogs));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user]);

  if (!user) {
    return <ErrorProfile />;
  }

  return (
    <section className="flex flex-col justify-center border rounded-xl p-4">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>User Name: {user.username}</p>
      <p>Reset Password</p>
      <div>Your Blogs</div>
      <Button className={"max-w-max"} onClick={logOutUser}>
        Logout
      </Button>
      <div className="border p-10">
        {userBlogs.map((blog, index) => (
          <div key={index}>
            <img src={blog.image} alt={`Blog ${index}`} />
            <p>{blog.title}</p>
            <p>{blog.description}</p>
            <p>{blog.createdAt}</p>
          </div>
        ))}
      </div>
      <PostBlog />
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Your Blogs</h2>
            <p className="mt-1 text-sm text-secondary">
              This is a list of all Blogs. You can add new blogs, edit or delete
              existing ones.
            </p>
          </div>
          <div>
            <Button type="button">Add new blogs</Button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-300"
                      >
                        <span>Blogs</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-300"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-300"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-300"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="relative px-4 py-3.5 text-gray-300"
                      >
                        <span className="sr-only ">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y ">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-300">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-300">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-300 ">
                            {person.title}
                          </div>
                          <div className="text-sm text-gray-300">
                            {person.department}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Pubished
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-300">
                          {person.role}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href="#" className="text-gray-300">
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserProfile;
