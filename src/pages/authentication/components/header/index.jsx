import React from 'react'
import Proptypes from 'prop-types'

export default function Header(props) {

    return (
        <h1 className={`text-2xl font-bold absolute top-0 text-center ${props.className}`}>
            {props.children}
        </h1>
    )
}

Header.propTypes = {
    /**
     * ClassName consists of Tailwind CSS styles
     */
    className: Proptypes.string
}