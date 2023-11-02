import axios from "axios";
import { API_BASE_URL, tokenStr } from "../Config";

// const API_BASE_URL = "https://api.tezminds.com";
// let tokenStr =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE0NDQ0Nzg0MDAsInVzZXJuYW1lIjoiS2F1c2hhbCJ9.SMrgYrhFb_eJS-rdjIywDGf9VQFmm2uAUWPSeP-1FQc";

export const api = {
  getAllUsers: async (page, rowsPerPage) => {
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
  },
};
