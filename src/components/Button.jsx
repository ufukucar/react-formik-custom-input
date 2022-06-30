import React from 'react'
import { Formik } from 'formik'

const Button = ({ labelName, name, type, ...rest }) => {
  return (
    <>
      <button className="defaultBtn mb-3">Kaydet</button>
    </>
  )
}

export default Button
