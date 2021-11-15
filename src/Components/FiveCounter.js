import React, { Component } from 'react'

class FiveCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
        console.log("Now State Is : ",this.state.count)
    }
    countIncrement() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log("Call back value", this.state.count)})
        // console.log("Increment",this.state.count)
            this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log("Increment",this.state.count)
    }
    fiveCountIncrement = () =>{
        this.countIncrement()
        this.countIncrement()
        this.countIncrement()
        this.countIncrement()
        this.countIncrement()
    }
    render() {
        console.log("Whwn render using(setState) State Is : ",this.state.count)
        return (
            <>
                <div>
                    count - {this.state.count}
                </div>
                <button onClick= {this.fiveCountIncrement}>Increment</button>
            </>
        )
    }
}

export default FiveCounter
