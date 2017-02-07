/**
 * Created by Code1912 on 2017/2/6.
 */
import  React from "react"
import  ReactDOM from "react-dom"
import  TestComponent from "./testComponent"
//ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("app"));
//ReactDOM.render(<TestComponent/>, document.getElementById("app"));

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <TestComponent/>
    </div>,
    document.getElementById("app"));