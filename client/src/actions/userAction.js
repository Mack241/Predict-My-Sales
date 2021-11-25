import { USER_LOGIN_REQUEST,
         USER_LOGIN_SUCCESS,
         USER_LOGIN_FAIL,
         USER_LOGOUT,
         USER_FILE_UPLOAD_REQUEST,
         USER_FILE_UPLOAD_SUCCESS,
         USER_FILE_UPLOAD_FAIL,
         USER_FETCH_DATA_REQUEST,
         USER_FETCH_DATA_SUCCESS,
         USER_FETCH_DATA_FAIL} from "../constants/userConstants";
import axios from "axios";

export const login = (username, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const { data } = await axios.post('/login', { username, password })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')

    dispatch({
        type: USER_LOGOUT
    })

    document.location.href = '/login'
}

export const upload = (file, setUploadedFile) => async (dispatch) => {

    const formData = new FormData();
    formData.append('file', file)

    try{

        dispatch({
            type: USER_FILE_UPLOAD_REQUEST
        })
       
        const res = await axios.post('/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    
        const { fileName, filePath } = res.data
    
            setUploadedFile({ fileName, filePath })

        dispatch({
            type: USER_FILE_UPLOAD_SUCCESS,
            payload: res.data
        })

    } catch(error) {

        dispatch({
            type: USER_FILE_UPLOAD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }

}

export const fetchData = () => async (dispatch) => {
    try{

        dispatch({
            type: USER_FETCH_DATA_REQUEST
        })

        const data  = await axios.get('/fetch')

        dispatch({
            type: USER_FETCH_DATA_SUCCESS,
            payload: data
        })

    } catch(error) {

        dispatch({
            type: USER_FETCH_DATA_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}