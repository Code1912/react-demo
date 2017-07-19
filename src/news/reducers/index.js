/**
 * Created by Z on 2017/3/14.
 */
import { combineReducers } from 'redux'
import {ADD,DELETE,QUERY,EDIT} from '../constants/actionTypes';
import {NewsActions} from '../actions';
import {Service} from "../api/news"
export  class  NewsReducer{

    static reducer(state={list:[]},action){
        if(action&&action.type){
            return  Object.assign({},state,action.data);
        }
        return state;
    }

}