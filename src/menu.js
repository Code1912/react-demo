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
            <li>  <Link to='/state' activeStyle={{color:'red'}} >State Demo</Link></li>
            <li>  <Link to='/route' activeStyle={{color:'red'}} >Route Demo</Link></li>
            <li>  <Link to='/props' activeStyle={{color:'red'}} >Props Demo</Link></li>
            <li>  <Link to='/life' activeStyle={{color:'red'}} >LifeCycle Demo</Link></li>
            <li>  <Link to='/list' activeStyle={{color:'red'}} >List Demo</Link></li>
        </ul>
    }
}
export default  Menu;