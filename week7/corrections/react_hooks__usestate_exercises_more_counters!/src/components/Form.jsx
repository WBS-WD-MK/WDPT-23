import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields');
    } else {
      console.log(formData);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' value={formData.name} onChange={handleChange} id='name' />
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' value={formData.email} onChange={handleChange} id='email' />
      <label htmlFor='phone'>Phone:</label>
      <input type='text' name='phone' value={formData.phone} onChange={handleChange} id='phone' />
      <label htmlFor='message'>Message:</label>
      <textarea
        name='message'
        value={formData.message}
        onChange={handleChange}
        id='message'
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default Form;
