import React from 'react'

export default function Button(props) {

  return (
    <button type="submit" className="w-full h-10 absolute bottom-0 bg-blue-400 rounded-lg font-bold text-white">
      {props.children}
    </button>
  )
}
