import React from 'react'
import PropTypes from 'prop-types'

export default function Wrapper(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

Wrapper.propTypes = {
    /**
     * ClassName consists of Tailwind CSS styles
     */
    className: PropTypes.string
}
