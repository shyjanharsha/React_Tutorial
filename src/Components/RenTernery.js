import React from 'react'

class RenTernery extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLogedIn: true
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.isLogedIn ? (
                        <div>Welcome Shyjan </div>
                    ) : (
                        <div>Welcome Guest </div>
                    )
                }
            </div>
        )
    }
}

export default RenTernery