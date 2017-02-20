/**
 * Created by Code1912 on 2017/2/6.
 */
import  React from "react"
import  ReactDOM from "react-dom"
import  App from "./app"
import { Router, Route, hashHistory,browserHistory,Link } from 'react-router';
import  {RouteDemo,Route1,Route2} from "./route/routeDemo"
import  {PropsDemo} from "./props/parent"
import  {LifeCycleDemo} from "./lifecycle/lifecycle"
//ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("app"));
//ReactDOM.render(<HelloWorld/>, document.getElementById("app"));
import  StateDemo from "./state/state"
import  HelloWorld from "./helloworld"
// chrome react developer tools  download page:https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
// react developer tools introduction: https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
ReactDOM.render(
    <div>
        <HelloWorld/>
        <hr/>

        <Router  history={browserHistory}>
            <Route path="/" component={App}>
                <Route path={'life'} component={LifeCycleDemo}/>
                <Route path={'state'} component={StateDemo}/>
                <Route path={'props'} component={PropsDemo}/>
                <Route path={'route'} component={RouteDemo}>
                    <Route   path={'route1'} component={Route1}  > </Route>
                    <Route   path={'route2/:id'} component={Route2}  > </Route>
                </Route>
            </Route>
        </Router>
    </div>,
    document.getElementById("app"));
