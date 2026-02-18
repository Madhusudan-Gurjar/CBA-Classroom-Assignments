import BlogCard from "./components/BlogCard";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Section</h2>

      <BlogCard 
        title="React Basics" 
        description="Learn fundamentals of React."
        featured={true}
      />

      <BlogCard 
        title="Advanced JavaScript" 
        description="Deep dive into JS concepts."
        featured={false}
      />
    </div>
  );
}

export default App;
