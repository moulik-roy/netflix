import axios from "axios";
import { TMDBBaseURL } from "../utils/constants";

const instance = axios.create({
    baseURL: TMDBBaseURL
});

export default instance;