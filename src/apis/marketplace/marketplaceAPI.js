import axiosClient from 'utils/axios';

const endPoint = '/api/market-place';

export default {
  async getMarketPlace(payload) {
    const path = endPoint;

    const response = await axiosClient.get(path, payload);

    return response.data;
  },

  async sellNFT(payload) {
    const path = endPoint;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async buyNFT(payload) {
    const path = `${endPoint}/${payload.id}`;

    const response = await axiosClient.delete(path, payload.body);

    return response.data;
  },
};
