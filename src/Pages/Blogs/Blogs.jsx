import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://byte-cafe.onrender.com/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="bg-slate-900 text-center py-10 md:py-36 ">
        <h1 className=" text-orange-500  text-center mb-10 text-2xl md:text-5xl  font-bold">
          Our Blogs
        </h1>
      </div>
      <div className="container py-10 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
          {blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog}></SingleBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
