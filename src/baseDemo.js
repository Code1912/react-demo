/**
 * Created by Code1912 on 2017/2/8.
 */
import  React from "react"

class Demo1 extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {text: props.text||'',title:"Base Demo"};
        this.index=0;
    }
    onChangeTextClick(){
        if(!this){
            return;
        }
         // you can callback or not callback
        //this.setState( {text:"text  changed"})
        this.setState( {text:"text  changed"},function () {
            console.log("callback now",this.index++)
        })
    }

    onTextChange(e){
        if(e.target.value!=this.state.text){
            this.setState( {text:e.target.value})
        }
    }
    render(){
        //<!-- <input value="" defaultValue='a'/>  同时写value 和default value 要报错   单独写value='ada' 也要报错 ，默认赋值得写defaultValue='abc'-->
        return  <div>
                         <h1>   {this.state.title}</h1>
                         Default Value:<input defaultValue="ss"  />  <br/>
                         Text Label:<span>{this.state.text}</span> <br/>
                         Text Input:<input type="text" value={this.state.text}
                                           onChange={this.onTextChange.bind(this)}/>
                                    <button className="btn btn-sm btn-success" onClick={this.onChangeTextClick.bind(this)}>Changed Text</button>

                </div>
    }
}

export default Demo1