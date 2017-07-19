/**
 * Created by Z on 2017/3/14.
 */
import {createStore,combineReducers} from "redux";
import {NewsReducer} from "./news/reducers"
import  React from "react";
export  const  store=createStore(NewsReducer.reducer);
//export  const  store=createStore(combineReducers({"reducer1":NewsReducer.reducer}));

