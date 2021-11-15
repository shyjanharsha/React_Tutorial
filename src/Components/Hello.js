import React from 'react'

// function without jsx


const Hello = (props) =>{
    console.log(props, "Hello")
    const {my_age} = props
    //in the createElement has 3 parameters. The 1st one is as a String of html tag likewise("div","h1","p",etc........)
    //The 2nd one is as Attribute
    //The 3rd element is children for the html tag
    //in our example div tag to be render
    // return React.createElement("div", null , React.createElement("h1", null, "Hello Shyjan"))
    return (
        <>
            <h1> I am {my_age}</h1>
        </>
    )
}

export default Hello;