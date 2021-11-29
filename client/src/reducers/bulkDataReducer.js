import { USER_DELETE_DATA_FAIL, 
         USER_DELETE_DATA_REQUEST,
         USER_DELETE_DATA_SUCCESS, 
         USER_FETCH_DATA_FAIL, 
         USER_FETCH_DATA_REQUEST, 
         USER_FETCH_DATA_SUCCESS, 
         USER_FILE_UPLOAD_FAIL, 
         USER_FILE_UPLOAD_REQUEST, 
         USER_FILE_UPLOAD_SUCCESS } from "../constants/userConstants"

export const bulkDataReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_FILE_UPLOAD_REQUEST:
            return { loading: true, uploadStat: false }
        case USER_FILE_UPLOAD_SUCCESS:
            console.log(action.payload)
            return { loading: false, uploadStat: true, file: action.payload }
        case USER_FILE_UPLOAD_FAIL:
            return { loading: false, uploadStat: false, error: action.payload }
        case USER_FETCH_DATA_REQUEST:
            return { loading: true, prediction: false }
        case USER_FETCH_DATA_SUCCESS:
            return { loading: false, data: action.payload, prediction: false }
        case USER_FETCH_DATA_FAIL:
            return { loading: false, error: action.payload, prediction: false }
        case USER_DELETE_DATA_REQUEST:
            return { deleteDataLoad: true, success: false }
        case USER_DELETE_DATA_SUCCESS:
            return { deleteDataLoad: false, success: true, data: state.data = [] }
        case USER_DELETE_DATA_FAIL:
            return { deleteDataLoad: false, success: false, deleteError: action.payload }
        default:
            return state
    }
}


