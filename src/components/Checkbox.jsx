import { useField } from 'formik'
import ErrorMessage from './ErrorMessage'
import React from 'react'

import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

const Checkbox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <>
      <label className="formLabel inline-flex cursor-pointer  ">
        <span className="defaultSpan">{label}</span>
        <input
          type="checkbox"
          {...field}
          {...props}
          className=" ml-3 mt-1  hidden"
        />
        <MdOutlineCheckBoxOutlineBlank
          className={`${
            field.value
              ? 'hidden'
              : 'ml-3 mt-1 w-5 h-5 border-b-indigo-400 fill-current'
          }`}
          fill="current-fill"
        />
        <MdCheckBox
          className={`${
            field.value
              ? 'ml-3 mt-1 w-5 h-5 border-b-indigo-400 fill-blue-700'
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
