import axiosInstance from './http';

export const getUsersList = (search) => {
  return axiosInstance.get(`/search/users?q=${search}`)
}

export const getUser = (name) => {
  return axiosInstance.get(`/users/${name}`)
}