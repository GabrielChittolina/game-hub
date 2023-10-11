import axios from 'axios';

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3a87c61723894f6db7bd9c657f3830e1",
  },
});