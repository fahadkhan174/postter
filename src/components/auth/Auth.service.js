import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const register = (payload) => axios.post(`${API_URL}signup`, payload);

const login = (payload) =>
  axios.post(`${API_URL}signin`, payload).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
  });

const logout = () => {
  localStorage.removeItem('user');
};

const refreshToken = (payload) =>
  axios.post(`${API_URL}refreshToken`, payload).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
  });

export default {
  register,
  login,
  logout,
  refreshToken
};
