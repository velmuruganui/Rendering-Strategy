import TimeDisplay from './TimeDisplay';
import RenderingDetails from './RenderingDetails';

export default function StaticPost({ post }) {
  return (
    <div>
      <div className="post">
        <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
        <p className="mb-2 text-gray-600">{post.body}</p>
        <p className="text-sm text-violet-500">Rendered using Static Site Generation</p>
        <TimeDisplay timestamp={new Date().toISOString()} label="Build time:" />
      </div>
      <RenderingDetails type="static" />
    </div>
  );
}