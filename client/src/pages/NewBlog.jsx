import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addBlogPost } from "../Redux/DataSlice";
import { BsCloudUpload } from "react-icons/bs";
import { apiUrl } from "../utils/Api";

const NewBlog = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [slug, setSlug] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("slug", slug);
      formData.append("user", user._id);

      const { data } = await axios.post(
        `${apiUrl}/api/blog/createBlog`,
        formData
      );

      dispatch(addBlogPost(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="image">
          Image
          <div className="flex items-center justify-center w-full h-40 border  rounded-lg cursor-pointer bg-slate-200">
            {image ? ( // Use 'image' state here
              <img
                src={URL.createObjectURL(image)} // Use 'image' state here
                alt="product"
                className="h-full "
              />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>
        <input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
};

export default NewBlog;
