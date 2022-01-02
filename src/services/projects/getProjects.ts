import fetch from '../fetch'

export default () => {
  return fetch({
    method: 'GET',
    path: '/projects',
  })
}
