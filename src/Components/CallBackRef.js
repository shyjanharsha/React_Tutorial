import React, { Component } from 'react'

class CallBackRef extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
        
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        console.log(this)
    }
    
    handleClick = (event) =>{
        console.log(this)
    }
    render() {
        return (
            <div>
                <input type="text" ref= {this.inputRef}/>
                <input type="text" ref= {this.setCbRef}/>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

export default CallBackRef
