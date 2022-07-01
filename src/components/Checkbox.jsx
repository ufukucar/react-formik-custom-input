import { useField } from 'formik'
import ErrorMessage from './ErrorMessage'
import React, { useEffect } from 'react'

import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

const Checkbox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)

  useEffect(() => {
    helpers.setValue(false)
  }, [])

  return (
    <>
      <label className="formLabel  cursor-pointer  ">
        <span className="defaultSpan inline-block float-left mr-3">
          {label}
        </span>
        <input type="checkbox" {...field} {...props} className="hidden" />
        <MdOutlineCheckBoxOutlineBlank
          className={`${
            field.value
              ? 'hidden'
              : 'ml-  mt-1 w-5 h-5 border-b-indigo-400 fill-current '
          }`}
          fill="current-fill"
        />
        <MdCheckBox
          className={`${
            field.value
              ? 'ml-5 mt-1 w-5 h-5 border-b-indigo-400 fill-blue-700'
              : 'hidden'
          }`}
        />
        {meta.touched && meta.error ? (
          <ErrorMessage error={meta.error} />
        ) : null}
      </label>
    </>
  )
}

export default React.memo(Checkbox)
