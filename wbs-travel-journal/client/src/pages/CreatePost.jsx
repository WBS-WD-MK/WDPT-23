import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createPost } from '@/data';

const CreatePost = () => {
  const navigate = useNavigate();
  const [{ title, author, image, content }, setForm] = useState({
    title: '',
    author: '',
    image: '',
    content: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (!title || !author || !image || !content) throw new Error('All fields are required');
      setLoading(true);
      const newPost = await createPost({ title, author, image, content });
      setForm({ title: '', author: '', image: '', content: '' });
      navigate(`/post/${newPost._id}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='md:w-1/2 mx-auto flex flex-col gap-3' onSubmit={handleSubmit}>
      <div className='flex gap-2 justify-between'>
        <label className='form-control grow'>
          <div className='label-text'>Title</div>
          <input
            name='title'
            value={title}
            onChange={handleChange}
            placeholder='A title for your post...'
            className='input input-bordered w-full'
          />
        </label>
        <label className='form-control grow'>
          <div className='label-text'>Author</div>
          <input
            name='author'
            value={author}
            onChange={handleChange}
            placeholder='Your name...'
            className='input input-bordered w-full'
          />
        </label>
      </div>
      <label className='form-control w-full'>
        <div className='label-text'>Image URL</div>
        <input
          name='image'
          value={image}
          onChange={handleChange}
          placeholder='The URL of an image for your post...'
          className='input input-bordered w-full'
        />
      </label>
      <label className='form-control'>
        <div className='label-text'>Content</div>
        <textarea
          name='content'
          value={content}
          onChange={handleChange}
          className='textarea textarea-bordered h-24'
          placeholder='The content of your post...'
        ></textarea>
      </label>
      <button className='btn btn-primary self-center' disabled={loading}>
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
