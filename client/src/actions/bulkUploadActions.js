import axios from 'axios';
import { USER_DELETE_DATA_FAIL, 
         USER_DELETE_DATA_REQUEST, 
         USER_DELETE_DATA_SUCCESS, 
         USER_FETCH_DATA_FAIL, 
         USER_FETCH_DATA_REQUEST, 
         USER_FETCH_DATA_SUCCESS, 
         USER_FILE_UPLOAD_FAIL, 
         USER_FILE_UPLOAD_REQUEST, 
         USER_FILE_UPLOAD_SUCCESS } from '../constants/userConstants';


export const upload = (file, setUploadedFile) => async (dispatch) => {

    
    try{
        const formData = new FormData();
        formData.append('file', file)

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
        console.log(error)
    }

}

export const fetchData = () => async (dispatch) => {
    try{

        dispatch({
            type: USER_FETCH_DATA_REQUEST
        })

        const resData  = await axios.get('/fetch')
        const { data } = resData

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

export const deleteData = () => (dispatch) => {
    try{

        dispatch({
            type: USER_DELETE_DATA_REQUEST
        })

        const response = axios.get('/fetch/delete')

        dispatch({
            type: USER_DELETE_DATA_SUCCESS,
            payload: response
        })

    } catch(error) {

        dispatch({
            type: USER_DELETE_DATA_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}