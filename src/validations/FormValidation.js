import * as yup from 'yup'

const FormValidation = yup.object().shape({
  email: yup.string().trim().required('Email alanı zorunludur.'),
  // .email('Geçerli bir email adresi giriniz.'),
  password: yup
    .string()
    .trim()
    .required('Şifre alanı zorunludur.')
    .min(6, 'Şifreniz en az 6 karakterden oluşmalıdır.'),
  gender: yup
    .mixed()
    .required('Lütfen cinsiyetinizi belirtiniz.')
    .test(
      'sex',
      'Cinsiyetiniz belirtiniz.',
      (value) => value === '1' || value === '2',
    ),
  onay: yup
    .mixed()
    .test('check', 'Lütfen şartları onaylayınız.', (value) => value === true),
  bulten: yup.string().required('Bülten almak istiyor musunuz?'),
})

export default FormValidation
