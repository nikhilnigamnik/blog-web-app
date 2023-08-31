import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import Button from "../components/Button";
import PostBlog from "./PostBlog";
import ErrorProfile from "../components/ErrorProfile";
import { userBlogUrl } from "../utils/Api";
import { setUserBlog } from "../Redux/userBlogSlice";
import axios from "axios";

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
    </section>
  );
};

export default UserProfile;
