import axios from "axios";
import Cookies from "js-cookie";

// const BASE_URL = process.env.REACT_APP_BACKEND_API;
// const BASE_URL = 'http://192.168.1.182:8022';
const BACKEND_API = 'https://diceapi.tretainfotech.com';
// const BACKEND_API = process.env.REACT_APP_BACKEND_API;

function reqHeaders() {
  if (localStorage.getItem("token") !== null && localStorage.getItem("token") !== '' && localStorage.getItem("token") !== 'undefined') {
    const accesstoken = localStorage.getItem("token");
    axios.defaults.headers.common['Authorization'] = `Bearer ${accesstoken}`;
  }
}
export function postApiRequest({ url = '', data = {} }) {
  reqHeaders();
  return axios.post(`${BACKEND_API}${url}`, data);
}
export function getApiRequest({ url = '', params = {} }) {
  reqHeaders();
  return axios.get(`${BACKEND_API}${url}`, params);
}
export function patchApiRequest({ url = '', data = {} }) {
  reqHeaders();
  return axios.patch(`${BACKEND_API}${url}`, data);
}export function putApiRequest({ url = '', data = {} }) {
  reqHeaders();
  return axios.patch(`${BACKEND_API}${url}`, data);
}
export function deleteApiRequest({ url = '', params = {} }) {
  reqHeaders();
  return axios.delete(`${BACKEND_API}${url}`, params);
}
// const postApiRequest = async (endpoint, action = {}, options = {}) => {
//   const userData = Cookies.get("userData");
//   const token = userData ? JSON.parse(userData) : null;

//   const headers = {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//     ...options.headers,
//   };

//     const response = await axios.post(`${BASE_URL}${endpoint}`, action, {
//       headers,
//       ...options,
//     });
//     return response;
// };
// const getApiRequest = async (endpoint, action = {}, options = {}) => {
//   const userData = Cookies.get("userData");
//   const token = userData ? JSON.parse(userData).token : null;

//   const headers = {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//     ...options.headers,
//   };

//   // try {
//     const response = await axios.get(`${BASE_URL}${endpoint}`, action, {
//       headers,
//       ...options,
//     });
   
//     return response;
//   // } catch (err) {
//   //   )
   
//   // }
// };


