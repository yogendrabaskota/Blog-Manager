import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { baseurl } from "../../../CONFIG.JS";
import axios from "axios";

const EditBlog = () => {
  const [blog, setBlog] = useState(null); // Store the fetched blog data
  const navigate = useNavigate();
  const { id } = useParams();

  const editBlog = async (data) => {
    try {
      const response = await axios.patch(`${baseurl}/blog/${id}`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        navigate("/blog/" + id);
      }
    } catch (error) {
      console.error("Failed to update blog:", error);
    }
  };

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${baseurl}/blog/${id}`);
      if (response.status === 200) {
        setBlog(response.data.data); // Set the blog data in state
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog(); // Fetch blog when the component mounts
  }, []);

  return (
    <Layout>
      {/* Pass blog data to Form */}
      {blog ? <Form type="Edit" onSubmit={editBlog} blog={blog} /> : <p>Loading...</p>}
    </Layout>
  );
};

export default EditBlog;
