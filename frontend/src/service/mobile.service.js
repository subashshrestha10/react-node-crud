const axios = require("axios").default;

const BASE_URL = "http://localhost:8000/api/";

export const MobileService = {
  listMobile: () => {
    const url = BASE_URL + "mobiles";
    return axios.get(url);
  },
};
