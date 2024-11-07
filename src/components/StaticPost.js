import TimeDisplay from './TimeDisplay';
import RenderingDetails from './RenderingDetails';
import RenderingDebugger from './RenderingDebugger';

export default function StaticPost({ post }) {
  const buildTime = new Date().toISOString();

  return (
    <div>
      <div className="post">
        <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
        <p className="mb-2 text-gray-600">{post.body}</p>
        <p className="text-sm text-violet-500">Rendered using Static Site Generation</p>
        <TimeDisplay timestamp={buildTime} label="Build time:" />
      </div>
      <RenderingDetails type="static" />
      <RenderingDebugger 
        type="ssg"
        buildTime={buildTime}
      />
    </div>
  );
}