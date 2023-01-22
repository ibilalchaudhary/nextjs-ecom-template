import { ActionType } from '../action'

const InitialSettingsData = {
  settings: {},
}
export default (state = InitialSettingsData, { type, payload }) => {
  switch (type) {
    case ActionType.UPDATE_SETTINGS: {
      return {
        settings: payload[0],
      }
    }
    default:
      return state
  }
}
