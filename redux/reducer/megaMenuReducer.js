import {ActionType} from '../action';

const InitialMegaMenuData = {
  WholeMegaMenu: [],
};
export default (state = InitialMegaMenuData, {type, payload}) => {

  switch (type) {
    case ActionType.LOAD_MEGAMENU: {
      return {
        ...state,
        WholeMegaMenu: payload.WholeMegaMenu,
      };
    }
    case ActionType.GET_PAYMETHODS: {
      return {
        ...state,
        PayMethods: payload,
      };
    }
    case ActionType.GET_PROMOTION: {
      return {
        ...state,
        promotionData: payload,
      };
    }
    default:
      return state;
  }
};
