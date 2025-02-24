import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import blogImage1 from "../Images/A1.jpeg";
import blogImage2 from "../Images/A2.jpeg";
import blogImage3 from "../Images/A3.jpeg";

const Blogs = () => {
  const initialBlogs = [
    {
      id: 1,
      title: "First-Time Home Buyers",
      image: blogImage1,
      shortText: "Purchasing a home for the first time can be exciting...",
      fullText:
        "Purchasing a home for the first time can be exciting but challenging. It's important to understand your budget and what additional costs come with buying a property. Getting pre-approved for a mortgage helps you know how much you can afford. Take the time to research different neighborhoods and their amenities. Don’t forget to factor in future expenses like utilities and home maintenance.",
      author: "John Doe",
      date: "Feb 24, 2025",
    },
    {
      id: 2,
      title: "Eco-Friendly Home Buyers",
      image: blogImage2,
      shortText: "An eco-friendly home is not just good for the environment...",
      fullText:
        "An eco-friendly home is not just good for the environment but also for the wallet in the long term. Look for energy-efficient features like solar panels, smart thermostats, and high-quality insulation. Consider homes built with sustainable materials, which help reduce your carbon footprint. Green homes often have water-saving features and use non-toxic paints, reducing your exposure to harmful chemicals.",
      author: "Jane Smith",
      date: "Feb 20, 2025",
    },
    {
      id: 3,
      title: "Digital Home Buyers",
      image: blogImage3,
      shortText: "Digital homes offer smart systems that allow control...",
      fullText:
        "Digital homes offer smart systems that allow you to control lighting, temperature, security, and entertainment with ease. Digital décor can include customizable LED lighting, smart mirrors, or digital artwork that changes based on mood or preference. Homes designed with digital elements provide convenience and a futuristic feel, making it easy to adjust your living environment to suit your lifestyle.",
      author: "Alex Brown",
      date: "Feb 15, 2025",
    },
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isAuthor, setIsAuthor] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
  });

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const addBlog = (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content || !newBlog.author || !newBlog.date) {
      alert("Please fill all fields before submitting!");
      return;
    }
    setBlogs([{ id: blogs.length + 1, ...newBlog }, ...blogs]);
    setNewBlog({ title: "", content: "", author: "", date: "" });
    setShowForm(false);
  };

  return (
    <>
      <Navbar />
      <div style={styles.wrapper}>
        <div style={styles.headerContainer}>
          <h1 style={styles.headerTitle}>List of Blogs</h1>
        </div>

        <div style={styles.blogGrid}>
          {blogs.map((blog) => (
            <div key={blog.id} style={styles.blogCard}>
              <img src={blog.image} alt={blog.title} style={styles.blogImage} />
              <h2 style={styles.blogTitle}>{blog.title}</h2>
              <p style={styles.blogParagraph}>{blog.shortText}</p>
              <p style={styles.date}>📅 {blog.date}</p>
              <button style={styles.readMoreButton} onClick={() => openBlog(blog)}>Read More</button>
              <p style={styles.author}>✍ {blog.author}</p>
            </div>
          ))}
        </div>

        {selectedBlog && (
          <div style={styles.blogDetailCard}>
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.fullText}</p>
            <p style={styles.date}>📅 {selectedBlog.date}</p>
            <p style={styles.author}>✍ {selectedBlog.author}</p>
            <button style={styles.closeButton} onClick={closeBlog}>Close</button>
          </div>
        )}

        {isAuthor && (
          <button style={styles.addBlogButton} onClick={toggleForm}>
            ➕ Add New Blog
          </button>
        )}

        {showForm && (
          <div style={styles.formCard}>
            <h2>Add a New Blog</h2>
            <form onSubmit={addBlog}>
              <div style={styles.formGroup}>
                <input type="text" name="title" placeholder="Blog Title" value={newBlog.title} onChange={handleInputChange} style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <textarea name="content" placeholder="Blog Content" value={newBlog.content} onChange={handleInputChange} style={styles.textarea} />
              </div>
              <div style={styles.formGroup}>
                <input type="text" name="author" placeholder="Author Name" value={newBlog.author} onChange={handleInputChange} style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <input type="date" name="date" value={newBlog.date} onChange={handleInputChange} style={styles.input} />
              </div>
              <button type="submit" style={styles.submitButton}>Submit Blog</button>
              <button style={styles.closeButton} onClick={toggleForm}>Close</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};



const styles = {
  wrapper: { padding: "40px 20px", maxWidth: "1200px", margin: "auto", marginTop: "50px", textAlign: "center", background: "#f5f7fa" },
  headerContainer: { textAlign: "center", padding: "30px 0", color: "black", borderRadius: "8px", marginBottom: "20px" },
  headerTitle: { fontSize: "35px", fontWeight: "bold" },
  blogGrid: { display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap" },
  blogCard: {     background: "linear-gradient(135deg,rgb(208, 210, 214), #c3cfe2)",  borderRadius: "0px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", padding: "20px", width: "350px", textAlign: "center", transition: "0.3s", cursor: "pointer" },
  blogImage: { width: "50%", height: "180px", objectFit: "cover", borderRadius: "8px" },
  blogDetailCard: { position: "fixed", top: "20%", left: "50%", transform: "translate(-50%, 0)", background: "pink", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", width: "50%", textAlign: "center", zIndex: "1000"},

  formCard: {
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    width: "450px",
    margin: "30px auto",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  },
  formCardHover: {
    transform: "scale(1.05)",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #bbb",
    borderRadius: "8px",
    fontSize: "16px",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#007bff",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #bbb",
    borderRadius: "8px",
    fontSize: "16px",
    height: "120px",
    resize: "none",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    background: "#007bff",
    color: "white",
    marginBottom: "10px",
    transition: "background 0.3s",
  },
  submitButtonHover: {
    background: "#0056b3",
  },
  closeButton: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    background: "#ff4d4d",
    color: "white",
    transition: "background 0.3s",
  },
  closeButtonHover: {
    background: "#cc0000",
  },
  addBlogButton: {
    background: "#28a789",
    color: "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
    marginTop: "20px",
  },
  addBlogButtonHover: {
    background: "#218838",
  },
};


export default Blogs;
