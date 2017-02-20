/**
 * Created by Code1912 on 2017/2/20.
 */
import  React from "react"
class LifeCycleDemo extends  React.Component{
    constructor(props) {
        super(props);
        this.index=0;
        this.state={
            constructor: this.index++
        }  ;
        this.log("constructor");
    }

    static get defaultProps(){
        console.log(`get defaultProps:${new Date().getMilliseconds()}`);
        return {
            name:"Default Props"
        }
    };

    // component   pre-load
    componentWillMount() {
        this.setState({
            "componentWillMount":this.index++
        });
        this.log("componentWillMount");
    }
    // component  loaded
    componentDidMount() {
        this.setState({
            "componentDidMount":this.index++
        });
        this.log("componentDidMount");
    }
    // component  unloaded
    componentWillUnmount() {
        this.setState({
            "componentWillUnmount":this.index++
        });
        this.log("componentWillUnmount");
    }

    componentWillReceiveProps(){
        this.setState({
            "componentWillReceiveProps":this.getDate()
        });
        this.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        this.setState({
            "shouldComponentUpdate":this.getDate()
        });
        this.log("shouldComponentUpdate");
        //if return false, dom will not update
        return true;
    }

    componentWillUpdate(){
        //this step can't allow call setState
        this.log("componentWillUpdate");
    }
    componentDidUpdate(){
        //this step can't allow call setState
        this.log("componentDidUpdate");
    }
    getDate(){
        return new Date().getMilliseconds();
    }

    log(name){
        console.log(`${name}:${this.getDate()}`);
    }

    doUpdate(){
        this.setState({"test":1111},function (pre,props) {
            console.log("setState callback");

        })
    }
    render(){
        //this step can't allow call setState
        console.log("Render:"+this.getDate());
        return <div>
             <h3>Life Cycle</h3>
            <div>getDefaultProps:{this.props.name}</div>
            <h4>Mounting</h4>
             <div>constructor:{this.state.constructor}</div>
                <div>componentWillMount:{this.state.componentWillMount}</div>
             <div>componentDidMount:{this.state.componentDidMount}</div>
            <div>render()</div>
             <div>componentWillUnmount:{this.state.componentWillUnmount}</div>


            <h4>Updating</h4>
            <button className="btn btn-success btn-sm" onClick={this.doUpdate.bind(this)}>Click To Do Update</button>
            <div>Label:{this.state.test}</div>
            <div>componentWillReceiveProps:{this.state.componentWillReceiveProps}</div>
            <div>shouldComponentUpdate:{this.state.shouldComponentUpdate}</div>
            <div>componentWillUpdate:{this.state.componentWillUpdate}</div>
            <div> render()</div>
            <div>componentDidUpdate:{this.state.componentDidUpdate}</div>
        </div>
    }
}


export {  LifeCycleDemo};