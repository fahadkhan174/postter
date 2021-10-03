import axios from '../../../utils/axiosConfig';

const API_URL = '/api';

const getAllUsers = () => axios.get(`${API_URL}/users`);

const getUserBoard = () => axios.get(`${API_URL}/user`);

const getModeratorBoard = () => axios.get(`${API_URL}/mod`);

const getAdminBoard = () => axios.get(`${API_URL}/admin`);

export default {
  getAllUsers,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard
};
