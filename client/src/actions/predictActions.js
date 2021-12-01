import axios from "axios";
import { PREDICT_REQUEST,
         PREDICT_SUCCESS,
         PREDICT_FAIL} from "../constants/predictConstants";

export const predict = (fullDate, username) => async (dispatch) => {
    try{

        dispatch({
            type: PREDICT_REQUEST
        })

        const sendDate = await axios.post('/user/upload_predict_date', { fullDate, username })

        dispatch({
            type: PREDICT_SUCCESS,
        })
        
    } catch(error) {

        dispatch({
            type: PREDICT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
} 