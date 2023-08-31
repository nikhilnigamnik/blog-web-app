import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import NewBlog from "./NewBlog";
import PostBlog from "./PostBlog";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logout());
  };

  if (!user) {
    return (
      <div>
        Please Login to see Profile
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
        
      </div>
    );
  }
  return (
    <section>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>User Name : {user.username}</p>
      <p>Reset Password</p>
      <div>Your Blogs</div>
      <button onClick={logOutUser}>Logout</button>
      <PostBlog/>
    </section>
  );
};

export default UserProfile;
