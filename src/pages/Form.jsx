import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'

import Input from '../components/Input'
import Button from '../components/Button'

const Form = () => {
  const initialValues = {
    name: '',
    password: '',
  }

  const handleSubmit = (values) => {
    console.log('values: ', values)
  }

  const validationSchema = Yup.object().shape({})

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <form className="defaultForm">
          <Input type="text" labelName="Name" name="name" />

          <Input type="password" labelName="Şifre" name="password" />

          <Button />
        </form>
      </Formik>
    </div>
  )
}

export default Form
