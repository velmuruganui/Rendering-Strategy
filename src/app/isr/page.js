import IncrementalPost from '../../components/IncrementalPost';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', 
    { next: { revalidate: 60 } }  // Revalidate every 60 seconds
  );
  return res.json();
}

export default async function IncrementalPage() {
  const post = await getData();
  
  return (
    <div>
      <h1>Incremental Static Regeneration Example</h1>
      <IncrementalPost 
        post={post} 
        lastRevalidated={new Date().toISOString()} 
      />
    </div>
  );
}
