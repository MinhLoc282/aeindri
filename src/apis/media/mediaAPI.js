import axiosClient from 'utils/axios';

const endPoint = '/api/media';

export default {
  async uploadImage(payload) {
    const path = endPoint;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },
};
