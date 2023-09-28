import React from 'react'
import Proptypes from 'prop-types'

export default function Message(props) {

  return (
    <p className={`w-full bg-blue-400 text-right text-xs ${props.className}`}>
      {props.children}
    </p>
  )
}

Message.propTypes = {
  /**
   * ClassName consists of Tailwind CSS styles
   */
  className: Proptypes.string
}
