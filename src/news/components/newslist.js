/**
 * Created by Z on 2017/3/14.
 */
import  React, { Component } from "react";
import {Service} from "../api/news";
import {NewsActions} from "../actions/index"
import {connect} from "react-redux";
class NewsList extends  Component{
    constructor(props) {
        super(props);
        this.getNews();
    }
   getNews(){
       Service.getNews().then(res=>{
           this.props.dispatch(NewsActions.getAllNews(res));
       })
   }
    render(){
        return <div>
            <h2>Redux Demo</h2>
            <ul >
                {(this.props.list||[]).map((item,index)=>
                    <li onClick={()=>{}} key={item.id}>{item.title}</li>
                )}
            </ul>
            <br/>
        </div>
    }
}
function mapStateToProps(state){
    return {
        list: state.list
    }
}
let NewsComponent=connect(mapStateToProps)(NewsList);
export {NewsComponent};
 //connect(mapStateToProps)(NewsList);
