import axios, { AxiosRequestConfig } from 'axios'
import { axiosOtherRequestsTimeout } from '../helpers'

type MethodTypes = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
//@ts-ignore
interface FetchParams extends AxiosRequestConfig {
  method?: MethodTypes
  path: string
  params?: object
  headers?: object
  data?: any
  body?: object
}

const fetch = ({
  method = 'GET',
  path,
  params,
  headers,
  responseType,
  data,
  withCredentials,
}: FetchParams) => {
  return new Promise(async (resolve, reject) => {
    const url = `${path}`
    try {
      //@ts-ignore
      axios({
        headers,
        url,
        method,
        params,
        responseType,
        data,
        withCredentials,
      })
        .then(async (response) => {
          if (response.data?.success === false) {
            reject({ response })
          }
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    } catch (error) {
      reject(error)
    }
  })
}

export default fetch
