import { combineReducers } from 'redux-immutable'
import discoverReducer from '../pages/home/discover/store/reducer'

export default combineReducers({
    discover: discoverReducer
})