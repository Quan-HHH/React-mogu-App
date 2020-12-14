import * as actionTypes from './constants'
// import { getShoppingDataRequest } from '../../../api/request'
import { getShoppingDataRequest } from '@/api/request'
import { fromJS } from 'immutable'
import { createBScroll } from 'better-scroll'

export const changeShoppingTopList_AC = payload => ({
    type: actionTypes.CHANGE_SHOPPING_DATA,
    payload: fromJS({
        listName: 'shoppingTopDataList',
        data: payload
    })
})

export const changeShoppingMidList_AC = payload => ({
    type: actionTypes.CHANGE_SHOPPING_DATA,
    payload: fromJS({
        listName: 'shoppingMidDataList',
        data: payload
    })
})

export const changeShoppingCommodityList_AC = payload => ({
    type: actionTypes.CHANGE_SHOPPING_DATA,
    payload: fromJS({
        listName: 'shoppingCommodityDataList',
        data: payload
    })
})

export const changeMoreCommodityList_AC = payload => ({
    type: actionTypes.CHANGE_MORE_SHOPPING_DATA,
    payload: fromJS(payload)
})

export const changeStarColor_AC = payload => ({
    type: actionTypes.CHANGE_STAR_COLOR,
    payload
})

export const addCollectItem_AC = payload => ({
    type: actionTypes.ADD_COLLECT_ITEM_LIST,
    payload
})

export const removeCollectItem_AC = payload => ({
    type: actionTypes.REMOVE_COLLECT_ITEM_LIST,
    payload
})

export const increaseCartItem_AC = payload => ({
    type: actionTypes.INCREASE_CART_ITEM_LIST,
    payload
})

export const decreaseCartItem_AC = payload => ({
    type: actionTypes.DECREASE_CART_ITEM_LIST,
    payload
})

export const getShoppingDataList_AC = () => {
    return dispatch => {
        getShoppingDataRequest(0).then(res => {
                // console.log('res',res)
                const data1 = res['topList'];
                const data2 = res['middleList'];
                const data3 = res['commodityList'];
                // console.log(data3)
                dispatch(changeShoppingTopList_AC(data1));
                dispatch(changeShoppingMidList_AC(data2));
                dispatch(changeShoppingCommodityList_AC(data3));
        })
    }
}

export const getMoreCommodityData_AC = (offset) => {
    return dispatch => {
        getShoppingDataRequest(offset).then(res => {
            // console.log(res)
            const data1 = res['topList'];
            const data2 = res['middleList'];
            const data3 = res['commodityList'];
            // console.log('新请求过来的商品数据', data3)
            dispatch(changeShoppingTopList_AC(data1));
            dispatch(changeShoppingMidList_AC(data2));
            dispatch(changeMoreCommodityList_AC(data3));
        })
    }
}

export const changeGoodsIsCollect_AC = (id) => {
    return dispatch => {
        dispatch(changeStarColor_AC(id))
        dispatch(addCollectItem_AC(id))
    }
}

export const changeGoodsUnCollect_AC = (id) => {
    return dispatch => {
        dispatch(changeStarColor_AC(id));
        dispatch(removeCollectItem_AC(id))
    }
}