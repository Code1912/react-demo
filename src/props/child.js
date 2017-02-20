/**
 * Created by Code1912 on 2017/2/20.
 */
import  React from "react"
class Child extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:props.name
        }
    }

    render(){
        return <div>
            <h3>This is child</h3>
             Child Name Is :{this.props.name}<br/>
             Child Name Is :{this.state.name}<br/>
        </div>
    }
}
export {  Child};