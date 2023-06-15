import axiosClient from 'utils/axios';

const endPoint = '/api/brand';

export default {
  async getAllBrands(payload) {
    const path = endPoint;

    const response = await axiosClient.get(path, payload);

    return response.data;
  },

  async getUserBrand(payload) {
    const path = `${endPoint}/detail?walletAddress=${payload}`;

    const response = await axiosClient.get(path, payload);

    return response.data;
  },

  async createBrand(payload) {
    const path = endPoint;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async approveBrand(payload) {
    const path = `${endPoint}/${payload}`;

    const response = await axiosClient.put(path, payload);

    return response.data;
  },

  async declineBrand(payload) {
    const path = `${endPoint}/${payload}`;

    const response = await axiosClient.delete(path, payload);

    return response.data;
  },
};
