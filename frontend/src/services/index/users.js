import axios from "axios";

export const signup = async ({ name, email, password }) => {
  try {
    console.log(process.env.REACT_APP_BACKEND_API_URL);
    const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/users/register`, {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/users/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getUserProfile = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/users/profile`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfile = async ({ token, userData, userId }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_API_URL}/api/users/updateProfile/${userId}`,
      userData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfilePicture = async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_API_URL}/api/users/updateProfilePicture`,
      formData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getAllUsers = async (
  token,
  searchKeyword = "",
  page = 1,
  limit = 10
) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data, headers } = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_URL}/api/users?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`,
      config
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const deleteUser = async ({ slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/api/users/${slug}`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getAllAppUsers = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`${process.env.REACT_APP_BECHO_SERVER_URL}/users`, config);
    // console.log("API Response:", data); // Add this for debugging
    return data;
  } catch (error) {
    console.error("Error fetching app users:", error); // Add this for debugging
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const deleteAppUser = async ({ id, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(
      `${process.env.REACT_APP_BECHO_SERVER_URL}/users/delete/${id}`,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const sendNotification = async ({ token, userId, title, description }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Determine whether we are sending a broadcast or individual notification
    const dataPayload = userId
      ? { userId, title, description }  // Individual notification
      : { title, description };  // Broadcast notification (no userId)

    const { data } = await axios.post(
      `${process.env.REACT_APP_BECHO_SERVER_URL}/notification/send`,
      dataPayload,
      config
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


