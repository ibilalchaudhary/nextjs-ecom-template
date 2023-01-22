import { ActionType } from '../action'

const InitialUserData = {
  loggedIn: false,
  token: null,
  verified: false,
  userDetailAvailable: false,
  userInfo: null,
  checkOutStarted: false,
  cart: null,
  paymentMethod: 'cod',
  userId: '',
  //---------------
  province: '',
  city: '',
  zipCode: '',
  phone: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: 'male',
  //----------------
  wishListLength: 0,
  currentAddressIndex: 0,
  orders_qty: 0,
  address: [],
  wishlist: [],
  userOrders: [],
}

export default (state = InitialUserData, { type, payload }) => {
  switch (type) {
    case ActionType.SOCIAL_AUTH: {
      // console.log('PAYLOAD:', payload)
      return {
        ...state,
        loggedIn: true,
        userInfo: payload.user,
        token: payload.token,
        ...payload.user,
      }
    }
    case ActionType.ADD_USER_With_SIGNIN: {
      // console.log('PAYLOAD:', payload)
      return {
        ...state,
        loggedIn: true,
        userInfo: payload.user,
        ...payload.user,
      }
    }
    case ActionType.UPDATE_USER_INFO: {
      // console.log('PAYLOAD:', payload)
      return {
        ...state,
        userInfo: payload,
        province: payload.province ? payload.province : '',
        city: payload.city ? payload.city : '',
        zipCode: payload.zipCode ? payload.zipCode : '',
        phone: payload.phone ? payload.phone : '',
        email: payload.email ? payload.email : '',
        firstName: payload.firstName ? payload.firstName : '',
        lastName: payload.lastName ? payload.lastName : '',
        gender: payload.gender ? payload.gender : 'male',
      }
    }
    case ActionType.LOG_OUT: {
      return InitialUserData
    }
    case ActionType.ADDorREMOVEfromWISHLIST: {
      // console.log('wishlist update')
      return {
        ...state,
        wishlist: payload,
        wishListLength: payload.length,
      }
    }
    case ActionType.ADDorREMOVEfromCart:
    case ActionType.EMPTY_CART:
    case ActionType.GET_CART: {
      return { ...state, cart: payload }
    }
    case ActionType.ADD_USER_With_SIGNUP: {
      // console.log('USER updated Through SignUp')
      return {
        ...state,
        loggedIn: true,
        token: payload.token,
        userInfo: payload.userInfo,
        gender: payload.user.gender,
        email: payload.user.email,
        lastName: payload.user.lastName,
        firstName: payload.user.firstName,
      }
    }
    // case ActionType.ADD_USER_With_SIGNIN: {
    //   console.log("USER updated Through SignIn");
    //   const {
    //     verified,
    //     _id,
    //     gender,
    //     email,
    //     lastName,
    //     firstName,
    //     phone
    //   } = payload.user;
    //   return {
    //     ...state,
    //     verified,
    //     loggedIn: true,
    //     userId: _id,
    //     userInfo: payload.userInfo,
    //     token: payload.token,
    //     gender,
    //     email,
    //     phone,
    //     lastName,
    //     firstName
    //   };
    // }
    case ActionType.GET_WISHLIST: {
      console.log('Wislist Is Here')
      return {
        ...state,
        wishlist: payload,
        wishListLength: payload.length,
      }
    }
    case ActionType.GET_ADDRESS: {
      console.log('Address Is Here')
      return {
        ...state,
        userDetailAvailable: payload.length !== 0,
        address: payload,
      }
    }
    case ActionType.CHOOSE_ADDRESS: {
      console.log(payload)
      return {
        ...state,
        currentAddressIndex: payload,
      }
    }
    case ActionType.VERIFY_PHONE: {
      return {
        ...state,
        verified: payload,
      }
    }
    case ActionType.POST_ADDRESS: {
      console.log('New Address Is Here', payload)
      const AddressArr = state.address
      AddressArr.splice(0, 0, payload)
      return {
        ...state,
        userDetailAvailable: true,
        address: AddressArr,
        currentAddressIndex: 0,
      }
    }
    case ActionType.GET_ORDER: {
      // console.log('Order getted')
      return {
        ...state,
        orders_qty: payload.length,
        userOrders: payload,
      }
    }
    case ActionType.POST_ORDER: {
      // console.log('Order Pushed')
      const OrderArr = state.userOrders
      OrderArr.splice(0, 0, payload)
      return {
        ...state,
        orders_qty: OrderArr.length,
        userOrders: OrderArr,
      }
    }
    case ActionType.GET_CART: {
      // console.log('Cart Update ')
      return {
        ...state,
        orders_qty: OrderArr.length,
        userOrders: OrderArr,
      }
    }
    case ActionType.CHANGE_PAY_METHOD: {
      return {
        ...state,
        paymentMethod: payload,
      }
    }

    default:
      return state
  }
}
