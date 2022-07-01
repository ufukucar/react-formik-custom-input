import { useField } from 'formik'
import React, { useEffect } from 'react'
import ErrorMessage from './ErrorMessage'

const Select = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props)

  // Sayfa yüklendiğinde default değeri '' yapıyoruz
  useEffect(() => {
    helpers.setValue(options[0].value)
  }, [])

  return (
    <>
      <label className="formLabel">
        <span className="defaultSpan">{label}</span>
        <select
          {...field}
          name={props.name}
          className="defaultSelect"
          defaultValue={field.value}
        >
          <option value="">-- Seçim Yapınız --</option>

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

export default React.memo(Select)
