import axiosInstance from './http';

export const getUser = (name) => {
  return axiosInstance.get(`/users/${name}`)
}