/**
 * Created by Z on 2017/3/14.
 */
import  * as types from "../constants/actionTypes";
import {Service} from "../api/news"


export   class NewsActions{
    static getAllNews(list){
       return{
           type:types.QUERY,
           data:{list}
       }
     }
     static getDetail(detail){
      return{
          type:types.DELETE,
          data:{detail}
      }
     }
}