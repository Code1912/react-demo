/**
 * Created by Code1912 on 2017/2/28.
 */
import  React from "react";

class List extends  React.Component{
    constructor(props) {
        super(props);
        this.list = [
            "Name 1",
            "Name 2",
            "Name 3",
            "Name 4",
            "Name 5",
        ];
        this.state={
            list2:[
                {id:1,text:"test1"},
                {id:2,text:"test2"},
                {id:3,text:"test3"},
                {id:4,text:"test4"}
            ]
        }
    }
    list1Click(proxy,event){
        console.log(arguments)
    }
    list2Click(item,index){
        console.log(item);
        console.log(arguments);

       /*this.setState(React.addons.update(this.state,{list2:{
           [index]:{
               text:{$set:"test "+ (Math.floor(Math.random()*100))}
           }
        }}));

        return;*/
        item.text="test "+ (Math.floor(Math.random()*100));
        this.setState({
            list2:this.state.list2
        })
    }
    render(){
        return <div>
            <h2>List Demo</h2>
            <ul >
                {this.list.map((item,index)=>
                     <li onClick={this.list1Click.bind(this)} key={index}>{item}</li>
                )}
            </ul>
            <br/>
            <ul  >
                {this.state.list2.map((item,index)=>
                     <li   key={index}>
                        {item.text} &nbsp;
                        <button className="btn btn-success btn-sm" onClick={this.list2Click.bind(this,item,index)}>Click</button>
                    </li>
                )}
            </ul>
        </div>
    }
}
export  default  List