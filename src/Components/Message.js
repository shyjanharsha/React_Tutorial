import React from "react";

class Message extends React.Component{
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
        //always bind method declare inside the constructor when we use the named fuction
    this.changeState = this.changeState.bind(this);
    }
    
    changeState() {
        this.setState({
            message: "Thanks For Subscribing"
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1>I am message {this.state.message}</h1>
                <button onClick= {this.changeState}>subscribe</button>
                {/* <button onClick= {() => {this.changeState()}}>subscribe</button> if we trying this arrow method in onClick event we no need to bind the function likewise(this.changeState = this.changeState.bind(this);) */}
            </React.Fragment>
        )
    }
}

export default Message