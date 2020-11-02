import * as actionTypes from './constants'
import { getResItemRequest, getModelDataRequest } from '../../../../api/request'

// export const 

export const getDiscoverList_AC = () => {
    return dispatch => {
        getResItemRequest().then( res => {
            dispatch({
                type: actionTypes.SET_RESITEM,
                payload: res
            })
        }),
        getModelDataRequest().then( res => {
            dispatch({
                type: actionTypes.SET_MODELDATA,
                payload: res
            })
        })
    }
}