import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const createUser = async (name, email, phone, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/register`, {
      name,
      email,
      phone,
      password,
    });
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log({ loginUserError: error });
    return alert("usuario y/o contraseña incorrecta");
  }
};

export const createWorker = async ({
  _id,
  category,
  fileAvatar,
  desc,
  province: { provinceId, provinceName },
  city: { cityId, cityName },
  address
}) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/worker/${_id}`, {
      category,
      fileAvatar,
      desc,
      provinceId,
      provinceName,
      cityId,
      cityName,
      address
    });
    return data;
  } catch (error) {
    console.error("Error creating worker:", error);
    throw error;
  }
};


export const verifyUser = async (email, code) => {
  try {
    const response = await axios.patch(`${BASE_URL}/auth/verify`, {
      email,
      code,
    });
    return response.data;
  } catch (error) {
    console.log({ verifyUserError: error });
    return alert("Código incorrecto");
  }
};

export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const getWorkerUsers = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/auth/workers`);
    return data;
  } catch (error) {
    console.error("Error fetching worker users:", error);
    throw error;
  }
};