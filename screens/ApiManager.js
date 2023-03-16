import axios from 'axios'

const ApiManager = axios.create({
    baseURL: 'https://xitysites.onrender.com/',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;