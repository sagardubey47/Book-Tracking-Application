import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducer/auth.reducer";
import { homeVolumesReducer } from "./reducer/data.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    homeVolumes: homeVolumesReducer, 
})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;