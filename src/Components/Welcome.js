// this class components has two import 
import React, {Component} from 'react'

class Welcome extends Component{
    render() {
        const {name, no} = this.props

        return (
            <h1>Welocome {name} you are the {no} of Class Components</h1>
        )
    }
}

export default Welcome