import UserReducer from "../Reducers/userReducer";

import {combineReducers} from "redux"


const AllReducers = combineReducers({

    user:UserReducer
})

export default AllReducers