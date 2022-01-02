import { Machine, assign } from 'xstate'

export default Machine(
  {
    id: 'fetch',
    initial: 'idle',
    context: {
      promiseFn: null,
      data: null,
      error: undefined,
      params: {},
    },
    states: {
      idle: {
        on: {
          FETCH: 'fetching',
        },
      },
      fetching: {
        onEntry: ['setParams', 'clearError'],
        invoke: {
          src: 'fetch',
          onDone: {
            target: 'success',
            actions: 'setData',
          },
          onError: {
            target: 'failure',
            actions: 'setError',
          },
        },
      },
      success: {
        on: {
          FETCH: 'fetching',
        },
      },
      failure: {
        on: {
          FETCH: 'fetching',
        },
      },
    },
  },
  {
    actions: {
      setData: assign({ data: (_, event) => event.data }),
      setError: assign({ error: (_, event) => event.data }),
      setParams: assign({ params: (_, event) => event.params }),
      clearError: assign({ error: () => null }),
    },
    services: {
      fetch: (ctx) => ctx.promiseFn(ctx.params),
    },
  }
)
