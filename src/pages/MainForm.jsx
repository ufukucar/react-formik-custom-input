import React, { useEffect } from 'react'

import { useFormik, Formik, Form } from 'formik'
import FormValidation from '../validations/FormValidation'

import Input from '../components/Input'
import Button from '../components/Button'
import Select from '../components/Select'
import Checkbox from '../components/Checkbox'

const MainForm = () => {
  useEffect(() => {
    //console.log('formik props: ', Formik.props)
  }, [])

  const initialValues = {
    email: '',
    password: '',
    gender: '',
    onay: '',
  }

  const handleSubmit = (values, actions) => {
    console.log(JSON.stringify(values, null, 2))
  }

  const cinsiyetOptions = [
    { id: '1', value: 'Erkek' },
    { id: '2', value: 'Kadın' },
  ]

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormValidation}
      onSubmit={handleSubmit}
      enableReinitialize={true}
      // validateOnMount={true}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(props) => (
        <div className="">
          <Form className="defaultForm">
            <Input label="Email" name="email" type="text" />
            <Input label="Şifre" name="password" type="text" />

            <Select label="Cinsiyet" name="gender" options={cinsiyetOptions} />

            <Checkbox label="Şartları Kabul Ediyorum" name="onay" />

            <Button type="submit" />
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default MainForm
