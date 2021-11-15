import React, { Component } from 'react'
import Memocomp from './Memocomp'
import PureComp from './PureComponent'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "shyjan"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "shyjan"
            })
        }, 2000)
    }
    render() {
        console.log("**********************Parent Comp ***************************************")
        return (
            <div>
                Parent Component
                {/* <RegComp name= {this.state.name}/>
                <PureComp name= {this.state.name}/> */}
                <Memocomp name= {this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
