/**
 * Created by Code1912 on 2017/2/28.
 */
import  React from "react"
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
        this.list2=[
            {id:1,text:"test1"},
            {id:2,text:"test2"},
            {id:3,text:"test3"},
            {id:4,text:"test4"}
        ]
    }
    click(e){
        console.log(e);
    }
    render(){
        return <div>
            <h2>List Demo</h2>
            <ul >
                {this.list.map(item=> {
                    return <li key={item}>{item}</li>
                })}
            </ul>
            <br/>
            <ul  onClick={this.click.bind(this)}>
                {this.list2.map(item=> {
                    return <li key={item.id}>{item.text}</li>
                })}
            </ul>
        </div>
    }
}
export  default  List