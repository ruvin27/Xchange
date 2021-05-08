import { combineReducers } from 'redux'
import {  LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD,UID, UPDATE_NAME, UPDATE_PHONE, UPDATE_URI, UPDATE_NOT } from '../actions/user'
const initialstate = {
    email : "",
    uid : "",
    password: "", 
    name: "",
    phone:"",
    uri: null,
    messages: false
}
const user = (state = initialstate, action) => {

    switch (action.type) {
        case LOGIN:
            return {...state, email: action.payload.email, name:action.payload.name, phone:action.payload.phone, uid: action.payload.uid}
        case UID:
            return {...state, uid: action.payload}
        case UPDATE_NOT:
            return {...state, messages: action.payload}
        case UPDATE_URI:
            //console.log(action.payload)
            return {...state, uri: action.payload}
        case SIGNUP:
            return {...state, email: action.payload.email, name:action.payload.name, phone:action.payload.phone, uid: action.payload.uid}
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_NAME:
            return { ...state, name: action.payload }
        case UPDATE_PHONE:
            return { ...state, phone: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user
})

export default rootReducer