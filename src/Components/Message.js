import React from "react";

class Message extends React.Component{
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>I am message {this.state.message}</h1>
            </React.Fragment>
        )
    }
}

export default Message