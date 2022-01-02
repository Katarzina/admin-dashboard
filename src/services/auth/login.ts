import fetch from '../fetch'

export type LoginParams = {
  login: string
  password: string
}

export default ({
  login,
  password,
}: LoginParams) => {
  const data = {
    login: login,
    password: password
  }
  return fetch({
    method: 'POST',
    path: 'login',
    data: data,
  })
}
