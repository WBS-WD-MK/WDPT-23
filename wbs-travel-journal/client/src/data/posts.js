import axiosInstance from '../axiosIntercepter';
const baseURL = `/posts`;

export const getPosts = async () => {
  try {
    const res = await axiosInstance(baseURL);
    return res.data;
  } catch (error) {
    const errorData = error.response.data;
    if (!errorData.error) {
      throw new Error('An error occurred while fetching the posts');
    }
    throw new Error(errorData.error);
  }
};

export const getSinglePost = async (id) => {
  try {
    const res = await axiosInstance(`${baseURL}/${id}`);
    return res.data;
  } catch (error) {
    const errorData = error.response.data;
    if (!errorData.error) {
      throw new Error('An error occurred while fetching the post');
    }
    throw new Error(errorData.error);
  }
};

export const createPost = async (formData) => {
  try {
    const res = await axiosInstance.post(`${baseURL}`, formData);
    return res.data;
  } catch (error) {
    const errorData = error.response.data;
    if (!errorData.error) {
      throw new Error('An error occurred while creating the post');
    }
    throw new Error(errorData.error);
  }
};
