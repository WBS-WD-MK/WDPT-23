import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSinglePost } from '@/data';
import { PostSkeleton } from '@/components';

const Post = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const posts = await getSinglePost(id);
        setPost(posts);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <PostSkeleton />;
  return (
    <>
      <h1 className='text-center text-4xl'>{post.title}</h1>
      <img src={post.image} alt={post.title} className='rounded-lg max-h-96 mx-auto' />
      <p>{post.content}</p>
    </>
  );
};

export default Post;
