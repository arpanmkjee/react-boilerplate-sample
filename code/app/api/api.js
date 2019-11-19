import axios from 'axios'
// import { AuthService } from '../service/AuthService'

const isLocal = 'local'
const url = 'http://localhost:8090/api'

const instance = axios.create({
    baseURL: url,
    timeout: 3000,
    params: {} // do not remove this, its added to add params later in the config
})

//const authService = new AuthService()
// // Add a request interceptor
// instance.interceptors.request.use(
//     async config => {
//         // const token = authService.getToken() 

//         config.headers.common['Access-Control-Allow-Origin'] = '*'

//         return config
//     },
//     error => {
//         // Do something with request error
//         return Promise.reject(error)
//     }
// )

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default {
    getData(action, data) {
        return instance.get(action, data)
    },
    postData(action, data) {
        return instance.post(action, data)
    },
    putData(action, data) {
        let url = `${
            isLocal
                ? url
                : url
            }`
        url += action
        return instance.put(url, data)
    },
    deleteData(action) {
        let url = `${
            isLocal
                ? url
                : url
            }`
        url += action
        return instance.delete(url)
    }
}