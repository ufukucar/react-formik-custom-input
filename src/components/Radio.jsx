import { useField } from 'formik'
import ErrorMessage from './ErrorMessage'
import React, { useEffect } from 'react'

import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from 'react-icons/md'

const Radio = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <>
      <label className="formLabel inline-block  cursor-pointer  ">
        <span className="defaultSpan  float-left ">{label}</span>
        {options.map((option) => {
          return (
            <label key={option.id} className="mr-3">
              <span className="mr-1 mt-0"> {option.value} </span>
              <input
                type="radio"
                {...field}
                {...props}
                className=" hidden "
                value={option.id}
              />
              <MdOutlineRadioButtonUnchecked
                className={`${
                  field.value === option.id
                    ? 'hidden'
                    : ' -mt-1 w-5 h-5 border-b-indigo-400 fill-current  inline'
                } `}
              />

              <MdOutlineRadioButtonChecked
                className={`${
                  field.value === option.id
                    ? '-mt-1 w-5 h-5 border-b-indigo-400 fill-blue-700 inline'
                    : 'hidden'
                }  `}
              />
            </label>
          )
        })}

        {meta.touched && meta.error ? (
          <ErrorMessage error={meta.error} />
        ) : null}
      </label>
    </>
  )
}

export default React.memo(Radio)
