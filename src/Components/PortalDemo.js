import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    //Create portal has to parameters one is JSX another one is index.html id
    return ReactDOM.createPortal(
        <div>
            Portal Demo
        </div>,
        document.getElementById("portal-demo")
    )
}

export default PortalDemo
