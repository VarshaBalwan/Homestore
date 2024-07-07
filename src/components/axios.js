import axios from "axios"

const instance = axios.create({
    // api url
    baseURL: 'https://homestore-backend.herokuapp.com/' 
})

export default instance