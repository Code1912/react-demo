/**
 * Created by Code1912 on 2017/2/6.
 */
import  React from "react"
import  ReactDOM from "react-dom"
import  TestComponent from "./testComponent"
import  App from "./appComponent"
import { Router, Route, hashHistory,browserHistory,Link } from 'react-router';
import  {RouteDemo,Route1,Route2} from "./routeDemo"

//ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("app"));
//ReactDOM.render(<TestComponent/>, document.getElementById("app"));
import  Demo1 from "./baseDemo"
// chrome react developer tools  download page:https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
// react developer tools introduction: https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <TestComponent/>
        <hr/>

        <Router  history={browserHistory}>
            <Route path="/" component={App}>
                <Route path={'demo1'} component={Demo1}/>
                <Route path={'routedemo'} component={RouteDemo}>
                    <Route   path={'route1'} component={Route1}  > </Route>
                    <Route   path={'route2/:id'} component={Route2}  > </Route>
                </Route>
            </Route>
        </Router>
    </div>,
    document.getElementById("app"));
