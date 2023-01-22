import { isMobile } from 'react-device-detect'
import { ActionType } from '../action'
import Config from '@config/index'
const InitialAppState = {
  AuthLoading: false,
  FetchingAndGettingLoading: false,
  ListLoader: false,
  displayType: isMobile ? 'mobile' : 'desktop',
  brand: Config.common.BrandLandingPage ? '' : 'nonBranded',
}

export default (state = InitialAppState, { type, payload }) => {
  switch (type) {
    case ActionType.CHANGE_DISPLAY: {
      return {
        ...state,
        displayType: payload,
      }
    }
    case ActionType.AUTH_LOADING: {
      return {
        ...state,
        AuthLoading: payload,
      }
    }
    case ActionType.GET_POST_LOADING: {
      return {
        ...state,
        FetchingAndGettingLoading: payload,
      }
    }
    case ActionType.GET_LIST_LOADING: {
      return {
        ...state,
        ListLoader: payload,
      }
    }
    case ActionType.CHOOSE_BRAND: {
      return {
        ...state,
        brand: payload,
      }
    }

    default:
      return state
  }
}
