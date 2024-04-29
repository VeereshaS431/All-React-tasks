import { legacy_createStore } from "redux";
import todoReducer from "../reducers/reducers";


export const store=legacy_createStore(todoReducer)
