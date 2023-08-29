const Post = ({ params: { id } }: { params: { id: string } }) => {
  return <h1>Post {id}</h1>;
};

export default Post;
