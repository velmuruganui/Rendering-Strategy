export default function IncrementalPost({ post, lastRevalidated }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Rendered using Incremental Static Regeneration</p>
      <p>Last revalidated: {lastRevalidated}</p>
    </div>
  );
}
