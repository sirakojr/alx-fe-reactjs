import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <>
      <div>BlogPost</div>
      <p>Blog Id: {id} </p>
    </>
  );
};

export default BlogPost;
