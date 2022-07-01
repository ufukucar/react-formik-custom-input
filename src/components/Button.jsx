import React from 'react'
import { Formik } from 'formik'

const Button = ({ labelName, name, type, ...rest }) => {
  return (
    <>
      <button type={type} className="defaultBtn">
        Kaydet
      </button>
    </>
  )
}

export default Button
