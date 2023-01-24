/* eslint-disable no-trailing-spaces */
/* eslint-disable object-curly-spacing */
/* eslint-disable nonblock-statement-body-position */
// @ts-nocheck
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */

import React, { useState, createRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import ReactPixel from 'react-facebook-pixel'
import {
  selectAddressIndex,
  addAddress as addNewAddress,
  refreshCart,
} from '@redux/action'
import { APIFuncs } from '@utilts/APIs'
import useInput from '@components/useInput'
import {
  AddCircleRounded,
  RadioButtonCheckedRounded,
  RadioButtonUncheckedRounded,
  Close as CloseIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  Modal,
  FormControl,
  OutlinedInput,
  Button,
  InputLabel,
  Input,
} from '@material-ui/core'
import { isEmpty } from 'lodash'
const PostLink = ({ slug, _id, children }) => (
  <Link
    href={`/mobile/listing/[listingSlug]?id=${_id}`}
    as={`/mobile/listing/${slug}?id=${_id}`}>
    {children}
  </Link>
)
const useStyles = makeStyles(theme => ({
  inputText: {
    marginTop: '30px',
    marginBottom: '10px',
    fontWeight: '600',
    fontSize: '13px',
    color: '#111',
  },
  topInputText: {
    marginBottom: '10px',
    fontWeight: '600',
    fontSize: '13px',
    color: '#111',
  },
  tabText: {
    fontWeight: '600',
    fontSize: '15px',
  },
  resize: {
    fontSize: '12px',
  },
  labelRoot: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#333',
    '&$labelFocused': {
      color: 'grey',
    },
  },

  labelFocused: { fontSize: '12px' },
  [theme.breakpoints.up('md')]: {
    textFieldContainer: { width: '40vw', margin: '1vh 5vw 0 5vw' },
  },
  [theme.breakpoints.down('md')]: {
    textFieldContainer: { width: '90vw', margin: '1vh 5vw 0 5vw' },
  },
}))
const checkout = props => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [modalOn, setModalOn] = useState(false)
  const [addAddress, setAddAddress] = useState(false)
  const [input, handleInputChange] = useInput()
  const [loading, setLoading] = useState(false)
  const [guestAddress, setGuestAddress] = useState(null)
  const [addressLoading, setAddressLoading] = useState(false)
  const { cart, wishlist, token, user, settings } = useSelector(
    ({ USER, SETTINGS: { settings } }) => ({
      cart: USER.cart,
      wishlist: USER.wishlist,
      token: USER.token,
      user: USER,
      settings,
    })
  )

  const [selectedAdress, setSelectedAdress] = useState(user.currentAddressIndex)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    user.paymentMethod || 'cod'
  )

  const { query, pathname, push, replace } = useRouter()
  const setStepSelected = num => {
    push({ pathname, query: { step: num } })
  }
  const { step } = query
  const stepSelected = step !== '1' ? step || 2 : 2
  if (!cart?.items?.length && Number(step) !== 3) push('/cart')
  if (user.loggedIn && user.address.length === 0 && Number(step) === 3) {
    setStepSelected(2)
  } else if (!user.loggedIn && !guestAddress && Number(step) === 3) {
    setStepSelected(2)
  }
  if (typeof user.currentAddressIndex !== 'number' && Number(step) > 1)
    push({ pathname, query: { step: 1 } })
  else if (user.currentAddressIndex === -1 && Number(step) > 1)
    push({ pathname, query: { step: 1 } })
  const validAddress =
    input.phone &&
    input.firstName &&
    input.lastName &&
    input.city &&
    input.address &&
    !user.loggedIn
      ? input.email
      : true
  const createAddress = () => {
    const { phone, firstName, lastName, city, address, email } = input
    if (!user.loggedIn) {
      if (phone && firstName && lastName && city && address && email) {
        setGuestAddress({
          firstName: firstName,
          lastName: lastName,
          city: city,
          phone: phone,
          address: address,
          email: email,
        })
        setLoading(false)
        setAddAddress(false)
        input.phone = null;
        input.firstName = null;
        input.lastName = null;
        input.city = null;
        input.address = null;
      }else{
        alert('Please fill all input fields')
      }
    } else {
      validAddress &&
        addNewAddress(token, {
          firstName,
          lastName,
          city,
          phone,
          address,
        })(dispatch).then(() => {
          setLoading(false)
          setAddAddress(false)
        })
    }
  }

  const handleRadioChange = index => {
    selectAddressIndex(index)(dispatch)
    setSelectedAdress(index)
  }

  const handlePaymentChange = method => {
    setSelectedPaymentMethod(method)
  }

  const placeOrder = () => {
    if (!loading) {
      setLoading(true)
      if (token) {
        APIFuncs.sendOrder(token, {
          address: user.address[user.currentAddressIndex],
          paymentMethod: 'COD',
          platform: 'website',
        }).then(RES => {
          console.log("order user", RES)

          if (!!RES) {
            refreshCart(token)(dispatch)
            const { amount, _id } = RES
            replace({
              pathname: '/order-success',
              query: { id: _id, amount: amount.total },
            })
            setLoading(false)
          } else {
            setLoading(false)
            alert('Something went wrong')
          }
          // push({ pathname, query: { step: 3 } })
          //alert('Order Place!')
        })
      } else {
        APIFuncs.sendOrderGuest({
          address: guestAddress,
          paymentMethod: 'COD',
          platform: 'website',
        }).then(RES => {
          console.log("guest", RES)
          if (!!RES) {
            refreshCart(token)(dispatch)
            const { amount, _id } = RES
            replace({
              pathname: '/order-success',
              query: { id: _id, amount: amount.total },
            })
            setLoading(false)
          } else {
            setLoading(false)
            alert('Something went wrong')
          }
          // push({ pathname, query: { step: 3 } })
          //alert('Order Place!')
        })
      }
    }
  }

  useEffect(() => {
    if (step == 3) {
      if (!!cart) {
        const { items } = cart
        if (!!items.length) {
          if (!!settings) {
            const { analytics } = settings
            if (analytics.fbPixels_status === 'enabled') {
              ReactPixel.trackCustom('InitiateCheckout', {
                content_category: 'checkout',
                currency: 'PKR',
                num_items: cart.qty,
                value: cart.total,
              })
            }
          }
        }
      }
    }
  }, [])
  return (
    <div>
      <div className="site_width_container cartSlider cart-is-open">
        {isEmpty(user) === false && (
          <div
            // style={{
            //   '-webkit-transform': 'translate(0)',
            //   '-ms-transform': 'translate(0)',
            //   transform: 'translate(0)',
            //   position: 'inherit !important',
            //   width: '100vw !important',
            //   padding: '15px 0 !important',
            //   maxHeight: 'calc(100vh - 108px)',
            //   minHeight: 'calc(100vh - 108px)',
            //   pointerEvents: 'visible',
            //   background: '#f0f0f0',
            //   boxShadow: '0 0 33px rgba(0,0,0,.4)',
            //   height: '100%',
            //   top: 0,
            //   right: 0,
            //   '-webkit-transition': 'transform .5s',
            //   transition: 'transform .5s',
            //   zIndex: '200',
            // }}
            className="clickyCheckoutCont">
            <ul id="step_indicator" className="ng-scope step_shipping">
              <li
                onClick={() => push('/cart')}
                className={`step_01 ng-scope ${
                  Number(stepSelected) === 2 || Number(stepSelected) === 1
                    ? 'active'
                    : Number(stepSelected) > 1
                    ? 'complete'
                    : ''
                }`}>
                <a>
                  <span
                    className={`ng-scope ${
                      Number(stepSelected) === 1
                        ? 'active'
                        : Number(stepSelected) > 1
                        ? 'complete'
                        : ''
                    }`}>
                    Cart
                  </span>
                </a>
              </li>
              <li
                onClick={() => {
                  if (
                    typeof user.currentAddressIndex === 'number' &&
                    user.currentAddressIndex > -1
                  )
                    setStepSelected(2)
                }}
                className={`step_02 ng-scope ${
                  Number(stepSelected) === 2 || Number(stepSelected) === 1
                    ? 'active'
                    : Number(stepSelected) > 2
                    ? 'complete'
                    : ''
                }`}>
                <a>
                  <span className="ng-scope">ADDRESS</span>
                </a>
              </li>
              <li
                onClick={() => {
                  if (user.address.length !== 0) {
                    if (
                      typeof user.currentAddressIndex === 'number' &&
                      user.currentAddressIndex > -1
                    )
                      setStepSelected(3)
                    else {
                      alert('Please Add Address!')
                    }
                  } else {
                    setAddAddress(true)
                  }
                }}
                className={`step_03 ng-scope ${
                  Number(stepSelected) === 3 ? 'complete' : ''
                }`}>
                <a>
                  <span className="ng-scope">REVIEW & PAY</span>
                </a>
              </li>
            </ul>
            <div
              style={{
                backgroundColor: '#f0f0f0',
              }}
              className={`${Number(stepSelected) === 2 ? '' : 'dontshow'}`}>
              <div className="clickyCheckoutContIn1">
                <div className="clickyCheckoutContIn2">
                  {user.address.map(
                    (
                      { _id, firstName, lastName, city, phone, address },
                      index
                    ) => {
                      return (
                        <div
                          key={_id}
                          style={{ paddingLeft: '1vw', marginTop: 0 }}
                          className="product-overview">
                          {index === selectedAdress ? (
                            <RadioButtonCheckedRounded
                              className={'addressRadio'}
                            />
                          ) : (
                            <RadioButtonUncheckedRounded
                              //  fontSize={'3vh'}
                              className={'addressRadio'}
                              onClick={() => handleRadioChange(index)}
                            />
                          )}
                          <ul style={{ marginLeft: '2vw' }}>
                            <li className="details-price">
                              <span
                                style={{
                                  fontWeight: '600',
                                  fontSize: '2.3vh',
                                }}>{`${firstName || ''} ${lastName ||
                                ''}`}</span>
                            </li>
                            <li className="details-price">
                              <span
                                style={{
                                  fontWeight: '600',
                                  fontSize: '1.7vh',
                                }}>
                                {phone}
                              </span>
                            </li>
                            <li>
                              <span
                                style={{
                                  fontWeight: '600',
                                  fontSize: '1.7vh',
                                }}>
                                {city}
                              </span>
                            </li>
                            <li className="details-price">
                              <span
                                style={{
                                  fontWeight: '600',
                                  fontSize: '1.7vh',
                                }}>
                                {address}
                              </span>
                            </li>
                          </ul>
                        </div>
                      )
                    }
                  )}
                  {!user.loggedIn && !!guestAddress && (
                    <div
                      style={{ paddingLeft: '1vw', marginTop: 0 }}
                      className="product-overview">
                      <RadioButtonCheckedRounded className={'addressRadio'} />
                      <ul style={{ marginLeft: '2vw' }}>
                        <li className="details-price">
                          <span
                            style={{
                              fontWeight: '600',
                              fontSize: '2.3vh',
                            }}>{`${guestAddress.firstName ||
                            ''} ${guestAddress.lastName || ''}`}</span>
                        </li>
                        <li className="details-price">
                          <span
                            style={{
                              fontWeight: '600',
                              fontSize: '1.7vh',
                            }}>
                            {guestAddress.phone}
                          </span>
                        </li>
                        <li>
                          <span
                            style={{
                              fontWeight: '600',
                              fontSize: '1.7vh',
                            }}>
                            {guestAddress.city}
                          </span>
                        </li>
                        <li className="details-price">
                          <span
                            style={{
                              fontWeight: '600',
                              fontSize: '1.7vh',
                            }}>
                            {guestAddress.address}
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                  <div
                    style={{
                      borderTop: '0.3vh solid #f2f2f2',
                      borderBottom: '0.3vh solid #f2f2f2',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'underline',
                      fontWeight: '600',
                      fontSize: 'small',
                      padding: '2vh 0',
                    }}
                    onClick={e => {
                      e.preventDefault()
                      setAddAddress(true)
                      setGuestAddress(null)
                    }}>
                    <AddCircleRounded
                      fontSize={'small'}
                      style={{ marginRight: '2vw' }}
                    />
                    <span>Add new address</span>
                  </div>
                </div>
              </div>
              <div className={'clickyDesktopBtn1Out'}>
                <Button
                  onClick={() => {
                    if (user.address.length !== 0)
                      typeof user.currentAddressIndex === 'number' &&
                      user.currentAddressIndex > -1
                        ? setStepSelected(3)
                        : setAddAddress(true)
                    else {
                      if (!!guestAddress) {
                        setStepSelected(3)
                      } else {
                        setAddAddress(true)
                      }
                    }
                  }}
                  // eslint-disable-next-line quotes
                  className={`uaForm__submit uaForm__submit--enabled clickyDesktopBtn1`}
                  style={{
                    textDecoration: 'none',
                    borderRadius: '0.5vh',
                    background:
                      typeof user.currentAddressIndex === 'number' &&
                      user.currentAddressIndex > -1
                        ? 'var(--omnisell-ButtonColor)'
                        : '#DADADA',
                  }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  // endIcon={
                  //   addressLoading ? (
                  //     <Loader
                  //       style={{
                  //         display: 'flex',
                  //         width: '100%',
                  //         height: '100%',
                  //         justifyContent: 'center',
                  //         alignItems: 'center',
                  //       }}
                  //       type="Oval"
                  //       color="#FFF"
                  //       height={20}
                  //       width={20}
                  //     />
                  //   ) : null
                  // }
                >
                  Continue
                </Button>
              </div>
            </div>
            <div
              style={{ paddingTop: 10, overflowY: 'scroll' }}
              className={`cart ${Number(stepSelected) === 3 ? '' : 'dontshow'}`}
              style={{ margin: 0, backgroundColor: '#fff' }}>
              <div style={{ backgroundColor: '#fff' }}>
                <div
                  className="product-overview"
                  style={{ alignItems: 'flex-start', backgroundColor: '#fff' }}>
                  {selectedPaymentMethod === 'cod' ? (
                    <RadioButtonCheckedRounded className={'addressRadio'} />
                  ) : (
                    <RadioButtonUncheckedRounded
                      //  fontSize={'3vh'}
                      className={'addressRadio'}
                      onClick={() => handlePaymentChange('cod')}
                    />
                  )}
                  <ul
                    style={{ position: 'relative', width: '100%' }}
                    className="product-overview-details checkout">
                    <li
                      style={{ marginBottom: 5 }}
                      className="details-checkout">
                      {'COD'}
                    </li>
                    <li className="details-price">
                      <span className="checkout-value-title">
                        Delivery charges :{' '}
                      </span>
                      <span className="price-value">Rs 150</span>
                    </li>
                    <img
                      style={{ position: 'absolute', top: 0, right: 0 }}
                      src={'/web-mobile/e5664491aba102b39cf6c60e4c58bcf9.png'}
                      height="45px"
                      width="45px"
                      alt=""
                    />
                  </ul>
                </div>
                {/* <div
                  className="product-overview"
                  style={{ alignItems: 'flex-start' }}>
                  {selectedPaymentMethod === 'easypaisa' ? (
                    <RadioButtonCheckedRounded className={'addressRadio'} />
                  ) : (
                    <RadioButtonUncheckedRounded
                      //  fontSize={'3vh'}
                      className={'addressRadio'}
                      onClick={() => handlePaymentChange('easypaisa')}
                    />
                  )}
                  <ul
                    style={{ position: 'relative', width: '100%' }}
                    className="product-overview-details checkout">
                    <li
                      style={{ marginBottom: 5 }}
                      className="details-checkout">
                      {'Easy Paisa'}
                    </li>
                    <li className="details-price">
                      <span className="checkout-value-title">
                        Delivery charges :{' '}
                      </span>
                      <span className="price-value">Rs 150</span>
                    </li>
                    <img
                      style={{ position: 'absolute', top: 0, right: 0 }}
                      src={'/web-mobile/5261e0e8c0c8ecb43a474374ff5d8929.png'}
                      height="45px"
                      width="45px"
                      alt=""
                    />
                  </ul>
                </div> */}
              </div>
              {/* <div
                className={'descFontsize'}
                style={{
                  borderTop: '0.5vh solid #f2f2f2',
                  borderBottom: '0.5vh solid #f2f2f2',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textDecoration: 'underline',
                  fontWeight: '600',
                  padding: '2vh 0',
                }}
                onClick={e => {
                  e.preventDefault()
                  setModalOn(true)
                }}>
                <AddCircleRounded
                  fontSize={'small'}
                  style={{ marginRight: '2vw' }}
                />
                <span>Add COUPON CODE</span>
              </div> */}
              <div
                style={{
                  borderBottom: '0.5vh solid #f2f2f2',
                }}>
                <div
                  className={'descFontsize'}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '3vh',
                    alignItems: 'center',
                    width: '100%',
                    margin: '2vh 0',
                  }}>
                  <span>Subtotal</span>
                  <span>{`Rs ${cart?.subtotal}`}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '3vh',
                    alignItems: 'center',
                    width: '100%',
                    margin: '2vh 0',
                  }}>
                  <span style={{ color: '#2560A9' }}>Shipping</span>
                  <span>{`Rs ${150}`}</span>
                </div>
                <hr />
                <div
                  className={'totalPrice'}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '3vh',
                    alignItems: 'center',
                    fontWeight: '600',
                    width: '100%',
                    margin: '1vh 0',
                  }}>
                  <span>Total</span>
                  <span>{`Rs ${cart.total}`}</span>
                </div>
              </div>
              <div
                style={{ borderTop: '0.5vh solid #f2f2f2', paddingBottom: 44 }}>
                <span
                  style={{
                    marginTop: '2vh',
                    display: 'block',
                    fontWeight: 600,
                    fontSize: 'medium',
                  }}>
                  Review your order
                </span>
                <hr />
                {cart.items.map(({ product, variant, qty: qtyX }, indx) => {
                  return (
                    <PostLink
                      key={'Review' + indx}
                      _id={product._id}
                      slug={product.slug}>
                      <div
                        className="product-overview"
                        style={{ backgroundColor: '#fff', marginBottom: 2 }}>
                        <div>
                          <a
                            className="product-overview-link"
                            href="/buy-puma-rapido-ii-tt-w707644a.html">
                            <img
                              className="product-overview-link-image"
                              src={product.img.small}
                            />
                          </a>
                        </div>
                        <ul style={{ marginLeft: '1vw', width: '70%' }}>
                          <li
                            className="details-brand"
                            style={{
                              fontSize: '1.7vh',
                              fontWeight: '600',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}>
                            {product.name}
                          </li>
                          <li className="details-price">
                            <span className="price-value">{`${variant.sku}`}</span>
                          </li>
                          <li
                            style={{
                              color: '#666',
                              fontSize: '12px',
                              marginBottom: '5px',
                            }}>
                            <span className="price-value">Size: </span>
                            <span className="price-value">{variant.size}</span>
                          </li>
                          <li
                            style={{
                              color: '#666',
                              fontSize: '12px',
                              marginBottom: '5px',
                            }}>
                            <span className="price-value">items: </span>
                            <span className="price-value">{qtyX}</span>
                          </li>
                          <li
                            className="details-actions"
                            style={{
                              width: '100%',
                              justifyContent: 'space-between',
                            }}>
                            <span
                              className="details-actions"
                              style={{ marginTop: 0 }}></span>
                            <span
                              style={{
                                fontSize: '14px',
                                height: '3.5vh',
                                color: '#111111',
                                fontWeight: '600',
                                '-webkit-transition': 'all .2s',
                                transition: 'all .2s',
                                float: 'right',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              {`Rs ${qtyX * variant.price}`}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </PostLink>
                  )
                })}
              </div>
              <div className="StickyBuyBtn">
                <button
                  onClick={placeOrder}
                  style={{
                    borderRadius: '0.5vh',
                  }}
                  className={'uaForm__submit uaForm__submit--enabled'}
                  type="submit">
                  BUY NOW
                  {loading === true && (
                    <Loader
                      style={{
                        marginLeft: 5,
                        display: 'flex',
                        width: 20,
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      type="Oval"
                      color="#FFF"
                      height={20}
                      width={20}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {modalOn && (
        <div className={`modal`}>
          <div className="model-shadow" />
          <div className="modal-content modal-fadeIn is-center">
            <div className="productContinueShopping">
              <FormControl variant="outlined" style={{ display: 'flex' }}>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  //value={''}
                  //onChange={handleChange('weight')}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  labelWidth={0}
                />
                <Button
                  style={{
                    width: '60%',
                    background: 'var(--omnisell-ButtonColor)',
                    color: '#fff',
                    margin: '1vh 20%',
                  }}
                  variant={'contained'}
                  onClick={() => {
                    setModalOn(false)
                  }}>
                  Applys
                </Button>
              </FormControl>
            </div>
          </div>
        </div>
      )}
      <Modal
        open={addAddress}
        onClose={() => {
          setModalOn(false)
        }}
        aria-labelledby="Add-Address-Modal"
        aria-describedby="Modal-For-Adding-Address">
        <div className={'addressModal'}>
          <div className={'addressModalHeader'}>
            <span
              style={{
                color: '#111',
                width: '10%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
              onClick={e => {
                e.preventDefault()
                setAddAddress(false)
                setGuestAddress(null)
              }}>
              <CloseIcon fontSize={'small'} />
            </span>
            <span
              style={{
                fontSize: '3vh',
                fontWeight: '800',
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
              }}>
              ADD NEW ADDRESS
            </span>
          </div>
          <form
            onSubmit={e => {
              e.preventDefault()
              setLoading(true)
              createAddress()
            }}
            className="uaForm addressModalForm"
            style={{ backgroundColor: '#f0f0f0' }}>
            <div
              className="addressModalFormInner"
              style={{
                backgroundColor: '#fff',
              }}>
              <div className={classes.textFieldContainer}>
                <TextField
                  id="standard-with-placeholder"
                  name="firstName"
                  type="text"
                  label="First name"
                  required
                  InputProps={{
                    classes: { input: classes.resize, root: classes.resize },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                  onChange={handleInputChange}
                  fullWidth
                />
              </div>
              <div className={classes.textFieldContainer}>
                <TextField
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  name="lastName"
                  type="text"
                  fullWidth
                  required
                  label="Last Name"
                  onChange={handleInputChange}
                  InputProps={{
                    classes: { input: classes.resize, root: classes.resize },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                />
              </div>
              <div className={classes.textFieldContainer}>
                <TextField
                  fullWidth
                  name="phone"
                  type="tel"
                  required
                  label="Phone"
                  onChange={handleInputChange}
                  InputProps={{
                    classes: { input: classes.resize, root: classes.resize },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                />
              </div>
              {!user.loggedIn && (
                <div className={classes.textFieldContainer}>
                  <TextField
                    fullWidth
                    name="email"
                    required
                    label="Email"
                    onChange={handleInputChange}
                    InputProps={{
                      classes: { input: classes.resize, root: classes.resize },
                    }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        focused: classes.labelFocused,
                      },
                    }}
                  />
                </div>
              )}
              <div className={classes.textFieldContainer}>
                <TextField
                  fullWidth
                  name="address"
                  required
                  label="Address"
                  onChange={handleInputChange}
                  InputProps={{
                    classes: { input: classes.resize, root: classes.resize },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                />
              </div>
              <div className={classes.textFieldContainer}>
                <TextField
                  name="city"
                  fullWidth
                  required
                  label="City"
                  onChange={handleInputChange}
                  InputProps={{
                    classes: { input: classes.resize, root: classes.resize },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      focused: classes.labelFocused,
                    },
                  }}
                />
              </div>
            </div>

            {/* <Button
              onClick={() => {
                createAddress()
              }}
              className={classes.Button}
              disabled={!validSignup}
              variant="contained"
              endIcon={
                signUpLoader ? (
                  <Loader
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    type="Oval"
                    color="#FFF"
                    height={20}
                    width={20}
                  />
                ) : null
              }
              color="primary">
              Sign Up
            </Button> */}

            <button
              className={`addressModalButton uaForm__submit ${
                validAddress ? 'uaForm__submit--enabled' : ''
              } ${loading ? 'uaForm__submit--submitting' : ''}`}
              disabled={!validAddress}
              type="submit">
              SAVE address
              {loading === true && (
                <Loader
                  style={{
                    marginLeft: 5,
                    display: 'flex',
                    width: 20,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  type="Oval"
                  color="#FFF"
                  height={20}
                  width={20}
                />
              )}
            </button>
          </form>
        </div>
      </Modal>
      <style jsx>
        {`
          .StickyBuyBtn {
            position: -webkit-sticky;
            position: sticky;
            bottom: 10px;
            display: flex;
            justify-content: center;
          }
          .modal-content {
            margin: 30px;
          }
          .descFontsize {
            font-size: small;
          }
          .totalPrice {
            font-size: medium;
          }
          .addressModalFormInner {
            height: 83vh;
          }
          .addressModalHeader {
            color: #111;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
          }
          .addressModal {
            height: 100vh;
            width: 100vw;
            background-color: #fff;
            position: relative;
            z-index: 99999999;
          }
          .clickyDesktopBtn1Out {
            position: -webkit-sticky;
            position: sticky;
            z-index: 99;
          }
          .uaForm__submit {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 42px;
            border: 0;
            outline: 0;
            font-weight: 700;
            text-transform: uppercase;
            background: var(--omnisell-ButtonColor);
            color: #fff;
            will-change: background-color;
            transition: background-color 0.3s ease-out;
          }
          .uaForm__submit--enabled {
            animation: scaler 0.3s ease-out;
          }
          .details-price,
          .details-size,
          .overview-cod_fees,
          .overview-shipping,
          .overview-subtotal,
          .overview-total {
            text-transform: uppercase;
            color: #666;
            font-size: 12px;
            margin-bottom: 5px;
          }
          .product-overview {
            margin-top: 0;
            padding: 10px;
          }
          .addressRadio {
            width: 8vw;
            height: 8vw;
          }
          .product-overview {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-bottom: 15px;
            border-bottom: 1px dotted #ebeded;
            margin-top: 15px;
            position: relative;
          }
          .product-overview:last-child {
            border: none;
          }
          .clickyCheckoutContIn1 {
            margin: 0;
            padding: 10px;
            line-height: 16px;
            background-color: #fff;
          }
          .clickyCheckoutContIn2 {
            margin: 30px 0;
            width: 100%;
            background-color: #fff;
          }
          .clickyCheckoutCont {
            -webkit-transform: translate(0);
            -ms-transform: translate(0);
            transform: translate(0);
            width: 100vw !important;
            pointer-events: visible;
            background: #f0f0f0;
            boxshadow: 0 0 33px rgba(0, 0, 0, 0.4);
            top: 0;
            right: 0;
            -webkit-transition: transform 0.5s;
            transition: transform 0.5s;
            z-index: 200;
          }
          .addressModalButton {
            width: 95%;
            height: 6vh;
            border-radius: 0.5vh;
          }
          @media (max-width: 768px) {
            .modal-content {
              margin: 30px;
            }
            .descFontsize {
              font-size: small;
            }
            .totalPrice {
              font-size: medium;
            }
            .addressModalButton {
              padding: 10px 2.5vw;
              bottom: 2vh;
              left: 2.5vw;
              z-index: 99;
              position: -webkit-sticky;
              position: sticky;
              margin: 2vh 2.5vw 0 2.5vw;
            }
            .addressModalFormInner {
              height: 83vh;
            }
            .addressModalForm {
              height: 93vh;
            }
            .addressModalHeader {
              height: 7vh;
              width: 95vw;
              margin: 0 2.5vw;
            }
            .addressModal {
              height: 100vh;
              width: 100vw;
              background-color: #fff;
            }
            .clickyDesktopBtn1Out {
              padding: 10px 2.5vw;
              bottom: 58px;
            }
            .addressRadio {
              width: 8vw;
              height: 8vw;
            }
            .clickyCheckoutContIn2 {
              overflow-y: scroll;
              max-height: calc(89.5vh - 138px);
              min-height: calc(89.5vh - 138px);
            }
            .clickyCheckoutContIn1 {
              margin: 0;
              max-height: calc(96vh - 178px);
              min-height: calc(96vh - 178px);
              padding: 10px;
              line-height: 16px;
            }
            .clickyCheckoutCont {
              padding: 15px 0 !important;
              max-height: calc(100vh - 108px);
              min-height: calc(100vh - 108px);
              height: 100%;
              top: 0;
              right: 0;
            }
          }
          @media (min-width: 769px) {
            .modal-content {
              margin: 30px 40vw;
            }
            .descFontsize {
              font-size: large;
            }
            .totalPrice {
              font-size: x-large;
            }
            #step_indicator li.active {
              border-bottom: solid 4px var(--omnisell-CartTextColor);
            }
            #step_indicator li {
              float: left;
              font-size: 10px;
              font-weight: 700;
              text-transform: uppercase;
              line-height: 26px;
              width: 33.333%;
              background-position: right -248px;
              padding-left: 5px;
              box-sizing: border-box;
              text-align: center;
            }
            .addressModalFormInner {
              height: 48vh;
            }
            .uaForm__submit {
              width: 70%;
            }
            .addressModalButton {
              padding: 10px 2.5vw;
              bottom: 2vh;
              left: 3%;
              z-index: 99;
              margin: 2vh 15% 0 15%;
            }
            .addressModalForm {
              height: 58vh;
              border-radius: 12px;
            }
            .addressModalHeader {
              height: 7vh;
              width: 45vw;
              margin: 0 2.5vw;
            }
            .addressModal {
              border-radius: 12px;
              margin: 17.5vh 25vw;
              height: 65vh;
              width: 50vw;
              background-color: #fff;
            }
            .clickyDesktopBtn1Out {
              padding: 10px 15vw;
              bottom: 10px;
            }
            .clickyDesktopBtn1 {
              height: 100% !important;
              width: 70vw !important;
            }
            .addressRadio {
              width: 8vh;
              height: 8vh;
            }
            .clickyCheckoutContIn2 {
              min-height: calc(89.5vh - 138px);
            }
            .clickyCheckoutContIn1 {
              margin: 0;
              min-height: calc(95vh - 402px);
              padding: 10px;
              line-height: 16px;
            }
            #step_indicator {
              cursor: pointer;
            }
            .clickyCheckoutCont {
              width: 64vw !important;
              margin: 50px 18vw;
              background-color: #fff;
              padding: 0 !important;
              min-height: calc(100vh - 108px);
              height: 100%;
              top: 0;
              right: 0;
            }
          }
          .cartSlider {
            z-index: -1;
          }
        `}
      </style>
    </div>
  )
}
export default checkout;
