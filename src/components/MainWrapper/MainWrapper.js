import React from 'react'
import './mainwrapper.css'

const MainWrapper = ({children}) => {
    return (
        <div className="main-wrapper">
            {children}
        </div>
    )
}

export default MainWrapper
