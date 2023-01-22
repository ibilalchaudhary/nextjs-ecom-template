import { APIFuncs } from '../utilts/APIs'
import { checkIsItInWishlist, InfoLogger } from '../utilts/utilties'
import { nextLogout, nextLogin } from '../utilts/nextAuth'
import router from 'next/router'
import cookie from 'js-cookie'
//= ===============Action Types Constants
const LOADING = 'LOADING'
const CHANGE_PAY_METHOD = 'CHANGE_PAY_METHOD'
const LOADING_COMPLETE = 'LOADING_COMPLET'
const AUTH_LOADING = 'AUTH_LOADING'
const GET_POST_LOADING = 'GET_POST_LOADING'
const ADDorREMOVEfromWISHLIST = 'ADDorREMOVEfromWISHLIST'
const ADDorREMOVEfromCart = 'ADDorREMOVEfromCart'
const ADD_USER_With_SIGNUP = 'ADD_USER_With_SIGNUP'
const ADD_USER_With_SIGNIN = 'ADD_USER_With_SIGNIN'
const GET_WISHLIST = 'GET_WISHLIST'
const GET_ADDRESS = 'GET_ADDRESS'
const PUT_ADDRESS = 'PUT_ADDRESS'
const POST_ADDRESS = 'POST_ADDRESS'
const POST_ORDER = 'POST_ORDER'
const EMPTY_CART = 'EMPTY_CART'
const GET_ORDER = 'GET_ORDER'
const PUSH_ORDERS = 'PUSH_ORDERS'
const GET_CART = 'GET_CART'
const LOG_OUT = 'LOG_OUT'
const LOG_IN = 'LOG_IN'
const GET_LIST_LOADING = 'GET_LIST_LOADING'
const LOAD_MEGAMENU = 'LOAD_MEGAMENU'
const GET_PAYMETHODS = 'GET_PAYMETHODS'
const LOAD_EXPO_TOKEN = 'LOAD_EXPO_TOKEN'
const EXPO_FIRST_TIME_TOKEN_SENT = 'FIRST_TIME_TOKEN_SENT'
const EXPO_AUTHENTICATE_TIME_TOKEN_SENT = 'EXPO_AUTHENTICATE_TIME_TOKEN_SENT'
const CHOOSE_ADDRESS = 'CHOOSE_ADDRESS'
const GET_PROMOTION = 'GET_PROMOTION'
const VERIFY_PHONE = 'VERIFY_PHONE'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
const CHANGE_DISPLAY = 'CHANGE_DISPLAY'
const CHOOSE_BRAND = 'CHOOSE_BRAND'
const AUTH_MODAL = 'AUTH_MODAL'
const SOCIAL_AUTH = 'SOCIAL_AUTH'
const setBrand = payload => {
  cookie.set('brand', payload, {
    expires: 360 * 24 * 60 * 60 * 1000,
    path: '/',
  })
}

const removeBrand = () => {
  cookie.remove('brand')
}

const GetMegaMenuNew = () => async dispatch => {
  // dispatch({ type: GET_POST_LOADING, payload: true });
  APIFuncs.GetMegaCategoryMenu().then(WholeMegaMenu => {
    dispatch({ type: LOAD_MEGAMENU, payload: { WholeMegaMenu } })
    // dispatch({ type: GET_POST_LOADING, payload: false });
  })
}

const updateSettings = () => async dispatch => {
  let result = null
  await APIFuncs.UpdateSettings().then(payload => {
    payload.length !== 0 &&
      (dispatch({ type: UPDATE_SETTINGS, payload }), (result = payload[0]))
    //console.log('SettingUpdated', payload)
  })
  return result
}

const LogIn = () => async dispatch => {
  APIFuncs.signInByPhone({
    phone: '923035191910',
    password: 'pass123',
  }).then(Result => {
    if (Result) {
      const { token } = Result
      dispatch({
        type: ADD_USER_With_SIGNIN,
        payload: { loggedIn: true, token },
      })
      nextLogin({ token })
    }
  })

  // console.log('did it')
}

const LogOut = () => async dispatch => {
  nextLogout()
  dispatch({ type: LOG_OUT })
}

const setAuthModal = payload => async dispatch => {
  dispatch({ type: AUTH_MODAL, payload })
}

const loginWithPhone = OBJECT => async dispatch => {
  // dispatch({ type: AUTH_LOADING, payload: true });
  const { returnto } = OBJECT
  await APIFuncs.signInByPhone({ ...OBJECT }).then(RES => {
    if (typeof RES === 'object') {
      const { token, cart, user } = RES
      if (token !== undefined) {
        APIFuncs.getMyAddress(token).then(RESAddress => {
          if (Array.isArray(RESAddress)) {
            // console.log('Address GETTING ')
            dispatch({ type: GET_ADDRESS, payload: RESAddress })
          } else {
            // console.log('Address GETTING Bug')
          }
          dispatch({ type: ADD_USER_With_SIGNIN, payload: RES })
          nextLogin({ token, returnto })
        })
        APIFuncs.getMyOrders(token).then(RESOrder => {
          if (Array.isArray(RESOrder)) {
            // console.log('Address GETTING ')
            dispatch({ type: GET_ORDER, payload: RESOrder })
          } else {
            // console.log('Order GETTING Bug')
          }
        })
        APIFuncs.getMyWishList(token).then(RESWishlist => {
          if (typeof RESWishlist === 'object') {
            // console.log('Wishlist GETTING ')
            dispatch({ type: GET_WISHLIST, payload: RESWishlist })
            dispatch({ type: AUTH_LOADING, payload: false })
          } else {
            // console.log('Wishlist GETTING Bug')
          }
        })
        if (cart) {
          const { items } = cart
          dispatch({
            type: GET_CART,
            payload: items !== undefined ? cart : { items: [] },
          })
        }
      } else {
        alert('Username or password is not correct')
      }
    } else {
      alert('Alert', RES)
    }
  })
}

const loginWithPhoneWhileReset = PAYLOAD => async dispatch => {
  await APIFuncs.sendResetPhonePassword(PAYLOAD).then(RES => {
    if (RES) {
      const { status, data, message } = RES
      if (status === 'success') {
        // console.log("DATA2", data);
        const { token, cart, user } = data
        if (token !== undefined) {
          APIFuncs.getMyAddress(token).then(RESAddress => {
            if (Array.isArray(RESAddress)) {
              // console.log("Address GETTING ");
              dispatch({ type: GET_ADDRESS, payload: RESAddress })
            } else {
              // console.log("Address GETTING Bug");
            }
            dispatch({ type: ADD_USER_With_SIGNIN, payload: data })
            nextLogin({ token })
          })
          APIFuncs.getMyOrders(token).then(RESOrder => {
            if (Array.isArray(RESOrder)) {
              // console.log("Address GETTING ");
              dispatch({ type: GET_ORDER, payload: RESOrder })
            } else {
              // console.log('Order GETTING Bug')
            }
          })
          APIFuncs.getMyWishList(token).then(RESWishlist => {
            if (typeof RESWishlist === 'object') {
              // console.log("Wishlist GETTING ");
              dispatch({ type: GET_WISHLIST, payload: RESWishlist })
              dispatch({ type: AUTH_LOADING, payload: false })
            } else {
              // console.log('Wishlist GETTING Bug')
            }
          })
          if (cart) {
            const { items } = cart
            dispatch({
              type: GET_CART,
              payload: items !== undefined ? cart : { items: [] },
            })
          }
        }
      } else {
      }
    } else {
      alert('Alert', RES)
    }
  })
}

const signUpWithPhone = phone => async dispatch => {
  let Result = null
  await APIFuncs.signUpByPhone(phone).then(RES => {
    Result = RES
  })
  return Result
}

const signUpWithEmail = PAYLOAD => async dispatch => {
  let Result = null
  InfoLogger('signupPayLoad', PAYLOAD)
  await APIFuncs.postSignUp(PAYLOAD).then(RES => {
    if (typeof RES === 'object') {
      const { token, cart, user } = RES
      if (token !== undefined) {
        dispatch({ type: ADD_USER_With_SIGNIN, payload: RES })
        dispatch({ type: AUTH_MODAL, payload: false })
        nextLogin({ token })
      }
      if (cart) {
        const { items } = cart
        dispatch({
          type: GET_CART,
          payload: items !== undefined ? cart : { items: [] },
        })
      }
      Result = RES
    } else {
      alert(RES)
    }
  })
  return Result
}
const loginWithEmail = PAYLOAD => async dispatch => {
  const { returnto } = PAYLOAD
  let result = ''
  await APIFuncs.signInByEmail(PAYLOAD).then(async RES => {
    if (typeof RES === 'object' && RES !== null) {
      const { token, cart, user } = RES
      if (token) {
        await APIFuncs.getMyAddress(token).then(RESAddress => {
          if (Array.isArray(RESAddress)) {
            console.log('Address GETTING ')
            dispatch({ type: GET_ADDRESS, payload: RESAddress })
          } else {
            console.log('Address GETTING Bug')
          }
          dispatch({ type: ADD_USER_With_SIGNIN, payload: RES })
          nextLogin({ token, returnto })
        })
        await APIFuncs.getMyOrders(token).then(RESOrder => {
          if (Array.isArray(RESOrder)) {
            console.log('Address GETTING ')
            dispatch({ type: GET_ORDER, payload: RESOrder })
          } else {
            console.log('Order GETTING Bug')
          }
        })
        await APIFuncs.getMyWishList(token).then(RESWishlist => {
          if (typeof RESWishlist === 'object') {
            console.log('Wishlist GETTING ')
            dispatch({ type: GET_WISHLIST, payload: RESWishlist })
          } else {
            console.log('Wishlist GETTING Bug')
          }
        })

        console.log('CARTWhileLogin', cart)
        if (cart) {
          const { items } = cart
          dispatch({
            type: GET_CART,
            payload: items !== undefined && items !== '' ? cart : { items: [] },
          })
        }
        dispatch({ type: AUTH_MODAL, payload: false })
      } else {
        console.log('token Not Present')
      }
    } else {
      result = 'Email or password Incorrect'
      //alert('Email or password error', RES)
    }
  })
  return result
}
const SocialAuth = payload => async dispatch => {
  let result = null
  if (typeof payload === 'object' && payload !== null) {
    const { token, cart, user } = payload
    if (token) {
      result = payload
      dispatch({ type: SOCIAL_AUTH, payload })
      dispatch({ type: AUTH_MODAL, payload: false })
      console.log('CARTWhileLogin', cart)
      if (cart) {
        const { items } = cart
        dispatch({
          type: GET_CART,
          payload: items !== undefined && items !== '' ? cart : { items: [] },
        })
      }
      nextLogin({ token })
      await APIFuncs.getMyAddress(token).then(RESAddress => {
        if (Array.isArray(RESAddress)) {
          console.log('Address GETTING ')
          dispatch({ type: GET_ADDRESS, payload: RESAddress })
        } else {
          console.log('Address GETTING Bug')
        }
      })
      await APIFuncs.getMyOrders(token).then(RESOrder => {
        if (Array.isArray(RESOrder)) {
          console.log('Address GETTING ')
          dispatch({ type: GET_ORDER, payload: RESOrder })
        } else {
          console.log('Order GETTING Bug')
        }
      })
      await APIFuncs.getMyWishList(token).then(RESWishlist => {
        if (typeof RESWishlist === 'object') {
          console.log('Wishlist GETTING ')
          dispatch({ type: GET_WISHLIST, payload: RESWishlist })
        } else {
          console.log('Wishlist GETTING Bug')
        }
      })
    } else {
      console.log('token Not Present')
    }
  }
  // })
  return result
}

const verificaionWithPhone = PAYLOAD => async dispatch => {
  let Result = null
  await APIFuncs.signUpByPhone(PAYLOAD).then(RES => {
    Result = RES
  })
  return Result
}

const addorRemoveFromCart = (payload, token) => async dispatch => {
  console.log('cart action')
  const Returner = await APIFuncs.updateMyCart(payload, token).then(Res => {
    dispatch({ type: ADDorREMOVEfromCart, payload: Res })
    return Res
  })
  return Returner
}

const refreshCart = token => async dispatch => {
  await APIFuncs.getMyCart(token).then(payload => {
    if (payload) dispatch({ type: ADDorREMOVEfromCart, payload })
    return payload
  })
}

const addOrRemoveFromWishlist = (
  item,
  localWishlist,
  token
) => async dispatch => {
  const funcLocalArray = localWishlist
  const itemFindAt = checkIsItInWishlist(localWishlist, {
    _pid: item.product._id,
    _vid: item.variant._id,
  })
  if (itemFindAt !== -1) {
    funcLocalArray.splice(itemFindAt, 1)
  } else {
    funcLocalArray.push(item)
  }
  await APIFuncs.postAddorRemoveinWishlist(item, token).then(RES => {
    if (RES) {
      const { msg, product, variant } = RES
      if (msg) {
        dispatch({ type: ADDorREMOVEfromWISHLIST, payload: funcLocalArray })
      } else if (product && variant) {
        dispatch({ type: ADDorREMOVEfromWISHLIST, payload: funcLocalArray })
      }
    }
    return RES
  })
}

const changePaymentMethod = payload => dispatch => {
  dispatch({ type: CHANGE_PAY_METHOD, payload })
}

const selectAddressIndex = payload => dispatch => {
  dispatch({ type: CHOOSE_ADDRESS, payload })
}

const chooseBrand = payload => dispatch => {
  setBrand(payload)
  dispatch({ type: CHOOSE_BRAND, payload })
}

const addAddress = (token, payload) => async dispatch => {
  await APIFuncs.postMyAddress(token, payload).then(RES => {
    !!RES && dispatch({ type: POST_ADDRESS, payload })
  })
}

const updateUserInfo = (id, OBJECT, token) => async dispatch => {
  let Result = null
  await APIFuncs.updateUserInfo(token, id, OBJECT).then(RES => {
    RES !== null && dispatch({ type: UPDATE_USER_INFO, payload: RES })
    Result = RES
  })

  return Result
}

const ActionType = {
  AUTH_LOADING,
  GET_POST_LOADING,
  LOADING,
  LOADING_COMPLETE,
  ADDorREMOVEfromWISHLIST,
  ADDorREMOVEfromCart,
  ADD_USER_With_SIGNUP,
  ADD_USER_With_SIGNIN,
  GET_WISHLIST,
  GET_ADDRESS,
  PUT_ADDRESS,
  POST_ADDRESS,
  POST_ORDER,
  EMPTY_CART,
  GET_ORDER,
  PUSH_ORDERS,
  GET_CART,
  LOG_OUT,
  GET_LIST_LOADING,
  LOAD_MEGAMENU,
  GET_PAYMETHODS,
  LOAD_EXPO_TOKEN,
  EXPO_FIRST_TIME_TOKEN_SENT,
  EXPO_AUTHENTICATE_TIME_TOKEN_SENT,
  CHOOSE_ADDRESS,
  GET_PROMOTION,
  VERIFY_PHONE,
  CHANGE_PAY_METHOD,
  UPDATE_USER_INFO,
  UPDATE_SETTINGS,
  CHANGE_DISPLAY,
  CHOOSE_BRAND,
  AUTH_MODAL,
  SOCIAL_AUTH,
}
export {
  ActionType,
  addorRemoveFromCart,
  GetMegaMenuNew,
  updateSettings,
  LogOut,
  LogIn,
  loginWithPhone,
  loginWithEmail,
  signUpWithPhone,
  signUpWithEmail,
  SocialAuth,
  verificaionWithPhone,
  loginWithPhoneWhileReset,
  refreshCart,
  addOrRemoveFromWishlist,
  changePaymentMethod,
  selectAddressIndex,
  addAddress,
  updateUserInfo,
  chooseBrand,
  setAuthModal,
}
