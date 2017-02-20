/**
 * Created by Code1912 on 2017/2/9.
 */
import  React from "react"
import{ Router, Route, hashHistory,browserHistory,Link } from "react-router"
class RouteDemo extends  React.Component{
    constructor(props) {
        super(props);
        this.paths = [
            {
                path: "/route/route1",
                text: "None params route"
            },
            {
                path: "/route/route2/11111",
                text: "Params route"
            }
        ];

    }
    render(){
        //<!--  Each child in an array or iterator should have a unique "key" prop. Check the render method of `一->
        return   <div>
            <h1>Route Demo</h1>
            <ul>
                {
                    this.paths.map((item,index)=>{
                        return  <li key={`link${index}`}> <Link  to={item.path}  >{item.text}</Link></li>
                    })
                }
            </ul>
            <div style={{paddingLeft:`40px`}}> {this.props.children}</div>

        </div>
    }
}

class Route1 extends  React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        //<!-- <input value="" defaultValue='a'/>  同时写value 和default value 要报错   单独写value='ada' 也要报错 ，默认赋值得写defaultValue='abc'-->
        return    <div>
             No Params

        </div>
    }
}
class Route2 extends  React.Component{
    constructor(props) {
        super(props);
        this.id=props.params.id;
        console.dir(props)
    }
    render(){
        //<!-- <input value="" defaultValue='a'/>  同时写value 和default value 要报错   单独写value='ada' 也要报错 ，默认赋值得写defaultValue='abc'-->
        return    <div>
            Params  id:{this.id}

        </div>
    }
}

export   {
    RouteDemo,
    Route1,
    Route2
}