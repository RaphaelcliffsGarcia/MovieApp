import axios from "axios";

// URL FILMES EM CARTAZ:
//Base URL:
// https://api.themoviedb.org/3

///movie/now_playing &language=pt-BR &page=1
export const key = "0218578cbebe6c7d766a61008352ab4a";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default api;
