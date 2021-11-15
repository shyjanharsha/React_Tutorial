import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        // this.clickBind = this.clickBind.bind(this) //It means this.clickBind is equal to this.clickBind.bind(this)
    }
    // clickBind(){
    //     this.setState({
    //         message: "We change the message using Bind Method"
    //     })
    //     console.log(this)
    // }

    clickBind = () =>{
        this.setState({
            message: "We change the message using Bind Method"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>{this.state.message} it is a Event Binding</h1>
                {/* <button onClick = {this.clickBind.bind(this)}>Click Bind</button> */}
                {/* <button onClick = {() => this.clickBind()}>Click Bind</button> */}
                <button onClick = {this.clickBind}>Click Bind</button>
            </div>
        )
    }
}

export default EventBind
