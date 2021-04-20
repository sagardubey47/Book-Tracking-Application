import { 
        HOME_VOLUME_FAIL, 
        HOME_VOLUME_REQUEST, 
        HOME_VOLUME_SUCCESS, 
        SEARCHED_REQUEST, 
        SEARCHED_SUCCESS, 
        SEARCHED_FAIL,
      } from "../actionType"

 const initialState = {
     volumes: [],
     loading: false,
 }
 

export const homeVolumesReducer = (prevState = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
         case HOME_VOLUME_SUCCESS: 
            return {
                ...prevState,
                volumes: payload,
                loading: false,
            }

         case HOME_VOLUME_FAIL: 
            return {
                ...prevState,
                loading: false,
                error: payload,
            }

         case HOME_VOLUME_REQUEST: 
         case SEARCHED_REQUEST: 
            return {
                ...prevState,
                loading: true,
            } 
            
         case SEARCHED_SUCCESS: 
            return {
                volumes: payload,
                loading: false,
            }   

          case SEARCHED_FAIL: 
            return {
                ...prevState,
                loading: false,
                error: payload
            }  

        default: return prevState  
    }
}
