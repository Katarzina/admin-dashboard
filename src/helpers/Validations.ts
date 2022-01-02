import * as yup from 'yup'

export const LoginSchema = () =>
  yup.object().shape({
    login: yup
      .string()
      .required('Value required'),
    password: yup
      .string()
      .required('Value required'),
  })