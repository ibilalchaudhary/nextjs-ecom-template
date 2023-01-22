// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { APIFuncs } from '@utilts/APIs'
import { useSelector } from 'react-redux'
import { ExtractDateAndTime } from '@utilts/utilties'
import { isEmpty } from 'lodash'
const index = props => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const { push } = useRouter()
  const { token, user } = useSelector(({ USER }) => ({
    token: USER.token,
    user: USER,
  }))

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
  return loading ? (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  ) : (
    <div style={{ paddingBottom: 5 }} className="site_width_container">
      {user && (
        <div className="page-wrapper search-view">
          <div className="DB-address">
            <div id="DB-orders">
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                }}>
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
                  <div className="Card__children">
                    <div className="Dashboard__orders">
                      {isEmpty(orders) ? (
                        <div className="error-card ">
                          <div className="error-card__title">
                            You have no orders to show
                          </div>
                          <div className="error-card__text">
                            <p>
                              You will see a history of your purchases when you
                              place new orders
                            </p>
                          </div>
                        </div>
                      ) : (
                        orders.map(
                          (
                            { _id, orderNo, createdAt, items, status, amount },
                            index
                          ) => {
                            const { dDate, dTime } = ExtractDateAndTime(
                              createdAt
                            )
                            return (
                              <div
                                key={_id}
                                onClick={() => {
                                  push(`/account/myorders/${_id}`)
                                }}
                                style={{
                                  margin: '10px 0px',
                                  border: '1px solid gray',
                                  padding: 10,
                                  borderRadius: 5,
                                }}
                                className="error-card ">
                                <div
                                  style={{ marginBottom: 0 }}
                                  className="error-card__title">
                                  <span style={{ minWidth: 70 }}>
                                    Order N°:
                                  </span>
                                  {orderNo}
                                </div>
                                <div className="error-card__text">
                                  <ul style={{ width: '80vw' }}>
                                    <li
                                      style={{ marginTop: 7 }}
                                      className="details-price">
                                      <span className="checkout-value-title">
                                        # items:{' '}
                                      </span>
                                      <span className="price-value">
                                        {items.length}
                                      </span>
                                    </li>
                                    <li
                                      style={{ marginTop: 7 }}
                                      className="details-price">
                                      <span className="checkout-value-title">
                                        Amount:{' '}
                                      </span>
                                      <span className="price-value">{`Rs ${amount.total.toLocaleString()}`}</span>
                                    </li>
                                    <li
                                      style={{ marginTop: 7 }}
                                      className="details-price">
                                      <span className="checkout-value-title">
                                        Status:{' '}
                                      </span>
                                      <span className="price-value">
                                        {status}
                                      </span>
                                    </li>
                                    <li
                                      style={{ marginTop: 7 }}
                                      className="details-price">
                                      <span className="checkout-value-title">
                                        Date:{' '}
                                      </span>
                                      <span className="price-value">
                                        {dDate}, {dTime}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )
                          }
                        )
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      <style jsx>
        {`
          .Card {
            width: 100%;
            padding: 20px;
          }
          @media (max-width: 768px) {
            .Card {
              width: 100%;
              padding: 20px;
            }
            .DB-address {
              width: 95vw;
              margin-top: 5px;
            }
          }
          @media (min-width: 769px) {
            .Card {
              width: calc(100% - 40px);
              padding: 20px;
            }
            .error-card {
              width: calc(100% - 20px);
            }
            .DB-address {
              width: 66vw;
              margin: 5px 17vw 0 17vw;
            }
          }
        `}
      </style>
    </div>
  )
}

export default index;
