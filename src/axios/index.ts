import axios, {CreateAxiosDefaults} from "axios";


const config = {
    baseURL : 'http://localhost:80/',
    headers: {},
    timeout : 1000,
}

const instance = axios.create(config);


export default instance