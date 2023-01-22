import { ActionType } from '../action'
const InitialAppState = {
  authModal: false,
}

export default (state = InitialAppState, { type, payload }) => {
  switch (type) {
    case ActionType.AUTH_MODAL: {
      return {
        ...state,
        authModal: payload,
      }
    }
    default:
      return state
  }
}
