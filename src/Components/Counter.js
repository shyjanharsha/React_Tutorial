import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
        console.log("Now State Is : ",this.state.count)
    }
    countIncrement() {
        // this.state.count = this.state.count + 1 //this case UI not changed.We not directly change the state.So we call setState method
        //setState has two parameters 1st one is {object of this.state}, 2nd one is arrow function
        this.setState({
            count: this.state.count + 1
        }, () => {console.log("Call back value", this.state.count)})
        console.log("Increment",this.state.count) //this is syncronus  console.log statement

    }
    render() {
        console.log("Whwn render using(setState) State Is : ",this.state.count)
        return (
            <>
                <div>
                    count - {this.state.count}
                </div>
                <button onClick= {() => {this.countIncrement()}}>Increment</button>
            </>
        )
    }
}

export default Counter
