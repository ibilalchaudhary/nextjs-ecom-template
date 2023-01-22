// @ts-nocheck
import React, { useState, useEffect, createRef } from 'react'
import { APIFuncs } from '@utilts/APIs'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import {
  selectAddressIndex,
  addAddress as addNewAddress,
  refreshCart,
} from '@redux/action'
import useInput from '@components/useInput'
import Loader from 'react-loader-spinner'
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
import { ExtractDateAndTime } from '@utilts/utilties'
import { isEmpty } from 'lodash'
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
  textFieldContainer: { width: '90vw', margin: '1vh 5vw 0 5vw' },
}))
const myaddress = props => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [modalOn, setModalOn] = useState(false)
  const [addAddress, setAddAddress] = useState(false)
  const [input, handleInputChange] = useInput()
  const [loading, setLoading] = useState(false)
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

  // console.log('selectedPaymentMethod', selectedPaymentMethod)
  // console.log('cart', cart)
  // console.log('wishlist', wishlist)
  // console.log('token', token)
  // console.log('user', user)
  const { query, pathname, push, replace } = useRouter()
  const { step } = query
  const stepSelected = step !== '1' ? step || 2 : 2

  if (!cart?.items?.length && Number(step) !== 3) push('/cart')

  if (typeof user.currentAddressIndex !== 'number' && Number(step) > 1)
    push({ pathname, query: { step: 1 } })
  else if (user.currentAddressIndex === -1 && Number(step) > 1)
    push({ pathname, query: { step: 1 } })
  const setStepSelected = num => {
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

  const handleRadioChange = index => {
    selectAddressIndex(index)(dispatch)
    setSelectedAdress(index)
  }

  const handlePaymentChange = method => {
    setSelectedPaymentMethod(method)
  }

  const placeOrder = () => {
    setLoading(true)
    APIFuncs.sendOrder(token, {
      address: user.address[user.currentAddressIndex],
      paymentMethod: 'COD',
      platform: 'website',
    }).then(RES => {
      // console.log('Order', RES)
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

  return loading ? (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  ) : (
    <div style={{ height: 'calc(100vh - 50px)'}} className="site_width_container">
      {user && (
        <div className="page-wrapper search-view">
          <div style={{ width: '95vw', marginTop:5 }} className="DB-address">
            <div
              style={{
                margin: 0,
                maxHeight: 'calc(100vh - 60px)',
                minHeight: 'calc(100vh - 60px)',
                padding: '10px',
                lineHeight: '16px',
                backgroundColor: '#fff',
              }}>
              <div
                style={{
                  overflowY: 'scroll',
                  margin: 0,
                  width: '100%',
                  maxHeight: '100%',
                  minHeight: '100%',
                  backgroundColor: '#fff',
                }}>
                {user.address.map(
                  (
                    { _id, firstName, lastName, city, phone, address },
                    index
                  ) => {
                    //console.log(index === selectedAdress)
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
                              }}>{`${firstName || ''} ${lastName || ''}`}</span>
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
                  onClick={e => {
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
          </div>
        </div>
      )}
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
              onClick={e => {
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
            <button
              onClick={e => {
                e.preventDefault()
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

export default myaddress;
