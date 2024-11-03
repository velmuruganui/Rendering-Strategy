export default function ServerPost({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Rendered using Server-Side Rendering</p>
      <p>Generated at: {new Date().toISOString()}</p>
    </div>
  );
}
