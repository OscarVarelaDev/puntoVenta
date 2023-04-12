import {combineReducers} from 'redux'
import productosReducer from './productosReducer'
import userReducer from './userReducer'

export default combineReducers({
    productos:productosReducer,
    usuarios: userReducer

})

