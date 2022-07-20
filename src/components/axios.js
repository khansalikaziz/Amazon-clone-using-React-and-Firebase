import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/final-deployment-of/us-central1/api'   //The Api(cloud function) url

})

export default instance;