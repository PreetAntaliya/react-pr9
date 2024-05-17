import { combineReducers } from "redux";
import addNotesReducer from "./noteAddReducer";

const rootReducer = combineReducers({
    notes : addNotesReducer
})

export default rootReducer