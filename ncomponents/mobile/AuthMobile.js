/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-fragments */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React, { useState, Fragment } from 'react'
import { APIFuncs } from '@utilts/APIs'
import { isEmpty } from 'lodash'
import { EmailValidator } from '@utilts/utilties'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithEmail, signUpWithEmail, setAuthModal } from '@redux/action'
import MuiAlert from '@material-ui/lab/Alert'
import useInput from '@components/useInput'
import Router, { useRouter } from 'next/router'
import {
  Paper,
  TextField,
  Tabs,
  Tab,
  Typography,
  Box,
  Button,
  InputLabel,
  FormHelperText,
  Modal,
  Snackbar,
} from '@material-ui/core'
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles'
import Loader from 'react-loader-spinner'
import { Close } from '@material-ui/icons'

// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import CONSTANT from '@config/index'

const outerTheme = createTheme({
  palette: {
    primary: { main: '#da1c5f' },
    secondary: { main: '#FFF' },
  },
})
const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '93vw',
    backgroundColor: '#fff',
    borderRadius: 12,
    '-webkit-filter': 'blur(0)',
    '-moz-filter': 'blur(0)',
    '-o-filter': 'blur(0)',
    '-ms-filter': 'blur(0)',
    filter: 'blur(0)',
  },
  ModelBlur: {
    '-webkit-filter': 'blur(1px)',
    '-moz-filter': 'blur(1px)',
    '-o-filter': 'blur(1px)',
    '-ms-filter': 'blur(1px)',
    filter: 'blur(1px)',
  },
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
  Button: {
    margin: '0 auto',
    color: '#fff',
    width: '100%',
    height: '48px',
    borderRadius: '6px',
    cursor: 'pointer',
    background: 'var(--omnisell-ButtonColor)',
    '&:disabled': {
      opacity: '0.5',
    },
    '&:hover': {
      opacity: '0.5',
      background: 'var(--omnisell-ButtonColor)',
    },
  },
  resize: {
    fontSize: '12px',
  },
}))

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}
const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
const AuthMobile = () => {
  const dispatch = useDispatch()
  const [input, handleInputChange] = useInput()
  const [passwordModal, setPasswordModal] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('success')
  const [value, setValue] = useState(0)
  const [signInLoader, setSignInLoader] = useState(false)
  const [signUpLoader, setSignUpLoader] = useState(false)
  const [fPModal, setFPModal] = useState(false)
  const [forgetPasswordLoader, setForgetPasswordLoader] = useState(false)
  const [snackBarhandle, setSnackBarhandle] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const { push } = useRouter()
  const [signUpError, setSignUpError] = useState(false)
  const {
    email,
    password,
    firstName,
    lastName,
    gender,
    newPassword,
    oldPassword,
    lemail,
    lpassword,
    femail,
  } = input
  const validReset = EmailValidator(email)
  const validFemail = EmailValidator(femail)
  const validLogin = EmailValidator(lemail) && !isEmpty(lpassword)
  console.log('Valid', validLogin)
  const validSignup =
    EmailValidator(email) &&
    !isEmpty(password) &&
    !isEmpty(firstName) &&
    !isEmpty(lastName)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const authModal = useSelector(({ TEMPAPPSTATE: { authModal } }) => authModal)

  // const validChangePassword = !isEmpty(oldPassword) && !isEmpty(newPassword)
  // const changePassword = () => {
  //   const { oldPassword, newPassword } = input

  //   APIFuncs.changePassword(
  //     {
  //       oldPassword,
  //       newPassword,
  //     },
  //     token
  //   ).then(Res => {
  //     let messageX = null

  //     if (!isEmpty(Res)) {
  //       messageX = Res.message
  //     }
  //     if (messageX === 'Password changed successfully') {
  //       setMessage(messageX)
  //       setMessageType('success')
  //     } else {
  //       setMessage('The information you entered is incorrect.')
  //       setMessageType('errors')
  //     }
  //   })
  // }
  const classes = useStyles()
  const modalCloser = () => {
    setAuthModal(false)(dispatch)
  }
  return (
    <Modal
      // className={classes.ModelBlur}
      aria-labelledby="Account"
      aria-describedby="Account"
      open={authModal}
      onClose={modalCloser}>
      <Fragment>
        <div className={'paper'}>
          <ThemeProvider theme={outerTheme}>
            <Close
              onClick={() => {
                fPModal ? setFPModal(false) : modalCloser()
              }}
              fontSize="large"
              color="secondary"
              style={{
                position: 'absolute',
                top: `-40px`,
                right: 0,
              }}
            />
            {fPModal ? (
              <Fragment>
                <Paper
                  square
                  elevation={1}
                  style={{
                    borderRadius: 12,
                    padding: 24,
                  }}>
                  <div style={{ width: '100%' }}>
                    <InputLabel className={classes.topInputText}>
                      Email
                    </InputLabel>
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        classes: {
                          input: classes.resize,
                        },
                      }}
                      name="femail"
                      type="email"
                      placeholder="Enter your email address"
                      onChange={handleInputChange}
                      fullWidth
                      value={femail}
                    />
                    <FormHelperText> </FormHelperText>
                    <div style={{ textAlign: 'center' }}>
                      <Button
                        onClick={() => {
                          setForgetPasswordLoader(true)
                          APIFuncs.forgotPasswordForEmail(femail).then(Res => {
                            if (Res) {
                              setForgetPasswordLoader(false)
                              setFPModal(false)
                              handleInputChange('wipe')
                              setSnackBarhandle(true)
                            }
                          })
                        }}
                        disabled={!validFemail}
                        className={classes.Button}
                        variant="contained"
                        color="primary"
                        endIcon={
                          forgetPasswordLoader ? (
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
                              height={'20'}
                              width={'20'}
                            />
                          ) : null
                        }>
                        Send
                      </Button>
                    </div>
                  </div>
                </Paper>
              </Fragment>
            ) : (
              <Fragment>
                <Paper
                  square
                  elevation={1}
                  style={{
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}>
                  <Tabs
                    textColor="primary"
                    indicatorColor="primary"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs">
                    <Tab
                      className={classes.tabText}
                      label="Sign In"
                      {...a11yProps(0)}
                    />
                    <Tab
                      className={classes.tabText}
                      label="Sign Up"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Paper>
                <section id="uaSocialAuth" className="userAuth__contentWrapper">
                  <div className="userAuth__socialBtns">
                    <a
                      href="https://api.brandcity.com.pk/api/auth/facebook"
                      onClick={e => {
                        // e.preventDefault()
                        localStorage.setItem(
                          'previousURL',
                          location.href.replace(
                            'https://www.brandcity.com.pk',
                            ''
                          )
                        )
                        // push('https://api.brandcity.com.pk/api/auth/facebook')
                      }}
                      className="userAuth__btn userAuth__btn--fb">
                      <i className="userAuth__icon userAuth__icon--fb"></i>
                      Facebook
                    </a>
                  </div>
                </section>
                <TabPanel value={value} index={0}>
                  <InputLabel className={classes.topInputText}>
                    Email
                  </InputLabel>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    name="lemail"
                    type="email"
                    placeholder="Enter your email address"
                    onChange={handleInputChange}
                    fullWidth
                    value={lemail}
                  />
                  {/* <FormHelperText style={{ color: 'red' }}> </FormHelperText> */}
                  <InputLabel className={classes.inputText}>
                    Password
                  </InputLabel>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    name="lpassword"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleInputChange}
                    fullWidth
                    value={lpassword}
                  />
                  <div
                    style={{
                      color: 'red',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    {loginError ? loginError : ' '}
                  </div>
                  <div
                    onClick={() => {
                      setFPModal(true)
                    }}
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
                      fontWeight: '400',
                      lineHeight: '1',
                      letterSpacing: '0.00938em',
                      marginTop: '20px',
                      margin: '20px 0 30px 0',
                      cursor: 'pointer',
                    }}>
                    Forgot your password?
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => {
                        setSignInLoader(true)
                        setLoginError('')
                        loginWithEmail({ email: lemail, password: lpassword })(
                          dispatch
                        ).then(result => {
                          result
                            ? setLoginError(result)
                            : (setLoginError(''), handleInputChange('wipe'))
                          setSignInLoader(false)
                        })
                      }}
                      disabled={!validLogin}
                      className={classes.Button}
                      variant="contained"
                      color="primary"
                      endIcon={
                        signInLoader ? (
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
                      }>
                      Sign In
                    </Button>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {/* <FormControl style={{width:'100%'}} error>
                  <InputLabel
                    shrink
                    className={classes.topInputText}
                    htmlFor="component-Email">
                    Email
                  </InputLabel>
                  <Input
                    className={classes.resize}
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    id="component-Email"
                    onChange={handleInputChange}
                    fullWidth
                    value={email}
                    aria-describedby="component-Email"
                  />
                  <FormHelperText>Error</FormHelperText> */}
                  <InputLabel className={classes.topInputText}>
                    Email
                  </InputLabel>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    onChange={handleInputChange}
                    fullWidth
                    value={email}
                  />
                  {/* <FormHelperText style={{ color: 'red' }}> </FormHelperText> */}
                  {/* </FormControl> */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <div style={{ width: '49%' }}>
                      <InputLabel className={classes.inputText}>
                        First name
                      </InputLabel>
                      <TextField
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          classes: {
                            input: classes.resize,
                          },
                        }}
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        onChange={handleInputChange}
                        fullWidth
                        value={firstName}
                      />
                      {/* <FormHelperText style={{ color: 'red' }}>
                        {' '}
                      </FormHelperText> */}
                    </div>
                    <div style={{ width: '49%' }}>
                      <InputLabel className={classes.inputText}>
                        Last name
                      </InputLabel>
                      <TextField
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          classes: {
                            input: classes.resize,
                          },
                        }}
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        onChange={handleInputChange}
                        fullWidth
                        value={lastName}
                      />
                      {/* <FormHelperText style={{ color: 'red' }}>
                        {' '}
                      </FormHelperText> */}
                    </div>
                  </div>
                  <InputLabel className={classes.inputText}>
                    Password
                  </InputLabel>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleInputChange}
                    fullWidth
                    value={password}
                  />
                  <div
                    style={{
                      color: 'red',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    {loginError ? loginError : ' '}
                  </div>
                  <p style={{ fontSize: '0.75rem', margin: '20px 0 10px 0' }}>
                    By joining you agree with our
                    <a target="_blank" href="">
                      {' Terms '}
                    </a>
                    {'and '}
                    <a target="_blank" href="">
                      Privacy Policy
                    </a>
                  </p>
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => {
                        setSignUpLoader(true)
                        setSignUpError('')
                        signUpWithEmail({
                          email,
                          password,
                          firstName,
                          lastName,
                        })(dispatch).then(result => {
                          result
                            ? setSignUpError(result)
                            : (setSignUpError(''), handleInputChange('wipe'))

                          setSignUpLoader(false)
                        })
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
                            height={'20'}
                            width={'20'}
                          />
                        ) : null
                      }
                      color="primary">
                      Sign Up
                    </Button>
                  </div>
                </TabPanel>
              </Fragment>
            )}
          </ThemeProvider>
        </div>
        <Snackbar
          open={snackBarhandle}
          autoHideDuration={3000}
          onClose={() => {
            setSnackBarhandle(false)
          }}>
          <Alert
            onClose={() => {
              setSnackBarhandle(false)
            }}
            severity="success">
            Email sent!
          </Alert>
        </Snackbar>
        <style jsx>{`
          .userAuth__icon--fb {
            background: url(/common/fb.svg) no-repeat;
            height: 24px;
            width: 24px;
          }
          .userAuth__icon {
            display: inline-block;
            margin-right: 10px;
          }
          .userAuth__socialBtns {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .userAuth__contentWrapper {
            padding: 15px;
          }
          .userAuth__btn {
            padding: 0;
            border: 0;
            width: 100%;
            height: 47px;
            font-size: 14px;
            background: rgba(51, 51, 51, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            outline: none;
            border-radius: 4px;
            color: #333;
          }
          @media (min-width: 769px) {
            .userAuth__btn {
              width: 25vh;
            }
            .paper {
              position: absolute;
              width: 56.25vh;
              background-color: #fff;
              border-radius: 12px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          @media (max-width: 768px) {
            .userAuth__btn {
              width: 45vw;
            }
            .paper {
              position: absolute;
              width: 93vw;
              background-color: #fff;
              border-radius: 12px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        `}</style>
      </Fragment>
    </Modal>
  )
}

export default AuthMobile;
