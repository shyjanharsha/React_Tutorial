// First step always import the react like next line
import React from 'react'
import Hello from './Hello'

// export function Greet(){
//     // Function coponents always return one html tag
//     return <h1>Hello Shyjan</h1>
// } // this function called as export named function

function Greet({name, age}){
    // console.log(props, "Greeet")
        // Function coponents always return one html tag
        return(
            <>
                <h1>Hello {name}</h1>
                <Hello my_age = {age} />
            </>
        )
    }

// Next we Learn how to declar the arrow function(ES6) in react

// const Greet = () => <h1>Hello Shyja</h1>

// const Greet = () => {
//     console.log("shyjan")
//     return (
//         <h1>Hello shyjan</h1>
//     )    
// }

// This arrow Function only one return 
// const Greet = (e) => ({
//         value: <h1>Hello Shyjan</h1>
// })


// if we have render this Greet function in Browser we should need to export the function

export default Greet; 