import axios from "axios";
import { API_BASE_URL, AUTH_TOKEN } from "../Config";

export const CustomerListApi = {
  getAllUsers: async (
    start,
    limit,
    searchQuery,
    successCallback,
    errorCallback
  ) => {
    const response = await axios
      .get(
        `${API_BASE_URL}/users?start=${start}&limit=${limit}&search=${searchQuery}`,
        {
          headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
        }
      )
      .then((response) => {
        const data = response.data;
        successCallback(data.data);
      })
      .catch((error) => {
        errorCallback(error);
      });
  },
};
