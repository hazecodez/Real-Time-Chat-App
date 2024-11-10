import axios from "axios";

const USER_URL = "http://localhost:5000/api/auth";
const CHAT_URL = "http://localhost:5000/api/chat";
const NOTIFICATION_URL = "http://localhost:5000/api/notifications";

// Register a new user
export const register = async (data) => {
  try {
    const response = await axios.post(`${USER_URL}/register`, data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};

// Log in a user
export const login = async (data) => {
  try {
    const response = await axios.post(`${USER_URL}/login`, data);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token); // Store token for auth
    }
    return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

// Log out a user
export const logout = () => {
  localStorage.removeItem("token");
};

// Fetch chat history between two users
export const getChatHistory = async (userId1, userId2) => {
  try {
    const response = await axios.get(
      `${CHAT_URL}/history/${userId1}/${userId2}`
    );
    return response.data;
  } catch (error) {
    console.error("Chat History Error:", error);
    throw error;
  }
};

// Send a message between two users
export const sendMessage = async (messageData) => {
  try {
    const response = await axios.post(`${CHAT_URL}/send-message`, messageData);
    return response.data;
  } catch (error) {
    console.error("Send Message Error:", error);
    throw error;
  }
};

// Fetch notifications for a specific user
export const getNotifications = async (userId) => {
  try {
    const response = await axios.get(`${NOTIFICATION_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Fetch Notifications Error:", error);
    throw error;
  }
};
