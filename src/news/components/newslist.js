/**
 * Created by Z on 2017/3/14.
 */
import  React from "react";

class NewsList extends  React.Component{
    constructor(props) {
        super(props);
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
export  {   NewsList}