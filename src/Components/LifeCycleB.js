import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Shyjan"
        }
        console.log("LifeCycleB Constructor")
    }
    static getDerivedStateFromProps(props, state){
        //return new state or null
        console.log("getDerivedFromProps LifeCycleB")
        return null 
    }
    //componentDidMount is only declare before the render method and after the constructor
    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate ......................B")
        //return true or false values.....
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate..................B")
        return null

    }

    componentDidUpdate(){
        console.log("componetDidUpdate......................B")
    }
    render() {
        console.log("LifeCycleB Render")
        return (
            <div>
                LifeCycleB 
            </div>
        )
    }
}

export default LifeCycleB
