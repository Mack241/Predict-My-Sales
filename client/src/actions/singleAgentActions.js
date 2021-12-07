import { AGENT_PREDICT_REQUEST,
         AGENT_PREDICT_SUCCESS,
         AGENT_PREDICT_FAIL
        } from "../constants/singleAgentConstants";  
import axios from "axios";

export const predict = (data) => async (dispatch) => {
    try{
        dispatch({
            type: AGENT_PREDICT_REQUEST
        })

        const config = {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer K7ALSuAw3VqawWqt7cXJKDW9XRgRy3Pe',
                'Ocp-Apim-Subscription-Key': 'ce1c8903141c4d80b15eed57a28ae7da'
            },
        }

        const response = await axios.post('http://predictmysalesapi.azure-api.net/pms-api-test/score', config, data)

        dispatch({
            type: AGENT_PREDICT_SUCCESS,
            payload: response
        })

    } catch(error) {

        dispatch({
            type: AGENT_PREDICT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}