import * as React from 'react';
import { useMachine } from '@xstate/react'
import fetchMachine from '../statecharts/fetchMachine'
import { AxiosResponse } from 'axios'

interface UseAsyncInterface {
  promiseFn: Function
  onData?: (data: any, params: any) => void
  onError?: ({
    error,
    message,
    params,
  }: {
    error?: AxiosResponse
    message: string
    params: any
  }) => void
}

export default function <P>({
  promiseFn = () => {
    throw new Error('useAsync expects a promiseFn')
  },
  onData,
  onError,
}: UseAsyncInterface) {
  const [current, send] = useMachine(fetchMachine, {
    context: { promiseFn },
  } as any)
  //@ts-ignore
  const { data, error, params } = current.context
  React.useEffect(() => {
    if (current.matches('failure') && onError) {
      onError({
        error,
        message:
          // @ts-ignore
          error!.response?.data?.message ?? 'An error happened',
        params,
      })
    }
  }, [current.value])

  React.useEffect(() => {
    if (current.matches('success') && onData) {
      onData(data, params)
    }
  }, [current.value])

  const fetch = React.useCallback(
    (args?: P) => send({ type: 'FETCH', params: args } as any),
    []
  )
  return {
    pending: current.matches('fetching'),
    data,
    error,
    fetch,
  }
}
