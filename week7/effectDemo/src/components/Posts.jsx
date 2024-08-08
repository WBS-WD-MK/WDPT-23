import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let ignore = false;
    const getPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Something went wrong');
        const data = await res.json();
        if (!ignore) {
          setPosts(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getPosts();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title} - {post.body}
        </div>
      ))}
    </div>
  );
};

export default Posts;
