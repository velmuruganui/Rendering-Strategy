export default function StaticPost({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Rendered using Static Site Generation</p>
      <p>Build time: {new Date().toISOString()}</p>
    </div>
  );
}
