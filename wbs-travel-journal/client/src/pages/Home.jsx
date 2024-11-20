import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getPosts } from '@/data';
import { PostCard, PostsSkeleton } from '@/components';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <PostsSkeleton />;
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 '>
      {posts.map(post => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  );
};

export default Home;
