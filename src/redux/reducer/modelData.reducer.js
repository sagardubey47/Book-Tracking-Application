import { 
        MODEL_REQUEST,
        MODEL_SUCCESS,
        MODEL_FAIL
      } from "../actionType"

 const initialState = {
     model: [],
     loading: false,
 }
 

export const modelDataReducer = (prevState = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
         case MODEL_SUCCESS: 
            return {
                ...prevState,
                model: payload,
                loading: false,
            }

         case MODEL_FAIL: 
            return {
                ...prevState,
                loading: false,
                error: payload,
            }

         case MODEL_REQUEST: 
            return {
                ...prevState,
                loading: true,
            } 

        default: return prevState  
    }
}
