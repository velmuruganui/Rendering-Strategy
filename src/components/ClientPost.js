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
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <p>Rendered using Client-Side Rendering</p>
    </div>
  );
}
