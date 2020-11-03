import { fromJS } from 'immutable';
import * as actionTypes from './constants'

const defaultState = fromJS({
    shoppingTopDataList: [],
    shoppingMidDataList: [],
    shoppingCommodityDataList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SHOPPING_DATA:
            const { listName, data } = action.payload.toJS()
            return state.setIn([listName], fromJS(data))
            
        default:
            return state;
    }
}