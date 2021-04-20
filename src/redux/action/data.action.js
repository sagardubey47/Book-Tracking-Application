import { 
        HOME_VOLUME_FAIL, 
        HOME_VOLUME_REQUEST, 
        HOME_VOLUME_SUCCESS, 
        SEARCHED_REQUEST, 
        SEARCHED_SUCCESS, 
        SEARCHED_FAIL,
        MODEL_REQUEST,
        MODEL_SUCCESS,
        MODEL_FAIL
      } from "../actionType"

import {request} from "../../api/api"

const randomRecommend = ["stories", "horror", "suspense", "funny", "romantic"];
const randomNum = Math.floor(Math.random()*4);


export const getPopularVolumes = () => async dispatch => {
    try {
        dispatch({
           type: HOME_VOLUME_REQUEST,
        })

      const {data} = await request("volumes/", {
            params: {
                q: randomRecommend[randomNum],
                maxResults:20,
            }
      });

      console.log(data.items);

       dispatch({
           type: HOME_VOLUME_SUCCESS,
           payload: data.items,
       })
    } catch (error) {
        console.log(error);
        dispatch({
            type: HOME_VOLUME_FAIL,
            payload: error.message,
        })
    }
}


export const searchVolumes = (searchParam) => async (dispatch) => {
    console.log(searchParam);
    try {
        dispatch({
           type: SEARCHED_REQUEST, 
        })

      const {data} = await request("volumes/", {
          params: {
                q: searchParam,
                maxResults:20,
            }
      });
      console.log(data.items);

       dispatch({ 
           type: SEARCHED_SUCCESS,
           payload:  data.items,
       })
    } catch (error) {
        console.log(error);
        dispatch({
            type: SEARCHED_FAIL,
            payload: error.message,
        })
    }
}
