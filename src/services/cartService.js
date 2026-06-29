import axios from "axios";

const API_URL = "http://localhost:8084/api/cart";

// Add item
export const addCartItem = async (cartItem) => {
  const response = await axios.post(API_URL, cartItem);
  return response.data;
};

// Get user's cart
export const getCartItems = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

// Remove item
export const removeCartItem = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};