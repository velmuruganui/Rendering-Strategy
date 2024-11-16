import ServerPost from '@/components/ServerPost';

// By default, this page will be dynamically rendered
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', 
    { cache: 'no-store' }  // This ensures fresh data on every request
  );
  return res.json();
}

export default async function ServerPage() {
  const post = await getData();
  
  return (
    <div>
      <h1>Server-Side Rendering</h1>
      <ServerPost post={post} />
    </div>
  );
}
