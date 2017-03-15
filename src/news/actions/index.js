/**
 * Created by Z on 2017/3/14.
 */
import  * as types from "../constants/ActionTypes";
import getNews, from "../api/news"

export  const getAllNews=()=>dispatch=>{
    getNews().then(news=>{
        dispatch(news);
    })
};