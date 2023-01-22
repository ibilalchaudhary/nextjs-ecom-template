// @ts-nocheck
import React, { useState, useEffect, createRef } from 'react'
import { useRouter } from 'next/router'
import { APIFuncs } from '@utilts/APIs'
import { isEmpty } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from '@redux/action'
import useInput from '@components/useInput'

const index = props => {
  const dispatch = useDispatch()
  const scrollRef = createRef()
  const [input, handleInputChange] = useInput()
  const [orders, setOrders] = useState([])
  const [passwordModal, setPasswordModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('success')
  const [value, setValue] = useState(0)

  const { newPassword, oldPassword } = input

  // console.log('input', input)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const { token, user } = useSelector(({ USER }) => ({
    token: USER.token,
    user: USER,
  }))

  // console.log('passwordModal', passwordModal)
  const { push, query, pathname } = useRouter()

  useEffect(() => {
    APIFuncs.getMyOrders(token)
      .then(res => {
        setLoading(false)
        if (typeof res[0] === 'object') {
          setOrders(res)
        }
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
      })
  }, [setOrders])

  const validChangePassword = !isEmpty(oldPassword) && !isEmpty(newPassword)

  const changePassword = () => {
    const { oldPassword, newPassword } = input
    APIFuncs.changePassword(
      {
        oldPassword,
        newPassword,
      },
      token
    ).then(Res => {
      // console.log('Res', Res)
      let messageX = null

      if (!isEmpty(Res)) {
        messageX = Res.message
      }
      if (messageX === 'Password changed successfully') {
        setMessage(messageX)
        setMessageType('success')
      } else {
        setMessage('The information you entered is incorrect.')
        setMessageType('errors')
      }
    })
  }

  return loading ? (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  ) : (
    <div style={{ paddingBottom: 80 }} className="site_width_container">
      {user && (
        <div className="page-wrapper search-view">
          <div style={{marginTop:40}} className="accountCard" id="DB-account--span">
            <a href="#my-details">
              <div className="Card ">
                <div className="Card__titlebar">
                  <div className="Titlebar-card">
                    <div className="Titlebar-card__icon">
                      <img
                        id="settings"
                        src="/web-mobile/dfd232d49211c03c25006cfafc363043.svg"
                      />
                    </div>
                    <div className="Titlebar-card__title">
                      <strong>My details</strong>
                    </div>
                  </div>
                </div>
                <div className="Card__children">
                  <div
                    style={{ marginTop: 10, height: 60 }}
                    className="Dashboard__account">
                    <div className="Row">
                      <strong>Name</strong>
                      <p className="phone">{`${user.firstName ||
                        ''} ${user.lastName || ''}`}</p>
                    </div>
                    {/* <div className="Row">
                      <strong>Region</strong>
                      <p className="date-fix-ar">{user.city}</p>
                    </div> */}
                    <div className="Row">
                      <strong>E-mail</strong>
                      <p className="date-fix-ar">{user.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="DB-address accountCard">
            <div id="DB-orders">
              <a href="/account/myorders">
                <div className="Card ">
                  <div className="Card__titlebar">
                    <div className="Titlebar-card">
                      <div className="Titlebar-card__icon">
                        <img
                          id="orders"
                          src="/web-mobile/orders.1f7bf86a.svg"
                        />
                      </div>
                      <div className="Titlebar-card__title">
                        <strong>My Orders</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="accountCard" id="DB-address">
            <a href="/account/myaddress">
              <div className="Card ">
                <div className="Card__titlebar">
                  <div className="Titlebar-card">
                    <div className="Titlebar-card__icon">
                      <img
                        id="address"
                        src="/web-mobile/address.aff11a34.svg"
                      />
                    </div>
                    <div className="Titlebar-card__title">
                      <strong>Address book</strong>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <div className="DB-address accountCard"> */}
          {/*   <div id="DB-orders"> */}
          {/*     <a href="/account/disputes"> */}
          {/*       <div className="Card "> */}
          {/*         <div className="Card__titlebar"> */}
          {/*           <div className="Titlebar-card"> */}
          {/*             <div className="Titlebar-card__icon"> */}
          {/*               <img */}
          {/*                 id="orders" */}
          {/*                 src="/web-mobile/orders.1f7bf86a.svg" */}
          {/*               /> */}
          {/*             </div> */}
          {/*             <div className="Titlebar-card__title"> */}
          {/*               <strong>Returns & Refunds</strong> */}
          {/*             </div> */}
          {/*           </div> */}
          {/*         </div> */}
          {/*         <div className="Card__children"> */}
          {/*           <div className="Dashboard__orders"> */}
          {/*             <div className="error-card "> */}
          {/*               <div className="error-card__title"> */}
          {/*                 You have no returns & refunds to show */}
          {/*               </div> */}
          {/*             </div> */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*     </a> */}
          {/*   </div> */}
          {/* </div> */}
          <div className="accountCard" id="DB-account--span">
            <div
              onClick={e => {
                e.preventDefault()
                LogOut()(dispatch)
              }}>
              <div className="Card ">
                <div className="Card__titlebar">
                  <div className="Titlebar-card">
                    <div className="Titlebar-card__icon">
                      <img
                        id="settings"
                        src="/web-mobile/settings.585c0e51.svg"
                      />
                    </div>
                    <div className="Titlebar-card__title">
                      <strong>Log Out</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {passwordModal && (
        <div id="sizeSelection">
          <div>
            <div id="sizes-modal" className={`modal is-bottom`}>
              <div
                onClick={e => {
                  e.preventDefault()
                  setPasswordModal(false)
                }}
                className="model-shadow"
              />
              <div className="modal-content modal-slideUp">
                <div className="animate__slideout">
                  <div>
                    <div className="ProductRow">
                      <div
                        className="ProductRow__close"
                        onClick={() => {
                          setPasswordModal(false)
                        }}>
                        <span>×</span>
                      </div>
                    </div>
                    <div className="product-sizes">
                      <h4>Change Password</h4>
                      <div
                        className={`alert alert--${messageType} ${
                          !message ? 'is-hidden' : ''
                        }`}>
                        <i className="alert__icon icon-error" />
                        {message}
                      </div>
                      <form className="uaForm">
                        <div className="uaForm__group">
                          <input
                            name="oldPassword"
                            type="password"
                            className="uaForm__input"
                            onChange={handleInputChange}
                            placeholder="Type your old Password"
                          />
                        </div>
                        <div className="uaForm__group">
                          <input
                            name="newPassword"
                            type="password"
                            className="uaForm__input"
                            onChange={handleInputChange}
                            placeholder="Type your new Password"
                          />
                        </div>
                        <button
                          onClick={e => {
                            e.preventDefault()
                            changePassword()
                          }}
                          className={`uaForm__submit ${
                            validChangePassword ? 'uaForm__submit--enabled' : ''
                          } ${loading ? 'uaForm__submit--submitting' : ''}`}
                          disabled={!validChangePassword}
                          type="submit">
                          Change Password
                          {loading ? (
                            <i className="userAuth__icon--loading" />
                          ) : (
                            ''
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        .accountCard {
          width: 90vw;
          margin-top: 14px;

        }
        @media (max-width: 768px) {
          .accountCard {
            width: 90vw;
          }
        }
        @media (min-width: 769px) {
          #wrapper {
            background-color: #f0f0F0 !important;
          }
          .Card {
            width: calc(100% - 20px);
          }
          .Card__children {
            width: calc(100% - 4vw);
          }
          .accountCard {
            width: 100%;
          }
          .site_width_container {
            width: 66vw;
          }
        }
      `}</style>
    </div>
  )
}

export default index;
