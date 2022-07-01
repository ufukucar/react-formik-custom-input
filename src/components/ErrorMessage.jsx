import React from 'react'

const ErrorMessage = ({ error }) => {
  return (
    <p className="text-red-500 text-xs font-serif mt-2 mb-1 text-left ">
      {error}
    </p>
  )
}

export default ErrorMessage
