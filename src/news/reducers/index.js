/**
 * Created by Z on 2017/3/14.
 */
import { combineReducers } from 'redux'
import {ADD,DELETE,QUERY,EDIT} from '../constants/ActionTypes';
import {NewsActions} from '../actions'
export  class  NewsReducer{
    static reducer(state=[],action){
        if(this&&this[action.type]){
            return this[action.type](state);
        }
        return state;
    }


    static getNewsList(state){
        return
    }
}