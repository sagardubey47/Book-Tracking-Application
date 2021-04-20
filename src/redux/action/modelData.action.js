import { 
        MODEL_REQUEST,
        MODEL_SUCCESS,
        MODEL_FAIL
      } from "../actionType"

import {request} from "../../api/api"


export const getModel = (id) => async dispatch => {
      
    try {
        
        dispatch({
            type: MODEL_REQUEST
        })

        const {data} = await request(`volumes/${id}`);
        console.log(data);

         dispatch({
            type: MODEL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MODEL_FAIL,
            payload: error.message
        })
    }

}