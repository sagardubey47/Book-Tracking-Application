import { HOME_VOLUME_FAIL, HOME_VOLUME_REQUEST, HOME_VOLUME_SUCCESS } from "../actionType"
import {getVolumes} from "../../api/api"

export const getPopularVolumes = () => async dispatch => {
    try {
        dispatch({
           type: HOME_VOLUME_REQUEST,
        })

      const {data} = await getVolumes();
      console.log(data.items);

       dispatch({
           type: HOME_VOLUME_SUCCESS,
           payload: {
                volumes: data.items,
           },
       })
    } catch (error) {
        console.log(error);
        dispatch({
            type: HOME_VOLUME_FAIL,
            payload: error.message,
        })
    }
}