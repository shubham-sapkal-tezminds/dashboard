import axios from "axios";
import { API_BASE_URL, tokenStr } from "../Config";

export const getAllUsers = async (page, rowsPerPage) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
      params: {
        start: page * rowsPerPage + 1,
        limit: rowsPerPage,
      },
    });
    const data = response.data;
    // console.log("get req 1", data);
    if (data.errorCode !== 0) {
      throw new Error(data.errorMessage);
    }

    return data.data;
  } catch (error) {
    throw error;
  }
};
