import axios from "axios";

const API = "http://localhost:8084/api/orders";

export const placeOrder = async (order) => {

  const response = await axios.post(API, order);

  return response.data;

};

export const getOrders = async (userId) => {

  const response = await axios.get(
    `${API}/user/${userId}`
  );

  return response.data;

};