import React from 'react'
import { Formik } from 'formik'

const Button = ({ labelName, name, type, ...rest }) => {
  return (
    <>
      <button type={type} className="defaultBtn mb-3 w-6/12">
        Kaydet
      </button>
    </>
  )
}

export default Button
