/**
 * Created by Z on 2017/3/14.
 */
import {createStore} from "redux";
import {NewsReducer} from "./news/reducers"
export  const  store=createStore(NewsReducer.reducer);

