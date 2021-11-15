import React from 'react'

class RenElementVariable extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLogedIn: false
        }
    }
    render(){
        let message
        if(this.state.isLogedIn){
            
              message = <div>Welcome Shyjan </div>
        }else {
            
                message = <div>Welcome Guest </div>
        }
        return(
            <div>
                {message}
            </div>
        )
    }
}

export default RenElementVariable