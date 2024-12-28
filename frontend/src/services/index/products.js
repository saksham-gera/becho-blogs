import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BECHO_SERVER_URL;

export const getAllProducts = async () => {
  try {
    const { data, headers } = await axios.get(`${apiBaseUrl}/products`);
    return { data: data.data, headers};
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getSingleProduct = async ({ id }) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/products/${id}`);
    return response.data.product;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const deleteProduct = async ({ id, token }) => {
  try {
    const response = await axios.delete(`${apiBaseUrl}/products/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const createProduct = async (productData) => {
  try {
    const { token, image, ...productDetails } = productData;

    // Use FormData for file uploads
    const formData = new FormData();
    Object.keys(productDetails).forEach((key) => {
      formData.append(key, productDetails[key]);
    });

    if (image) {
      formData.append("image", image); // Append the image file
    }

    const response = await axios.post(`${apiBaseUrl}/products`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Required for file uploads
      },
    });

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An error occurred while creating the product.";
    throw new Error(errorMessage);
  }
};

export const updateProduct = async (productData) => {
  try {
    const { token, id, updatedData } = productData;
    const formData = new FormData();

    Object.entries(updatedData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    const response = await axios.put(`${apiBaseUrl}/products/update/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};