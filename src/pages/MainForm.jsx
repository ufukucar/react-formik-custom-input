import React, { useEffect } from 'react'

import { useFormik, Formik, Form } from 'formik'
import FormValidation from '../validations/FormValidation'

import Input from '../components/Input'
import Button from '../components/Button'
import Select from '../components/Select'

const MainForm = () => {
  useEffect(() => {
    //console.log('formik props: ', Formik.props)
  }, [])

  const initialValues = {
    email: '',
    password: '',
    cinsiyet: '',
  }

  const handleSubmit = (values, actions) => {
    console.log(JSON.stringify(values, null, 2))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormValidation}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <div className="">
          <Form className="defaultForm">
            <Input label="Email" name="email" type="text" />
            <Input label="Şifre" name="password" type="text" />

            <Select label="Cinsiyet" name="sex" x />

            <Button type="submit" />
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default MainForm
