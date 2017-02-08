/**
 * Created by Code1912 on 2017/2/6.
 */
import  React from "react"
import  ReactDOM from "react-dom"
import  TestComponent from "./testComponent"
//ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("app"));
//ReactDOM.render(<TestComponent/>, document.getElementById("app"));
import  Demo1 from "./deme1"
// chrome react developer tools  download page:https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
// react developer tools introduction: https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <TestComponent/>
        <Demo1 text="abc"/>
    </div>,
    document.getElementById("app"));