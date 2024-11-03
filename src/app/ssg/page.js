import StaticPost from '@/components/StaticPost';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', 
    { cache: 'force-cache' }  // This ensures the data is cached at build time
  );
  return res.json();
}

export default async function StaticPage() {
  const post = await getData();
  
  return (
    <div>
      <h1>Static Site Generation Example</h1>
      <StaticPost post={post} />
    </div>
  );
}
