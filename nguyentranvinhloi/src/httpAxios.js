import axios from "axios";
import { urlAPI } from "./config";

const httpAxios = axios.create({
    baseURL: urlAPI,
    timeout: 50000,
  
  });
export default httpAxios;
// headers: {'X-Custom-Header': 'foobar'}