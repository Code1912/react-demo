/**
 * Created by Code1912 on 2017/2/9.
 */
import  React from "react"
import {  Link } from 'react-router';
class Menu extends  React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <ul>
            <li>  <Link to='/demo1' activeStyle={{color:'red'}} >Base Demo</Link></li>
            <li>  <Link to='/routedemo' activeStyle={{color:'red'}} >Route Demo</Link></li>
        </ul>
    }
}
export default  Menu;