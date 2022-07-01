import * as yup from 'yup'

const FormValidation = yup.object().shape({
  email: yup.string().required('Email alanı zorunludur.'),
  // .email('Geçerli bir email adresi giriniz.'),
  password: yup
    .string()
    .required('Şifre alanı zorunludur.')
    .min(6, 'Şifreniz en az 6 karakterden oluşmalıdır.'),
  sex: yup
    .string()
    .trim()
    .test(
      '1-2',
      'Cinsiyetiniz belirtiniz',
      (value) => value === '1' || value === '2',
    ),
})

export default FormValidation
