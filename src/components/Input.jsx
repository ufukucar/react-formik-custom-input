import React from 'react'
import { Formik } from 'formik'

const Input = ({ labelName, name, type, ...rest }) => {
  return (
    <>
      <label className="block w-6/12 mb-6">
        <span className="defaultSpan">{labelName}</span>
        <input type={type} name={name} {...rest} className="defaultInput " />
      </label>
    </>
  )
}

export default Input
