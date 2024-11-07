import TimeDisplay from './TimeDisplay';
import RenderingDetails from './RenderingDetails';
import RenderingDebugger from './RenderingDebugger';

export default function IncrementalPost({ post, lastRevalidated }) {
  return (
    <div>
      <div className="post">
        <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
        <p className="mb-2 text-gray-600">{post.body}</p>
        <p className="text-sm text-violet-500">
          Rendered using Incremental Static Regeneration
        </p>
        <TimeDisplay timestamp={lastRevalidated} label="Last revalidated on" />
      </div>
      <RenderingDetails type="incremental" />
      <RenderingDebugger 
        type="isr"
        buildTime={new Date().toISOString()}
        lastRevalidated={lastRevalidated}
        revalidateInterval={60} // Match your revalidate setting
      />
    </div>  
  );
}