import { useField } from 'formik'
import ErrorMessage from './ErrorMessage'

const Select = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)

  console.log('asdf')

  return (
    <>
      <label className="formLabel">
        <span className="defaultSpan">{label}</span>
        <select {...field} name={props.name} className="defaultSelect ">
          <option value="">-- Seçim Yapınız --</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        {meta.error ? <ErrorMessage error={meta.error} /> : null}
      </label>
    </>
  )
}

export default Select
