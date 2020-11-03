import * as actionTypes from './constants'
// import { getShoppingDataRequest } from '../../../api/request'
import { getShoppingDataRequest } from '@/api/request'
import { fromJS } from 'immutable'

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

export const getShoppingDataList_AC = () => {
    return dispatch => {
        getShoppingDataRequest().then(res => {
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
