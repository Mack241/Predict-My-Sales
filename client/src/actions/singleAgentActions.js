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
                Authorization: 'Bearer K7ALSuAw3VqawWqt7cXJKDW9XRgRy3Pe',
            },
        }

        const response = await axios.post('http://6ea358e5-c069-4216-a833-263b98444bde.eastus2.azurecontainer.io/score', data, config)

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