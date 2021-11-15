// ShortCircuitOperatorRender 

import React from 'react'

class ShortCircuitOperatorRender extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLogedIn: false
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.isLogedIn && (
                        <div>Welcome Shyjan </div>
                    ) 
                }
            </div>
        )
    }
}

export default ShortCircuitOperatorRender