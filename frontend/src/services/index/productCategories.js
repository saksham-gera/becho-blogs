import axios from "axios";

  export const getAllCategories = async () => {
    try {
      const { data, headers } = await axios.get(
        `${process.env.REACT_APP_BECHO_SERVER_URL}/category`
      );
      return { data, headers };
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  export const getSingleCategory = async ({ id }) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BECHO_SERVER_URL}/category/${id}`);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };


  export const deleteCategory = async ({ id, token }) => {
    try {
      console.log(id);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BECHO_SERVER_URL}/category/delete`,
        { id },
        config
      );
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };


  export const createCategory = async ({ token, title }) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BECHO_SERVER_URL}/category`,
        { title },
        config
      );
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };


  export const updateCategory = async ({ token, id, title }) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BECHO_SERVER_URL}/category/update`,
        { id, title },
        config
      );
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };