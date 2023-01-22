import { combineReducers } from 'redux'
import AppStateReducer from './appStateReducer'
import MegaMenuReducer from './megaMenuReducer'
import UserReducer from './userReducer'
import SettingsReducer from './SettingsReducer'
import TempAppStateReducer from './tempAppStates'

export default combineReducers({
  TEMPAPPSTATE: TempAppStateReducer,
  APPSTATE: AppStateReducer,
  MEGAMENU: MegaMenuReducer,
  USER: UserReducer,
  SETTINGS: SettingsReducer,
})
