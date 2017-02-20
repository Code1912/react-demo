/**
 * Created by Code1912 on 2017/2/20.
 */
import  React from "react"
import{ Child} from "./child"
class PropsDemo extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            child1:"child1",
            child2:"child2"
        }
    }
    render(){
        return <div>
            <h1>Props Demo</h1>
            <Child name={this.state.child1} />
            <Child name={this.state.child2} />
        </div>
    }
}
export    {
    PropsDemo
};