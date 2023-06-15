import axiosClient from 'utils/axios';

const endPoint = '/api/collection';

export default {
  async getAllCollections(payload) {
    const path = endPoint;

    const response = await axiosClient.get(path, payload);

    return response.data;
  },

  async getUserCollections(payload) {
    const path = `${endPoint}/user?brand=${payload}`;

    const response = await axiosClient.get(path, payload);

    return response.data;
  },

  async getMyCollection(payload) {
    const path = `${endPoint}/my-collection?walletAddress=${payload}`;

    const response = await axiosClient.get(path, payload);

    return response.data;
  },

  async createCollection(payload) {
    const path = endPoint;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async approveCollection(payload) {
    const path = `${endPoint}/${payload}`;

    const response = await axiosClient.put(path, payload);

    return response.data;
  },

  async declineCollection(payload) {
    const path = `${endPoint}/${payload}`;

    const response = await axiosClient.delete(path, payload);

    return response.data;
  },
};
