const PostSkeleton = () => {
  return (
    <>
      <div className='h-12 skeleton w-1/3 mx-auto'></div>
      <div className='h-96 w-1/2 skeleton mx-auto my-2' />
      <p className='h-36 skeleton'></p>
    </>
  );
};

export default PostSkeleton;
