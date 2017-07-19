/**
 * Created by Code1912 on 2017/2/6.
 */
import  React from "react"
import  ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import {store} from "./store"
import  App from "./app"
import { Router, Route, hashHistory,browserHistory,Link } from 'react-router';
import  {RouteDemo,Route1,Route2} from "./route/routeDemo"
import  {PropsDemo} from "./props/parent"
import  {LifeCycleDemo} from "./lifecycle/lifecycle"
import {NewsComponent} from "./news/components/newslist"
//ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("app"));
//ReactDOM.render(<HelloWorld/>, document.getElementById("app"));
import  StateDemo from "./state/state"
import  HelloWorld from "./helloworld"
import  List from "./list/list"
// chrome react developer tools  download page:https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
// react developer tools introduction: https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
ReactDOM.render( <Provider store={store}>


        <Router  history={browserHistory}>
            <Route path="/" component={App}>
                <Route path={'life'} component={LifeCycleDemo}/>
                <Route path={'state'} component={StateDemo}/>
                <Route path={'props'} component={PropsDemo}/>
                <Route path={'route'} component={RouteDemo}>
                    <Route   path={'route1'} component={Route1}  > </Route>
                    <Route   path={'route2/:id'} component={Route2}  > </Route>
                </Route>
                <Route path={'redux'} component={NewsComponent}/>
                <Route path={'list'} component={List}/>
            </Route>
        </Router>
    </Provider> ,
    document.getElementById("app"));
//     <HelloWorld/>
//<hr/>
