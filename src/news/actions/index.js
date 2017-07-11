/**
 * Created by Z on 2017/3/14.
 */
import  * as types from "../constants/ActionTypes";
import {Service} from "../api/news"


export   class NewsActions{
    static getAllNews(){
         return dispatch=>Service.getNews().then(data=>{
             dispatch({type:type.QUERY,newsList:data})
         })
     }
     static reomveNews(id){
        return (dispatch,getState)=>{
            Service.removeNews(id).then(Service.getNews).then(data=>{
                dispatch({type:type.QUERY,newsList:data})
            })
        }
     }
}