import axios from 'axios';
import tokenService from '../components/auth/Token.service';
import authService from '../components/auth/Auth.service';

// axios default config
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  (request) => {
    // Edit request config
    request.headers = { Authorization: `Bearer ${tokenService.getLocalAccessToken()}` };
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit response config
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 404 &&
      originalRequest.url === '/api/auth/refreshToken' &&
      originalRequest.url !== '/api/auth/signin'
    ) {
      window.location.replace('/login');
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const rs = await authService.refreshToken({
          refreshToken: tokenService.getLocalRefreshToken()
        });

        const { accessToken } = rs.data;
        tokenService.updateLocalAccessToken(accessToken);

        return axios(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
