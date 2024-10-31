import { useState } from 'react';

import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    const response = await fetch('http://localhost:3000/file-upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    setImageUrl(data.location);
  };
  const handleFileChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFileChange} accept='image/*' />
        <button>Submit</button>
      </form>
      {imageUrl && (
        <div>
          <h2>Image Uploaded {imageUrl}</h2>
          <img src={imageUrl} style={{ width: '300px' }} />
        </div>
      )}
    </>
  );
}

export default App;
