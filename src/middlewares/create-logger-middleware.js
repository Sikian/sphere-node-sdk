// import createLogger from 'redux-logger'
/* @flow */
import type {
  Middleware,
} from 'redux'

export default function createLoggerMiddleware (/* options */): Middleware {
  return (/* middlewareAPI */) => next => action => {
    if (
      action.type !== 'SERVICE_INIT'
    )
      console.log(action)
    return next(action)
  }
}