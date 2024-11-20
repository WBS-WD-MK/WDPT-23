const PostsSkeleton = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 '>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className='card bg-base-100 shadow-xl'>
          <div className='h-48 skeleton'></div>
          <div className='card-body h-56'>
            <h2 className='card-title h-6 skeleton'></h2>
            <p className='truncate text-wrap h-40 skeleton'></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsSkeleton;
