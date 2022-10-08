// af8a17e46c51edc1ac9a501622a34980
// https://api.themoviedb.org/3/movie/550?api_key=af8a17e46c51edc1ac9a501622a34980
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default instance;