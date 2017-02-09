/**
 * Created by Code1912 on 2017/2/9.
 */
import  React from "react"
import Menu from "./menuComponent"
class App extends  React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <Menu/>
            <hr/>
            {this.props.children}
            </div>
    }
}
export default  App;