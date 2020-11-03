import { axiosInstance } from './config'

// 获取首页分类resItem的数据
export const getResItemRequest = (() => {
    return axiosInstance.get("/resItem");
})

export const getModelDataRequest = (() => {
    return axiosInstance.get('/modelData');
})

export const getShoppingDataRequest = (() => {
    return axiosInstance.get('./shoppingData');
})