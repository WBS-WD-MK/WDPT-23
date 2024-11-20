const API_URL = import.meta.env.VITE_APP_TRAVEL_JOURNAL_API_URL;
if (!API_URL) throw new Error('API URL is required, are you missing a .env file?');
const baseURL = `${API_URL}/posts`;

export const getPosts = async () => {
  const res = await fetch(baseURL);
  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error('An error occurred while fetching the posts');
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
};

export const getSinglePost = async id => {
  const res = await fetch(`${baseURL}/${id}`);
  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error('An error occurred while fetching the post');
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
};

export const createPost = async formData => {
  const res = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  if (!res.ok) {
    const errorData = await res.json();
    if (!errorData.error) {
      throw new Error('An error occurred while creating the post');
    }
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
};
