'use client';
import { useState, useEffect } from 'react';

export default function ClientPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await res.json();
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="post">
      <h2 className="mb-2 text-2xl font-bold">{post?.title}</h2>
      <p className="mb-2 text-gray-600">{post?.body}</p>
      <p className="text-sm text-violet-500">Rendered using Client-Side Rendering</p>
    </div>
  );
}
