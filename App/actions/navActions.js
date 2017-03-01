import { POP_ROUTE, PUSH_ROUTE, RESET_ROUTE } from '../config/actionTypes'

export function push(route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop() {
  return {
    type: POP_ROUTE
  }
}
export function reset() {
  return {
    type: RESET_ROUTE
  }
}
