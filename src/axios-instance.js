import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-c0a13.firebaseio.com'
})

export default instance