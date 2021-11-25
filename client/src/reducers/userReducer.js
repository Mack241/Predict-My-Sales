import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_FILE_UPLOAD_REQUEST,
    USER_FILE_UPLOAD_SUCCESS, 
    USER_FILE_UPLOAD_FAIL,
    USER_FETCH_DATA_REQUEST,
    USER_FETCH_DATA_SUCCESS,
    USER_FETCH_DATA_FAIL} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const fileUplaodReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_FILE_UPLOAD_REQUEST:
            return { loading: true }
        case USER_FILE_UPLOAD_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_FILE_UPLOAD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const fetchDataReducer = (state = {}, action) => {
    switch(action.type){
        case USER_FETCH_DATA_REQUEST:
            return { loading: true }
        case USER_FETCH_DATA_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_FETCH_DATA_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}