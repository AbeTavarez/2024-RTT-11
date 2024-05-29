import BlogListItem from "../BlogListItem/BlogListItem";
import { blogs } from "../../data/blogs";

function BlogList() {
  return (
    <>
      <h2>Blog List Component</h2>

      <BlogListItem blog={blogs[0]} id='1'/>

      <BlogListItem blog={blogs[1]} id='2'/>

      <BlogListItem blog={blogs[2]} id='2'/>

      <BlogListItem blog={blogs[3]} id='2'/>

      <BlogListItem blog={blogs[4]} id='2'/>

    </>
  );
}

export default BlogList;
