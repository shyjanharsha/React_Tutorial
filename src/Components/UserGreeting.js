import React from 'react'

class UserGreeting extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLogedIn: true
        }
    }
    render(){
        if(this.state.isLogedIn){
            return (
                <div>
                    Welcome Shyjan
                </div>
            )
        }else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
            
        }
        // return(
        //     <div>
        //         <div>
        //             Welcome Shyjan
        //         </div>
        //         <div>
        //             Welcome Guest
        //         </div>
        //     </div>
        // )
    }
}

export default UserGreeting