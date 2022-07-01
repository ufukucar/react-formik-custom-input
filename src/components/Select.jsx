import { useField } from 'formik'
import { useEffect } from 'react'
import ErrorMessage from './ErrorMessage'

const Select = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props)

  console.log('options', options)

  return (
    <>
      <label className="formLabel">
        <span className="defaultSpan">{label}</span>
        <select {...field} name={props.name} className="defaultSelect ">
          {options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            )
          })}
        </select>
        {meta.touched && meta.error ? (
          <ErrorMessage error={meta.error} />
        ) : null}
      </label>
    </>
  )
}

export default Select
