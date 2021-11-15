import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class UpdatingLifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Shyjan"
        }
        console.log("Face Constructor")
    }
    static getDerivedStateFromProps(props, state){
        //return new state or null
        console.log("getDerivedFromProps LifeCycleA")
        return null 
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate ......................")
        //return true or false values.....
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate..................")
        return null
    }

    componentDidUpdate(){
        console.log("componetDidUpdate......................")
    }
    handleStateChange = () =>{
        this.setState({
            name: "Harsha"
        })
    }
    render() {
        console.log("Face Render")
        return (
            <div>
                <div>
                    UpdatingLifeCycle
                </div>
                <button onClick={this.handleStateChange}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default UpdatingLifeCycle
