import axios from 'axios'

export const baseUrl = "http://localhost:8080/api";

const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '获取数据失败')
    }
)

export { axiosInstance }