import axiosInstance from '../axiosIntercepter';
const baseURL = '/auth';
export const me = async () => {
  try {
    const res = await axiosInstance(`${baseURL}/me`);
    return res.data;
  } catch (error) {
    if (error.response) {
      console.error('Authentication Error', error.response.data.error);
    }
  }
};

export const signin = async (formData) => {
  try {
    const res = await axiosInstance.post(`${baseURL}/signin`, formData);
    return res.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An unexpected error occurred during signin' };
    }
  }
};

export const signup = async (formData) => {
  try {
    const res = await axiosInstance.post(`${baseURL}/signup`, formData);
    return res.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An unexpected error occurred during signup' };
    }
  }
};
export const signout = async () => {
  try {
    const res = await axiosInstance.delete(`${baseURL}/signout`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An unexpected error occurred during signout' };
    }
  }
};
