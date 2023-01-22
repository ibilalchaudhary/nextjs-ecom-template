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
import { isEmpty, isEqual } from 'lodash'

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
const myaddress = props => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [addAddress, setAddAddress] = useState(false)
  const [input, handleInputChange] = useInput()
  const [loading, setLoading] = useState(false)
  const { cart, wishlist, token, user } = useSelector(({ USER }) => ({
    token: USER.token,
    user: USER,
  }))
  const [selectedAdress, setSelectedAdress] = useState(user.currentAddressIndex)
  const { push, replace } = useRouter()
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
      setLoading(false)
    })
  }

  const deleteAddress = async (id) => {
    APIFuncs.deleteMyAddress(
      token,
      id,
    )
      .then(response => {
        console.log('success', response)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const handleRadioChange = index => {
    selectAddressIndex(index)(dispatch)
    setSelectedAdress(index)
  }

  console.log(user.address)
  return loading ? (
    <div id='content'>
      <div className='loading is-double is-center' />
    </div>
  ) : (
    <div
      // style={{ height: 'calc(100vh - 50px)' }}
      className='site_width_container'>
      {user && (
        <div className='page-wrapper search-view'>
          <div className='DB-address'>
            <div className='DB-addressIn1'>
              <div
                className='DB-addressIn2'
                // style={{
                //   overflowY: 'scroll',
                //   margin: 0,
                //   width: '100%',
                //   maxHeight: '100%',
                //   minHeight: '100%',
                //   backgroundColor: '#fff',
                // }}
              >
                {user.address.map(
                  (
                    { _id, firstName, lastName, city, phone, address },
                    index,
                  ) => {
                    //console.log(index === selectedAdress)
                    return (
                      <div
                        key={_id}
                        style={{ paddingLeft: '1vw', marginTop: 0 }}
                        className='product-overview'>
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
                        <ul style={{
                          marginLeft: '2vw',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}>
                          <div style={{ width: '80%' }}>
                            <li className='details-price'>
                            <span
                              style={{
                                fontWeight: '600',
                                fontSize: '2.3vh',
                              }}>{`${firstName || ''} ${lastName || ''}`}</span>
                            </li>
                            <li className='details-price'>
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
                            <li className='details-price'>
                            <span
                              style={{
                                fontWeight: '600',
                                fontSize: '1.7vh',
                              }}>
                              {address}
                            </span>
                            </li>
                          </div>
                          <div style={{ width: '20%',display:'flex',justifyContent:'flex-end' }}>
                           {/*<button onClick={()=>{*/}
                           {/*  deleteAddress(_id).then()*/}
                           {/*}} style={{background:'transparent', border:'none'}}>*/}
                           {/*  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"*/}
                           {/*       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                           {/*       strokeLinejoin="round" className="feather feather-trash-2">*/}
                           {/*    <polyline points="3 6 5 6 21 6"></polyline>*/}
                           {/*    <path*/}
                           {/*      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>*/}
                           {/*    <line x1="10" y1="11" x2="10" y2="17"></line>*/}
                           {/*    <line x1="14" y1="11" x2="14" y2="17"></line>*/}
                           {/*  </svg>*/}
                           {/*</button>*/}
                          </div>
                        </ul>
                      </div>
                    )
                  },
                )}
                <div
                  style={{
                    borderTop: '0.3vh solid #f2f2f2',
                    borderBottom: '0.3vh solid #f2f2f2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textDecoration: 'none',
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
        aria-labelledby='Add-Address-Modal'
        aria-describedby='Modal-For-Adding-Address'>
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
            className='uaForm addressModalForm'
            style={{ backgroundColor: '#f0f0f0' }}>
            <div
              className='addressModalFormInner'
              style={{
                backgroundColor: '#fff',
              }}>
              <div className={classes.textFieldContainer}>
                <TextField
                  id='standard-with-placeholder'
                  name='firstName'
                  type='text'
                  label='First name'
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
                  name='lastName'
                  type='text'
                  fullWidth
                  required
                  label='Last Name'
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
                  name='phone'
                  type='tel'
                  required
                  label='Phone'
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
                  name='address'
                  required
                  label='Address'
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
                  name='city'
                  fullWidth
                  required
                  label='City'
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
              type='submit'>
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
                  type='Oval'
                  color='#FFF'
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
            margin: 0;
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
            .DB-addressIn1 {
              margin: 0;
              max-height: calc(100vh - 60px);
              min-height: calc(100vh - 60px);
              padding: 10px;
              line-height: 16px;
              background-color: #fff;
            }
            .DB-addressIn {
              overflow-y: scroll;
              margin: 0;
              width: 100%;
              max-height: 100%;
              min-height: 100%;
              background-color: #fff;
            }
            .site_width_container {
              height: calc(100vh - 50px);
            }
            .DB-address {
              width: 95vw;
              margin-top: 5px;
            }
            .modal-content {
              margin: 30px;
            }
            .descFontsize {
              font-size: small;
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
          }
          @media (min-width: 769px) {
            .DB-addressIn {
              margin: 0;
              width: 100%;

              background-color: #fff;
            }
            .DB-addressIn1 {
              margin: 0;

              padding: 10px;
              line-height: 16px;
              background-color: #fff;
            }
            .site_width_container {
              height: calc(100vh - 50px);
            }
            .DB-address {
              width: 66vw;
              margin: 5px 17vw 0 17vw;
            }
            .modal-content {
              margin: 30px 40vw;
            }
            .descFontsize {
              font-size: large;
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
          }
        `}
      </style>
    </div>
  )
}

export default myaddress
