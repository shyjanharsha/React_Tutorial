import React from 'react'
import './MyStyle.css'
function StyleSheet(props) {
    //Conditionall apply styles using props
    let className = props.primary ? "primary" : ""
    return (
        <div>
            <h1 className={`${className} font-xl`}>Style Sheets </h1>
        </div>
    )
}

export default StyleSheet
