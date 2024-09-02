const Skeleton = ({ items }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      {Array.from({ length: items }).map((_, index) => (
        <div className='card bg-base-300 shadow-xl' key={index}>
          <div className='skeleton bg-base-200 h-48 p-3'></div>
          <div className='skeleton card-body'>
            <div className='skeleton card-title h-14 justify-center'></div>
            <div className='skeleton badge w-24 text-white rounded-lg'></div>
            <div className='skeleton w-24'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
