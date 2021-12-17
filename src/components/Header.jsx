import React from "react"

function Header({text}){
    return(
        <div className="header-title">{text}</div>
    )
}

Header.defaultProps={
    text:'Feedback '
}

export default Header