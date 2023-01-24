import AXIOS from 'axios'
import { WarningLogger, InfoLogger } from './utilties'
const JWT = require('jwt-decode')
const HOST = 'https://v3-api.clicky.pk'
// const HOST = 'http://localhost:9000'
const HostAPI = `${HOST}/api`
const MegaCategoryMenu = `${HostAPI}/categories/megamenu?where={"megamenu":true}`
const SubCatContent = `${HostAPI}/promotions/search/null?categories=`
const SearchedContent = `${HostAPI}/promotions/search/`
const ProductDetail = `${HostAPI}/products/`
const recentProducts = `${HostAPI}/products/ids`
const AddorRemovetoWishlist = `${HostAPI}/wishlists/`
const myWhishList = `${HostAPI}/wishlists/my`
const myAddress = `${HostAPI}/addresses/my`
const editMyAddressUrl = `${HostAPI}/addresses/`
const addMyAddress = `${HostAPI}/addresses`
const placeOrder = `${HostAPI}/orders`
const myOrders = `${HostAPI}/orders/my`
const myfilters = `${HostAPI}/products/applied/` // null?categories=,
const getCartCONST = `${HostAPI}/cart`
const AddorRemoveCartCONST = `${getCartCONST}/add`
const GetGroupDetail = `${HostAPI}/products/groupItems/`
const GetterForMoneyMethods = `${HostAPI}/payment-methods/active`
const PathToExpoToken = `${HostAPI}/tokens`
const SETTINGS = `${HostAPI}/settings`
const CheckFBUserRegistered = `${HostAPI}/users/facebook-login?email=`
const similarProducts = `${HostAPI}/products/similar/`
const featuredLanding = `${HostAPI}/categories/featured_landing/`
const categoryWidget = `${HostAPI}/categories/homepage_category_widget/`
const orderPlaced = `${HostAPI}/orders/public/`

//= ==============================[Email]=========================
const forgotPassword = `${HostAPI}/users/forgot/`
const resetPassword = `${HostAPI}/users/password`
const SignUp = `${HostAPI}/users/`
// "/users/password"
// "/auth/signup"
// "/auth/login"
// "/users/profile"
// "/auth/local/logout"
const SignIn = `${HostAPI}/auth/local/`
//= ==============================[Phone]==========================
// "/auth/Mobilelogin"
// "/auth/phone/signup"
const phoneLogin = `${HostAPI}/auth/phone`
const phoneVerification = `${HostAPI}/auth/MobileVerifyLogin`
const phoneSignUp = `${HostAPI}/users`
const phoneResetPassword = `${HostAPI}/auth/phone/reset`
const phonePasswordForgot = `${HostAPI}/auth/phone/forgot`
//================================[ social Login ]============================
const getSocialUserInfo = `${HostAPI}/users/me`
//-------------------------------------------------------------------
const NewHOST = 'http://api2.clicky.pk'
const testSignUp = `${NewHOST}/users`
const testSignIn = `${NewHOST}/authentication`
// verifyPhone = NewHOST + "/phone",
const getFreebies = `${NewHOST}/freebie`
const applyFreebies = `${NewHOST}/applyfreebie`
const smsAuth = `${NewHOST}/authentication`
const sendSms = `${NewHOST}/sms`
const otpVerify = `${NewHOST}/otp-verify`
const userManagement = `${NewHOST}/user-management`
const RMA = `${placeOrder}/rma/getRMA`
const RMAC = `${placeOrder}/rma/getRMAComplaint`
const CreateRMA = `${placeOrder}/rma/createRMA`
//= ==============================================================
const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  // "Cache-Control": "no-cache"
}

const SpecialHEADER1 = {
  'Content-Type': 'application/json',
  Authorization: '',
}
const CheckerFBUserExist = async EMAIL => {
  let ReturnData = null
  await fetch(CheckFBUserRegistered + EMAIL)
    .then(Checker => Checker.json())
    .then(JSONChecker => {
      InfoLogger('Checker', JSONChecker)
      if (JSONChecker.hasOwnProperty('token')) {
        ReturnData = JSONChecker
      }
    })
  return ReturnData
}
//= ==============================================================
const getSmsAuth = async () => {
  let result = null
  await AXIOS.post(
    smsAuth,
    JSON.stringify({
      email: 'admin@omnisell.pk',
      password: 'wordpass2019',
      strategy: 'local',
    }),
    {
      withCredentials: true,
      headers: HEADERS,
    }
  )
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        result = data
      } else {
        InfoLogger('smsAuthStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('smsAuthError', e)
    })
  return result
}
const updateUserInfo = async (token, id, PAYLOAD) => {
  let result = null
  SpecialHEADER1.Authorization = `Bearer ${token}`
  await AXIOS.put(SignUp + id, JSON.stringify(PAYLOAD), {
    withCredentials: true,
    headers: SpecialHEADER1,
  })
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        result = data
      } else {
        InfoLogger('updateUserInfoStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('updateUserInfoError', e)
    })
  return result
}
const sendSmsVerification = async (phone, token, verificationCode) => {
  let result = null
  HEADERS.Authorization = `Bearer ${token}`
  await AXIOS.post(
    sendSms,
    JSON.stringify({
      mobileNo: phone,
      message: `Your verification Code is ${verificationCode}`,
      type: 'open',
    }),
    {
      withCredentials: true,
      headers: HEADERS,
    }
  )
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        result = data
      } else {
        InfoLogger('sendSmsVerificationStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('sendSmsVerificationError', e)
    })
  return result
}
const otpVerification = async (phone, otp) => {
  let result = null
  await AXIOS.post(
    otpVerify,
    JSON.stringify({
      phone,
      otp,
    }),
    {
      withCredentials: true,
      headers: HEADERS,
    }
  )
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        result = data
      } else {
        InfoLogger('otpVerificationStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('otpVerificationVerificationError', e)
    })
  return result
}
const sendForResetorResent = async (option, payload) => {
  let result = null
  await AXIOS.post(
    userManagement,
    JSON.stringify({
      option,
      ...payload,
    }),
    {
      withCredentials: true,
      headers: HEADERS,
    }
  )
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        result = data
      } else {
        InfoLogger(`${option}Status`, status)
      }
    })
    .catch(e => {
      InfoLogger(`${option}Error`, e)
    })
  return result
}
//-----------------------------------------------------------------------------------------
// const async socialLogin({ commit }, token) {
//   try {
//       if (token) {
//           this.$axios.setToken(token, 'Bearer')
//           const user = await this.$axios.$get('users/me')
//           commit('setUser', user)
//           this.$cookies.set('Authorization', token, { path: '/', maxAge: tokenExpiry })
//           // dispatch('cart/fetch', {}, { root: true })
//           return user
//       }
//   } catch (err) {
//       commit('setErr', err, { root: true })
//   }
// },
const GetSocialUserInfo = async Token => {
  let result = null
  await AXIOS.get(getSocialUserInfo, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    },
  })
    .then(({ data, status }) => {
      if (status === 200 || status === 201) {
        result = data
        InfoLogger('Soc1alUserInfo', data)
      } else {
        InfoLogger('SocialUserInfoStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('SocialUserInfoError', e)
    })
  return result
}
const FacebookSyncer = async code => {
  let result = null
  await AXIOS.get(`${HostAPI}/auth/facebook/callback?code=${code}`, {
    withCredentials: true,
  })
    .then(({ data, status }) => {
      if (status === 200 || status === 201) {
        result = data
        InfoLogger('FacebookSyncer', data)
      } else {
        InfoLogger('FacebookSyncerStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('FacebookSyncerError', e)
    })
  return result
}
//-=-=-=-=-=-=-=-==-=-=-=-==-==-=-=-=--=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const getFreebiesFunc = async (Token, productId = undefined) => {
  Token && (SpecialHEADER1.Authorization = `Bearer ${Token}`)
  let result = null
  await AXIOS.get(
    productId ? `${getFreebies}/?productId=${productId}` : getFreebies,
    {
      withCredentials: true,
      headers: SpecialHEADER1,
    }
  )
    .then(({ data, status }) => {
      if (status === 200) {
        result = data
      } else {
        InfoLogger('getFreebiesStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('getFreebiesError', e)
    })
  return result
}

const applyFreebiesFunc = async (id, Token) => {
  let result = null
  SpecialHEADER1.Authorization = `Bearer ${Token}`
  await AXIOS.post(
    applyFreebies,
    JSON.stringify({
      id,
    }),
    {
      withCredentials: true,
      headers: SpecialHEADER1,
    }
  )
    .then(({ data, status }) => {
      if (status === 200 || status === 201) {
        result = data
      } else {
        InfoLogger('applyFreebiesStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('applyFreebiesError', e)
    })
  return result
}
//= =================================[APIcalls]===================
const GetMegaCategoryMenu = async () => {
  let result = []
  await AXIOS.get(MegaCategoryMenu)
    .then(({ data, status }) => {
      if (status === 200 || status === 201) {
        result = data
        // InfoLogger('MegaMenu', data)
      } else {
        // InfoLogger('MegaMenuStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('MegaMenuError', e)
    })
  return result
}
const UpdateSettings = async () => {
  let result = []
  await AXIOS.get(SETTINGS)
    .then(({ data, status }) => {
      if (status === 200 || status === 201) {
        result = data
        // InfoLogger('Settings', data)
      } else {
        InfoLogger('SettingsStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('SettingsError', e)
    })
  return result
}
const GetSubCategoryContent = async (searchFor, page, FilterorSortString) => {
  // const response = await fetch(
  //   SubCatContent + searchFor + FilterorSortString + "&page=" + page,
  //   {
  //     method: "GET",
  //     headers: HEADERS
  //   }
  // );
  // return await response.json();
  let result = null
  const FetchUrl = `${SubCatContent +
    searchFor +
    FilterorSortString}&page=${page}`
  // InfoLogger('FetchUrl', FetchUrl)
  // console.log('Fetch', FetchUrl)
  await AXIOS.get(FetchUrl)
    .then(({ data, status }) => {
      if (status === 200 || status === 201) {
        result = data
        // InfoLogger('CategoryContent', data)
      } else {
        InfoLogger('CategoryContentStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('CategoryContentError', e)
    })
  return result
}

const GetSettings = async () => {
  const response = await fetch(SETTINGs, {
    method: 'GET',
    headers: HEADERS,
  })
  return await response.json()
}

const GetMoneyMethods = async () => {
  let result = []
  //  console.log('MoneyMethodsURL', GetterForMoneyMethods);
  await AXIOS.get(GetterForMoneyMethods)
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        InfoLogger('MoneyMethods', data)
        result = data
      } else {
        InfoLogger('MoneyMethodsStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('MoneyMethodsError', e)
    })
  return result
}

const GetContentForSearch = async (searchFor, page, FilterorSortString) => {
  InfoLogger('FullString', `${searchFor}?${FilterorSortString}`)
  const response = await fetch(
    `${SearchedContent + searchFor}?${FilterorSortString}&page=${page}`,
    {
      method: 'GET',
      headers: HEADERS,
    }
  )
  return await response.json()
}

const getFilters = async (SearchString, categorySlug) => {
  let result = null
  await AXIOS.get(
    SearchString
      ? myfilters + SearchString
      : `${myfilters}null?categories=${categorySlug}`
  )
    .then(({ data, status }) => {
      if (status === 200 || status === 201) {
        result = data
        // InfoLogger('filter', data)
      } else {
        InfoLogger('filterStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('filterError', e)
    })
  return result
}

const GetProductDetail = async ProductID => {
  let result = null
  const PreparedUrl = ProductDetail + ProductID
  InfoLogger('URL', PreparedUrl)
  await AXIOS.get(PreparedUrl)
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        InfoLogger('ProductDetail', data)
        result = data
      } else {
        InfoLogger('ProductDetailStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('ProductDetailError', e)
    })
  return result
}
//= ============================================Newest API================
const postSignUpWithPhone = async OBJECT => {
  let JsonConverted = null
  await AXIOS.post(testSignUp, JSON.stringify(OBJECT), {
    withCredentials: true,
    headers: HEADERS,
  })
    .then(response => {
      InfoLogger('SignUPWithPhone Response', response.data)
      JsonConverted = response.data
    })
    .catch(e => {
      const { response } = e
      const { data, status } = response
      InfoLogger('ERROR status', status)
      InfoLogger('ERROR Response', data)
      JsonConverted = data
    })
  return JsonConverted
}

const postSignInWithPhone = async OBJECT => {
  let JsonConverted = null
  OBJECT.strategy = 'phone'
  await AXIOS.post(testSignIn, JSON.stringify(OBJECT), {
    withCredentials: true,
    headers: HEADERS,
  })
    .then(response => {
      const { data } = response
      JsonConverted = data
    })
    .catch(e => {
      const { response } = e
      const { data, status } = response
      InfoLogger('ERROR status', status)
      InfoLogger('ERROR RESPonse', data)
      JsonConverted = data
    })

  return JsonConverted
}
//= =======================================================================
const postSignUp = async OBJECT => {
  let JsonConverted = null
  await AXIOS.post(SignUp, JSON.stringify(OBJECT), {
    withCredentials: true,
    headers: HEADERS,
  })
    .then(response => {
      InfoLogger('SignUP Response', response.data)
      JsonConverted = response.data
    })
    .catch(e => {
      const { response } = e
      if (response) {
        const { data, status } = response
        InfoLogger('ERROR status', status)
        InfoLogger('ERROR Response', data)
        JsonConverted = data
      } else {
        InfoLogger('ERROR status', response)
        InfoLogger('ERROR Response', response)
        JsonConverted = response
      }
    })

  return JsonConverted
}

const postSignIn = async OBJECT => {
  let JsonConverted = null
  await AXIOS.post(SignIn, JSON.stringify(OBJECT), {
    withCredentials: true,
    headers: HEADERS,
  })
    .then(response => {
      const { data } = response
      JsonConverted = data
    })
    .catch(e => {
      const { response } = e
      const { data, status } = response
      InfoLogger('ERROR status', status)
      InfoLogger('ERROR RESPonse', data)
      JsonConverted = data
    })

  return JsonConverted
}

const getGroupDetail = async ID => {
  let JsonConverted = null
  await AXIOS.get(GetGroupDetail + ID).then(response => {
    InfoLogger('Group Reponse', response.data)
    JsonConverted = response.data
  })

  return JsonConverted
}
//= =================================[WishList]=================================
const postAddorRemoveinWishlist = async (OBJECT, Token) => {
  SpecialHEADER1.Authorization = `Bearer ${Token}`
  let result = null
  InfoLogger('URL4UpdateWishList', AddorRemovetoWishlist)
  // console.log("ObjectToBeSend:", OBJECT);
  await AXIOS.post(AddorRemovetoWishlist, JSON.stringify(OBJECT), {
    withCredentials: true,
    headers: SpecialHEADER1,
  })
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 202 || status === 201) {
        InfoLogger('UpdateWishList', data)
        result = data
      } else {
        InfoLogger('UpdateWishListStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('UpdateWishListError', e)
    })
  return result
}

const getMyWishList = async Token => {
  SpecialHEADER1.Authorization = `Bearer ${Token}`
  let result = []
  // console.log('URL4WishList:', myWhishList);
  await AXIOS.get(myWhishList, {
    withCredentials: true,
    headers: SpecialHEADER1,
  })
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        InfoLogger('MyWishList', data)
        result = data
      } else {
        InfoLogger('MyWishListStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('MyWishListError', e)
    })
  return result
}
//= =============================================================================

const getMyAddress = async Token => {
  SpecialHEADER1.Authorization = `Bearer ${Token}`
  const response = await fetch(myAddress, {
    method: 'GET',
    headers: SpecialHEADER1,
  })
  try {
    return await response.json()
  } catch {
    return `${response}`
  }
}
const getMyOrders = async Token => {
  SpecialHEADER1.Authorization = `Bearer ${Token}`
  const response = await fetch(myOrders, {
    method: 'GET',
    headers: SpecialHEADER1,
  })
  try {
    return await response.json()
  } catch {
    return `${response}`
  }
}
const getMyOrderDetail = async (orderID, Token) => {
  SpecialHEADER1.Authorization = `Bearer ${Token}`
  let JsonConverted = null
  await AXIOS.get(`${myOrders}/${orderID}`, {
    headers: SpecialHEADER1,
  }).then(response => {
    InfoLogger('Geting oderDetail Response', response.data)
    JsonConverted = response.data
  })
  return JsonConverted
}

const editMyAddress = async (Token, addressObject, addressID) => {
  SpecialHEADER1.Authorization = `Bearer ${Token}`
  const response = await fetch(editMyAddressUrl + addressID, {
    method: 'PUT',
    headers: SpecialHEADER1,
    body: JSON.stringify(addressObject),
  })
  try {
    return await response.json()
  } catch {
    return `${response}`
  }
}

const deleteMyAddress = async (token, addressID) => {
  SpecialHEADER1.Authorization = `Bearer ${token}`
  const response = await fetch(editMyAddressUrl + addressID, {
    method: 'DELETE',
    headers: SpecialHEADER1,
  })
  try {
    return await response.json()
  } catch {
    return `${response}`
  }
}

const forgotPasswordForEmail = async email => {
  let TobeReturn = null
  InfoLogger('starting Password Recovery Data', email)
  await fetch(forgotPassword, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  })
    .then(res => res.json())
    .then(json => {
      InfoLogger('Password Recovery results', json)
      if (json) {
        TobeReturn = json
      }
    })
  return TobeReturn
}

const SendExpoTokenToServer = async token => {
  let result = false
  await fetch(PathToExpoToken, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
    }),
  })
    .then(res => res.json())
    .then(json => {
      InfoLogger('ExpoTokenSend', json)
      result = true
    })
  return result
}
const SendExpoTokenToServerForUser = async (ID, expoPushToken, Token) => {
  let result = false
  await AXIOS.put(SignUp + ID, JSON.stringify({ expoPushToken }), {
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
      'Cache-Control': 'no-cache',
    },
  })
    .then(response => {
      InfoLogger('ExpoTokenSendForUser', response.data)
      result = true
    })
    .catch(e => {
      InfoLogger('ExpoTokenSendForUserError', e)
    })
  return result
}
const getSimilarProducts = async ProductID => {
  let result = []
  const PreparedUrl = similarProducts + ProductID
  // console.log('URL4GetSimilarProduct', PreparedUrl);
  await AXIOS.get(PreparedUrl)
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        // InfoLogger('SimilarProduct', data)
        result = data
      } else {
        // InfoLogger('SimilarProductStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('SimilarProductError', e)
    })
  return result
}

const getRecentlyViewedProducts = async (payload) => {
  let result = null
  const PreparedUrl = recentProducts
  InfoLogger('URL', PreparedUrl)
  await AXIOS.post(PreparedUrl, payload)
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        InfoLogger('ProductDetail', data)
        result = data
      } else {
        InfoLogger('ProductDetailStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('ProductDetailError', e)
    })
  return result
}

const getFeaturedLanding = async SLUG => {
  let result = []
  const PreparedUrl = featuredLanding + SLUG
  InfoLogger('URL4getFeaturedLanding', PreparedUrl)
  await AXIOS.get(PreparedUrl)
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        InfoLogger('FeaturedLanding', data)
        result = data
      } else {
        InfoLogger('FeaturedLandingStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('FeaturedLandingError', e)
    })
  return result
}
const getCategoryWidget = async SLUG => {
  let result = []
  const PreparedUrl = categoryWidget + SLUG
  InfoLogger('URL4getCategoryWidget', PreparedUrl)
  await AXIOS.get(PreparedUrl)
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        InfoLogger('CategoryWidget', data)
        result = data.categories
      } else {
        InfoLogger('CategoryWidgetStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('CategoryWidgetError', e)
    })
  return result
}
//= =========================================================================
const signInByPhone = async ({ phone, password }) => {
  let result = null
  await AXIOS.post(phoneLogin, {
    withCredentials: true,
    phone,
    password,
    strategy: 'phone',
  })
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        InfoLogger('signInByPhone', data)
        result = data.data
      } else {
        InfoLogger('signInByPhoneStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('signInByPhoneError', e)
    })
  return result
}
const signInByEmail = async ({ email, password }) => {
  let result = null
  // InfoLogger("signInByEmailPAYLOAD", PAYLOAD);
  await AXIOS.post(SignIn, {
    withCredentials: true,
    email,
    password,
    strategy: 'local',
  })
    .then(response => {
      const { data, status } = response
      if (status === 200) {
        InfoLogger('signInByEmail', data)
        result = data
      } else {
        InfoLogger('signInByEmailStatus', status)
      }
    })
    .catch(e => {
      const { response } = e
      if (response) {
        const { data, status } = response
        InfoLogger('signInByEmailERROR', e)
      }
      // result = data;
    })

  return result
}

// phoneSignUp
const signUpByPhone = async phone => {
  let result = null

  const Payload = JSON.stringify({
    phone,
    password: '123321',
    email: `${phone}@clicky.pk`,
  })
  InfoLogger('Phone', Payload)
  await AXIOS.post(phoneSignUp, Payload, {
    withCredentials: true,
    headers: HEADERS,
  })
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        InfoLogger('signUpByPhone', data)
        result = data
      } else {
        InfoLogger('signUpByPhoneStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('signUpByPhoneERROR', e)
    })

  return result
}
const sendPasswordResetOTP = async phone => {
  let result = null
  await AXIOS.post(phonePasswordForgot, {
    withCredentials: true,
    phone,
  })
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        InfoLogger('phonePasswordForgot', data)
        result = data
      } else {
        InfoLogger('phonePasswordForgotStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('phonePasswordForgotERROR', e)
    })

  return result
}
const sendResetPhonePassword = async object => {
  let result = null
  await AXIOS.post(phoneResetPassword, {
    ...object,
    option: 'resetPassword',
    withCredentials: true,
  })
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        InfoLogger('sendResetPhonePassword', data)
        result = data
      } else {
        InfoLogger('sendResetPhonePasswordStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('sendResetPhonePasswordERROR', e)
    })

  return result
}
const verifyPhone = async ({ phone, otp, password }) => {
  let result = null
  await AXIOS.post(phoneVerification, {
    withCredentials: true,
    phone,
    otp,
    password,
  })
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        InfoLogger('verifyPhone', data)
        result = data
      } else {
        InfoLogger('verifyPhoneStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('verifyPhoneERROR', e)
    })

  return result
}
const changePassword = async (OBJECT, token) => {
  let result = null
  SpecialHEADER1.Authorization = `Bearer ${token}`
  await AXIOS.put(resetPassword, OBJECT, {
    withCredentials: true,
    headers: SpecialHEADER1,
  })
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        InfoLogger('changePassword', data)
        result = data
      } else {
        InfoLogger('changePasswordStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('changePasswordERROR', e)
    })

  return result
}
const cancelOrder = async (OBJECT, id, token) => {
  let result = null
  SpecialHEADER1.Authorization = `Bearer ${token}`
  await AXIOS.put(`${placeOrder}/${id}`, OBJECT, {
    withCredentials: true,
    headers: SpecialHEADER1,
  })
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        InfoLogger('cancelOrder', data)
        result = 'Canceled'
      } else {
        InfoLogger('cancelOrderStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('cancelOrderERROR', e)
    })

  return result
}

const getRecentOrderInfo = async id => {
  let result = null
  await AXIOS.get(orderPlaced + id)
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        InfoLogger('orderPlaced', data)
        result = data
      } else {
        InfoLogger('orderPlacedStatus', status)
      }
    })
    .catch(e => {
      InfoLogger(orderPlaced + id, e)
    })

  return result
}
const getContent = async subject => {
  let result = null
  await AXIOS.get(HostAPI + '/pages/public/' + subject)
    .then(response => {
      const { data, status } = response
      if (status === 200 || status === 201) {
        InfoLogger('getContaent', data)
        result = data
      } else {
        InfoLogger('getContaentStatus', status)
      }
    })
    .catch(e => {
      InfoLogger('getContaentOrderPlaced', e)
    })

  return result
}

//================Get My Cart===========================================
const getMyCart = async Token => {
  const HeaderWithToken = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Token}`,
  }
  let JsonConverted = null
  await AXIOS.get(getCartCONST, {
    headers: Token ? HeaderWithToken : HEADERS,
  }).then(response => {
    InfoLogger('Geting Cart Response', response.data)
    JsonConverted = response.data
  })

  return JsonConverted
}
//=================================[Disputes]===============================
const getMyRMA = async (Token, { email, phone }) => {
  const operation = 'GetMyRMA'
  InfoLogger(`${operation} sending payload`, { email, phone })
  InfoLogger(`Token at time of ${operation}`, Token)
  let result = null
  await AXIOS.post(RMA, JSON.stringify({ email, phone }), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    },
  })
    .then(response => {
      const { status, data } = response
      if (status === 200 || status === 201) {
        InfoLogger(`${operation} Response`, data)
        result = data
      } else {
        InfoLogger(`${operation} Status`, status)
      }
    })
    .catch(e => {
      InfoLogger(`${operation} Error`, e)
    })

  return result
}
const getMyRMADetail = async (Token, order_id) => {
  const operation = 'GetMyRMADetail'
  InfoLogger(`${operation} sending payload`, { order_id })
  InfoLogger(`Token at time of ${operation}`, Token)
  let result = null
  await AXIOS.post(RMAC, JSON.stringify({ order_id }), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    },
  })
    .then(response => {
      const { status, data } = response
      if (status === 200 || status === 201) {
        InfoLogger(`${operation} Response`, data)
        result = data
      } else {
        InfoLogger(`${operation} Status`, status)
      }
    })
    .catch(e => {
      InfoLogger(`${operation} Error`, e)
    })

  return result
}
const createMyRMA = async (Token, Payload) => {
  const operation = 'CreateMyRMA'
  InfoLogger(`${operation} sending payload`, Payload)
  InfoLogger(`Token at time of ${operation}`, Token)
  let result = null
  await AXIOS.post(CreateRMA, JSON.stringify(Payload), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    },
  })
    .then(response => {
      const { status, data } = response
      if (status === 200 || status === 201) {
        InfoLogger(`${operation} Response`, data)
        result = data
      } else {
        InfoLogger(`${operation} Status`, status)
      }
    })
    .catch(e => {
      InfoLogger(`${operation} Error`, e)
    })

  return result
}
//==================================[Most Sensitive APIs]====================
//================Update Cart==============================================
const updateMyCart = async (Payload, Token) => {
  const operation = 'UPDATE CART'
  InfoLogger(`${operation} sending payload`, Payload)
  InfoLogger(`Token at time of ${operation}`, Token)
  let Result = null
  await AXIOS.post(AddorRemoveCartCONST, JSON.stringify(Payload), {
    withCredentials: true,
    headers: !!Token
      ? {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token}`,
      }
      : HEADERS,
  })
    .then(response => {
      const { status, data } = response
      if (status === 200 || status === 201) {
        InfoLogger(`${operation} Response`, data)
        Result = data
      } else {
        InfoLogger(`${operation} Status`, status)
      }
    })
    .catch(e => {
      InfoLogger(`${operation} Error`, e)
    })
  return Result
}
//================ORDER PLACING=============================================
const sendOrder = async (Token, Payload) => {
  const operation = 'POSTING ORDER'
  InfoLogger(`${operation} sending payload`, Payload)
  InfoLogger(`Token at time of ${operation}`, Token)
  let Result = null
  await AXIOS.post(placeOrder, JSON.stringify(Payload), {
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    },
  })
    .then(response => {
      const { status, data } = response
      if (status === 200 || status === 201) {
        InfoLogger(`${operation} Response`, data)
        Result = data
      } else {
        InfoLogger(`${operation} Status`, status)
      }
    })
    .catch(e => {
      InfoLogger(`${operation} Error`, e)
    })
  return Result
}
//====================guest order =============================//
const sendOrderGuest = async Payload => {
  const operation = 'POSTING ORDER'
  InfoLogger(`${operation} sending payload`, Payload)
  let Result = null
  await AXIOS.post(placeOrder, JSON.stringify(Payload), {
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      const { status, data } = response
      if (status === 200 || status === 201) {
        InfoLogger(`${operation} Response`, data)
        Result = data
      } else {
        InfoLogger(`${operation} Status`, status)
      }
    })
    .catch(e => {
      InfoLogger(`${operation} Error`, e)
    })
  return Result
}
//==========================ADD ADDRESS======================================
const postMyAddress = async (Token, Payload) => {
  const operation = 'POSTING ADDRESS'
  InfoLogger(`${operation} sending payload`, Payload)
  InfoLogger(`Token at time of ${operation}`, Token)
  let Result = null
  await AXIOS.post(addMyAddress, JSON.stringify(Payload), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    },
  })
    .then(response => {
      const { status, data } = response
      if (status === 200 || status === 201) {
        InfoLogger(`${operation} Response`, data)
        Result = data
      } else {
        InfoLogger(`${operation} Status`, status)
      }
    })
    .catch(e => {
      InfoLogger(`${operation} Error`, e)
    })
  return Result
}
//= ================================[Exporter]===============================
const APIFuncs = {
  GetMegaCategoryMenu,
  UpdateSettings,
  GetSubCategoryContent,
  GetContentForSearch,
  GetProductDetail,
  postSignUp,
  postSignIn,
  postAddorRemoveinWishlist,
  getMyWishList,
  getMyAddress,
  editMyAddress,
  postMyAddress,
  deleteMyAddress,
  sendOrder,
  sendOrderGuest,
  getMyOrders,
  getMyCart,
  updateMyCart,
  getFilters,
  getMyOrderDetail,
  getGroupDetail,
  forgotPasswordForEmail,
  GetMoneyMethods,
  SendExpoTokenToServer,
  SendExpoTokenToServerForUser,
  CheckerFBUserExist,
  GetSettings,
  getSimilarProducts,
  getFeaturedLanding,
  getCategoryWidget,
  getRecentlyViewedProducts,
  //----------------------------------------
  postSignUpWithPhone,
  postSignInWithPhone,
  //! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  signInByPhone,
  signInByEmail,
  FacebookSyncer,
  GetSocialUserInfo,
  signUpByPhone,
  verifyPhone,
  sendPasswordResetOTP,
  sendResetPhonePassword,
  //----------------------------------------
  getSmsAuth,
  sendSmsVerification,
  otpVerification,
  sendForResetorResent,
  //----------------------------------------
  getFreebiesFunc,
  applyFreebiesFunc,
  updateUserInfo,
  changePassword,
  cancelOrder,
  getRecentOrderInfo,
  getContent,
  //==========================================
  getMyRMA,
  createMyRMA,
  getMyRMADetail,
}
const APIConst = {
  HOST,
}
export { APIConst, APIFuncs }
