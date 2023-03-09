import {regReducer,cartReducer } from "./checkLogin";
import { combineReducers } from "redux";



export let rootReducer = combineReducers({regReducer,cartReducer})
