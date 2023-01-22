/* eslint-disable no-trailing-spaces */
/* eslint-disable object-curly-spacing */
/* eslint-disable nonblock-statement-body-position */
// @ts-nocheck
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
import React, { useState, createRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
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
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles'
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
const useStyles = makeStyles((theme) => ({
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
  textFieldContainer: { width: '90vw', margin: '1vh 5vw 0 5vw' },
}))
const checkout = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [modalOn, setModalOn] = useState(false)
  const [addAddress, setAddAddress] = useState(false)
  const [input, handleInputChange] = useInput()
  const [loading, setLoading] = useState(false)
  const [addressLoading, setAddressLoading] = useState(false)
  const { cart, wishlist, token, user } = useSelector(({ USER }) => ({
    cart: USER.cart,
    wishlist: USER.wishlist,
    token: USER.token,
    user: USER,
  }))

  const [selectedAdress, setSelectedAdress] = useState(user.currentAddressIndex)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    user.paymentMethod || 'cod'
  )

  const { query, pathname, push, replace } = useRouter()
  const { step } = query
  const stepSelected = step !== '1' ? step || 2 : 2

  if (!cart.items.length && Number(step) !== 3) push('/cart')

  if (typeof user.currentAddressIndex !== 'number' && Number(step) > 1)
    push({ pathname, query: { step: 1 } })
  else if (user.currentAddressIndex === -1 && Number(step) > 1)
    push({ pathname, query: { step: 1 } })
  const setStepSelected = (num) => {
    push({ pathname, query: { step: num } })
  }

  const validAddress =
    input.phone &&
    input.firstName &&
    input.lastName &&
    input.city &&
    input.address
  const createAddress = () => {
    const { phone, firstName, lastName, city, address } = input
    validAddress &&
      addNewAddress(token, {
        firstName,
        lastName,
        city,
        phone,
        address,
      })(dispatch).then(() => {
        setAddAddress(false)
      })
  }

  const handleRadioChange = (index) => {
    selectAddressIndex(index)(dispatch)
    setSelectedAdress(index)
  }

  const handlePaymentChange = (method) => {
    setSelectedPaymentMethod(method)
  }

  const placeOrder = () => {
    setLoading(true)
    APIFuncs.sendOrder(token, {
      address: user.address[user.currentAddressIndex],
      paymentMethod: 'COD',
      platform: 'website',
    }).then((RES) => {
      setLoading(false)
      if (RES) {
        refreshCart(token)(dispatch)
        const { amount, _id } = RES
        replace({
          pathname: '/order-success',
          query: { id: _id, amount: amount.total },
        })
      }
      // push({ pathname, query: { step: 3 } })
      //alert('Order Place!')
    })
  }

  return (
    <div>
      <div className="site_width_container cartSlider cart-is-open">
        {isEmpty(user) === false && (
          <div
            style={{
              '-webkit-transform': 'translate(0)',
              '-ms-transform': 'translate(0)',
              transform: 'translate(0)',
              position: 'inherit !important',
              width: '100vw !important',
              padding: '15px 0 !important',
              maxHeight: 'calc(100vh - 108px)',
              minHeight: 'calc(100vh - 108px)',
              pointerEvents: 'visible',
              background: '#f0f0f0',
              boxShadow: '0 0 33px rgba(0,0,0,.4)',
              height: '100%',
              top: 0,
              right: 0,

              '-webkit-transition': 'transform .5s',
              transition: 'transform .5s',
              zIndex: '200',
            }}
            // className="cartSlider-wrapper"
          >
            <ul id="step_indicator" className="ng-scope step_shipping">
              <li
                // onClick={() => setStepSelected(1)}
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
                    SIGN IN
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
                onClick={() => setStepSelected(3)}
                className={`step_03 ng-scope ${
                  Number(stepSelected) === 3 ? 'complete' : ''
                }`}>
                <a>
                  <span className="ng-scope">REVIEW & PAY</span>
                </a>
              </li>
            </ul>
            {/* {Number(stepSelected) === 2 && (
              <img
                style={{ width: '100vw', height: '6.5vh' }}
                src={'/images/bar.jpeg'}
              />
            )} */}
            <div
              style={{
                backgroundColor: '#f0f0f0',
              }}
              className={`${Number(stepSelected) === 2 ? '' : 'dontshow'}`}>
              <div
                style={{
                  margin: 0,
                  maxHeight: 'calc(96vh - 178px)',
                  minHeight: 'calc(96vh - 178px)',
                  padding: '10px',
                  lineHeight: '16px',
                  backgroundColor: '#fff',
                }}>
                <div
                  style={{
                    overflowY: 'scroll',
                    margin: 0,
                    width: '100%',
                    maxHeight: 'calc(89.5vh - 138px)',
                    minHeight: 'calc(89.5vh - 1380px)',
                    backgroundColor: '#fff',
                  }}>
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
                              style={{
                                width: '8vw',
                                height: '8vw',
                              }}
                            />
                          ) : (
                            <RadioButtonUncheckedRounded
                              //  fontSize={'3vh'}
                              style={{
                                width: '8vw',
                                height: '8vw',
                              }}
                              onClick={() => handleRadioChange(index)}
                            />
                          )}
                          <ul style={{ marginLeft: '2vw' }}>
                            <li className="details-price">
                              <span
                                style={{
                                  fontWeight: '600',
                                  fontSize: '2.3vh',
                                }}>{`${firstName || ''} ${
                                lastName || ''
                              }`}</span>
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
                    onClick={(e) => {
                      e.preventDefault()
                      setAddAddress(true)
                    }}>
                    <AddCircleRounded
                      fontSize={'small'}
                      style={{ marginRight: '2vw' }}
                    />
                    <span>Add new address</span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: '10px 2.5vw',
                  position: 'sticky',
                  bottom: 58,
                  zIndex: 99,
                }}>
                <Button
                  onClick={() => {
                    typeof user.currentAddressIndex === 'number' &&
                    user.currentAddressIndex > -1
                      ? setStepSelected(3)
                      : setAddAddress(true)
                  }}
                  className={`uaForm__submit uaForm__submit--enabled`}
                  style={{
                    textDecoration: 'underline',
                    borderRadius: '0.5vh',
                    backgroundColor:
                      typeof user.currentAddressIndex === 'number' &&
                      user.currentAddressIndex > -1
                        ? '#50c0AB'
                        : '#DADADA',
                  }}
                  variant="contained"
                  color="primary"
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
                {/* <button
                  onClick={e => {
                    e.preventDefault()

                    typeof user.currentAddressIndex === 'number' &&
                    user.currentAddressIndex > -1
                      ? setStepSelected(3)
                      : setAddAddress(true)
                  }}
                  style={{
                    textDecoration: 'underline',
                    borderRadius: '0.5vh',
                    backgroundColor:
                      typeof user.currentAddressIndex === 'number' &&
                      user.currentAddressIndex > -1
                        ? '#50c0AB'
                        : '#DADADA',
                  }}
                  className={`uaForm__submit uaForm__submit--enabled`}
                  type="button">
                  Continue
                </button> */}
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
                    <RadioButtonCheckedRounded
                      style={{
                        width: '8vw',
                        height: '8vw',
                      }}
                    />
                  ) : (
                    <RadioButtonUncheckedRounded
                      //  fontSize={'3vh'}
                      style={{
                        width: '8vw',
                        height: '8vw',
                      }}
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
                    <RadioButtonCheckedRounded
                      style={{
                        width: '8vw',
                        height: '8vw',
                      }}
                    />
                  ) : (
                    <RadioButtonUncheckedRounded
                      //  fontSize={'3vh'}
                      style={{
                        width: '8vw',
                        height: '8vw',
                      }}
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
                style={{
                  borderTop: '0.5vh solid #f2f2f2',
                  borderBottom: '0.5vh solid #f2f2f2',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textDecoration: 'underline',
                  fontWeight: '600',
                  fontSize: 'small',
                  padding: '2vh 0',
                }}
                onClick={(e) => {
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
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '3vh',
                    alignItems: 'center',
                    fontSize: 'small',
                    width: '100%',
                    margin: '2vh 0',
                  }}>
                  <span>Subtotal</span>
                  <span>{`Rs ${cart.subtotal}`}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '3vh',
                    alignItems: 'center',
                    fontSize: 'small',
                    width: '100%',
                    margin: '2vh 0',
                  }}>
                  <span style={{ color: '#51c0a9' }}>Shipping</span>
                  <span>{`Rs ${150}`}</span>
                </div>
                <hr />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '3vh',
                    alignItems: 'center',
                    fontWeight: '600',
                    fontSize: 'medium',
                    width: '100%',
                    margin: '1vh 0',
                  }}>
                  <span>Total</span>
                  <span>{`Rs ${cart.total}`}</span>
                </div>
              </div>
              <div style={{ borderTop: '0.5vh solid #f2f2f2',paddingBottom:44 }}>
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

                  {
                    /* return (
                    <div
                      key={'ITEM' + indx}
                      style={{ height: '20vh', width: '100%',display }}>
                      <div key={'ITEM' + indx}></div>
                      <div key={'ITEM' + indx}></div>
                    </div>
                  ) */
                  }
                })}

              </div>
              <div
                style={{
                  position: 'sticky',
                  bottom: 60,
                }}>
                <button
                  onClick={placeOrder}
                  style={{
                    borderRadius: '0.5vh',
                  }}
                  className={'uaForm__submit uaForm__submit--enabled'}
                  type="submit">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`modal ${modalOn ? '' : 'is-hidden'}`}>
        <div className="model-shadow" />
        <div
          className="modal-content modal-fadeIn is-center"
          style={{ margin: '30px' }}>
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
                  backgroundColor: '#51c0a9',
                  color: '#fff',
                  margin: '1vh 20%',
                }}
                variant={'contained'}
                onClick={() => {
                  setModalOn(false)
                }}>
                Apply
              </Button>
            </FormControl>
          </div>
        </div>
      </div>
      <Modal
        open={addAddress}
        onClose={() => {
          setModalOn(false)
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div
          style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#fff',
          }}>
          <div
            style={{
              color: '#111',
              display: 'flex',
              alignItems: 'center',
              height: '7vh',
              borderBottom: '1px solid #ccc',
              width: '95vw',
              margin: '0 2.5vw',
            }}>
            <span
              style={{
                color: '#111',
                width: '10%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
              onClick={(e) => {
                e.preventDefault()
                setAddAddress(false)
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
            className="uaForm"
            style={{ height: '93vh', backgroundColor: '#f0f0f0' }}>
            <div
              style={{
                height: '83vh',
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
              onClick={(e) => {
                e.preventDefault()
                setLoading(true)
                createAddress()
              }}
              style={{
                width: '95%',
                height: '6vh',
                borderRadius: '0.5vh',
                padding: '10px 2.5vw',
                position: 'sticky',
                bottom: '2vh',
                left: '2.5vw',
                zIndex: 99,
                margin: '2vh 2.5vw 0 2.5vw',
              }}
              className={`uaForm__submit ${
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
    </div>
  )
}

export default checkout;
