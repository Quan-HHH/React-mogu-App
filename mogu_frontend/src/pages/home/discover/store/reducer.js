import { fromJS } from 'immutable';
import * as actionTypes from './constants'
// import { CHANGE_RESITEM } from './constants.js'

const defaultState = fromJS({
    // 分类resItem数据
    resItemList: [],
    modelDataList: [],
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_RESITEM:
        // case 'CHANGE_RESITEM':
            return state.setIn(['resItemList'], fromJS(action.payload))
            
        case actionTypes.SET_MODELDATA:
            return state.setIn(['modelDataList'], fromJS(action.payload))
        default:
            return state;
    }

}