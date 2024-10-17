import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
const Form = ({ type, onSubmit, blog }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });

  // Prefill form fields with existing blog data when the blog prop changes
  useEffect(() => {
    if (blog) {
      setData(blog);
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
      <div className="container mx-auto my-3 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">
              {type} <br /> Blog
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title"
                name="title"
                value={data.title}
                onChange={handleChange}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subtitle"
                name="subtitle"
                value={data.subtitle}
                onChange={handleChange}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                name="image"
                onChange={handleChange}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Category"
                name="category"
                value={data.category}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Description"
                name="description"
                value={data.description}
                onChange={handleChange}
                required
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
