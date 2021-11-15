import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Shyjan"
        }
        console.log("LifeCycleA Constructor")
    }
    static getDerivedStateFromProps(props, state){
        //return new state or null
        console.log("getDerivedFromProps LifeCycleA")
        return null 
    }
    //componentDidMount is only declare before the render method and after the constructor
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
    render() {
        console.log("LifeCycleA Render")
        return (
            <div>
                <div>
                    LifeCycleA 
                </div>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
