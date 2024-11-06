export default function ServerPost({ post }) {
  return (
    <div className="post">
      <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
      <p className="mb-2 text-gray-600">{post.body}</p>
      <p className="text-sm text-violet-500">Rendered using Server-Side Rendering</p>
      <p className="text-sm text-gray-500">Generated at: {new Date().toISOString()}</p>
    </div>
  );
}
