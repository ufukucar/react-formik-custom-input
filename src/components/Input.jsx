import { useField } from 'formik'
import ErrorMessage from './ErrorMessage'
import React from 'react'

const Input = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <>
      <label className="formLabel">
        <span className="defaultSpan">{label}</span>
        <input {...field} {...props} className="defaultInput " />

        {meta.touched && meta.error ? (
          <ErrorMessage error={meta.error} />
        ) : null}
      </label>
    </>
  )
}

export default React.memo(Input)
