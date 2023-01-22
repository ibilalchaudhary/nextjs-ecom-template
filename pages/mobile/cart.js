/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
import React, { useState, createRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FilterMaker } from '@utilts/utilties'

import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { addorRemoveFromCart } from '@redux/action'
import useListing from '@components/useListing'
import Notification from '@components/Notification'
import { OutlinedInput, FormControl, Button } from '@material-ui/core'
import { DeleteForeverOutlined as DustBin } from '@material-ui/icons'
import { isEmpty } from 'lodash'

const PostLink = ({ slug, _id, children }) => (
  <Link
    href={`/mobile/listing/[listingSlug]?id=${_id}`}
    as={`/mobile/listing/${slug}?id=${_id}`}>
    {children}
  </Link>
)
const cart = () => {
  const dispatch = useDispatch()
  const [modalOn, setModalOn] = useState(false)
  const { cart, wishlist, token, user } = useSelector(({ USER }) => ({
    cart: USER.cart,
    wishlist: USER.wishlist,
    token: USER.token,
    user: USER,
  }))
  const { query, pathname, push, replace } = useRouter()
  const changeCart = (pid, vid, qty) => {
    addorRemoveFromCart({ pid, vid, qty }, token)(dispatch).then(() => {})
  }

  return (
    <div
      className="cart-is-open"
      style={{
        width: '100%',
        height: 'calc(100vh - 108px)',
        position: 'relative',
      }}>
      {cart && cart?.items?.length ? (
        <div
          // className="cartSlider-wrapper"
          style={{
            height: '100%',
            width: '100vw',
            padding: '0',
            //position: 'inherit',
            '-webkit-transform': 'translate(0)',
            '-ms-transform': 'translate(0)',
            transform: 'translate(0)',
            backgroundColor: '#E3E3E3',
          }}>
          <div
            style={{
              margin: 0,
              height: 'calc(100% - 15.5vh)',
              width: '100%',
              padding: '0 5px',
              backgroundColor: '#E3E3E3',
              lineHeight: '16px',
            }}>
            <div
              //className="cart-overview"
              style={{
                position: 'relative',
                maxHeight: '100%',
                minHeight: '100%',
                overflowY: 'scroll',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: '-ms-autohiding-scrollbar',
              }}>
              <div className="cart-overview__item">
                {cart.items.map(({ product, variant, qty: qtyX }) => (
                  <div
                    className="product-overview"
                    style={{ backgroundColor: '#fff', marginBottom: 2 }}>
                    <PostLink _id={product._id} slug={product.slug}>
                      <div>
                        <a className="product-overview-link" href="#">
                          <img
                            className="product-overview-link-image"
                            src={product.img.small}
                          />
                        </a>
                      </div>
                    </PostLink>
                    <ul style={{ marginLeft: '1vw', width: '70%' }}>
                      <PostLink _id={product._id} slug={product.slug}>
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
                      </PostLink>
                      <li className="details-price">
                        <span className="price-value">{`${variant.sku}`}</span>
                      </li>
                      <li
                        style={{
                          color: '#666',
                          fontSize: '12px',
                          marginBottom: '5px',
                          textDecoration: 'underline',
                        }}>
                        <span className="size-value-title">Size: </span>
                        <span className="size-value">{variant.size}</span>
                        <span
                          onClick={() => {
                            changeCart(product._id, variant._id, 0)
                          }}
                          style={{
                            fontSize: '14px',
                            height: '3.5vh',
                            fontWeight: '600',
                            '-webkit-transition': 'all .2s',
                            transition: 'all .2s',
                            float: 'right',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <DustBin />
                        </span>
                      </li>
                      <li
                        className="details-actions"
                        style={{
                          width: '100%',
                          justifyContent: 'space-between',
                        }}>
                        <span
                          className="details-actions"
                          style={{ marginTop: 0 }}>
                          <a
                            // className="details-actions-delete"
                            style={{
                              border: '2px solid #F6F6F6',
                              fontSize: '14px',
                              height: '3.5vh',
                              width: '3.5vh',
                              color: '#4c4c4c',
                              '-webkit-transition': 'all .2s',
                              transition: 'all .2s',
                              float: 'left',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            href=""
                            onClick={e => {
                              e.preventDefault()
                              changeCart(product._id, variant._id, -1)
                            }}>
                            -
                          </a>
                          <span
                            style={{
                              borderTop: '2px solid #F6F6F6',
                              borderBottom: '2px solid #F6F6F6',
                              fontSize: '14px',
                              height: '3.5vh',
                              width: '12vw',
                              color: '#4c4c4c',
                              '-webkit-transition': 'all .2s',
                              transition: 'all .2s',
                              float: 'left',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            {qtyX}
                          </span>
                          <a
                            style={{
                              border: '2px solid #F6F6F6',
                              fontSize: '14px',
                              height: '3.5vh',
                              width: '3.5vh',
                              color: '#4c4c4c',
                              '-webkit-transition': 'all .2s',
                              transition: 'all .2s',
                              float: 'left',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            href=""
                            onClick={e => {
                              e.preventDefault()
                              changeCart(product._id, variant._id, 1)
                            }}>
                            +
                          </a>
                        </span>
                        <span
                          style={{
                            fontSize: '2vh',
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
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'sticky',
              bottom: 58,
            }}>
            {/* <div
              onClick={() => {
                setModalOn(true)
              }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1vh 0',
                fontWeight: '900',
                fontSize: 'small',
                width: '100%',
                backgroundColor: '#fff',
              }}>
              <span>Show discounts or add a coupon code</span>
            </div> */}
            <div
              style={{
                padding: '0 10px 0.5vh 10px',
                backgroundColor: '#fff',
                //position: '-webkit-sticky',
                // position: 'sticky',
                //bottom: 58,
                //left: '2.5vw',
              }}>
              <ul className="cost-overview">
                <li className="overview-shipping">
                  <span
                    style={{
                      color: '#111',
                      fontSize: '1.6vh',
                      fontWeight: '600',
                    }}>
                    Sub Total
                  </span>
                  <span>
                    <span
                      style={{
                        color: '#111',
                        marginRight: '2vw',
                        fontSize: '1.3vh',
                      }}>
                      {'Incl VAT'}
                    </span>
                    <span
                      style={{
                        color: '#111',
                        fontSize: '1.8vh',
                        fontWeight: '600',
                      }}>{`Rs ${cart?.subtotal}`}</span>
                  </span>
                </li>
              </ul>
              <a
                href=""
                style={{
                  // margin: '1vh 0',
                  borderRadius: '0.5vh',
                  textDecoration: 'underline',
                  height: '6vh',
                }}
                onClick={e => {
                  e.preventDefault()
                  isEmpty(user) === false
                    ? push('/checkout')
                    : replace({
                        pathname,
                        query: {
                          ...query,
                          authModal: 'yes',
                          returnto: '/cart',
                        },
                      })
                }}
                title="Secure Checkout"
                className="cart-addToCart">
                Checkout
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div id="cart_container" className="page-wrapper">
          <div className="wishlist-empty">
            <span className="shopping-cart-icon" />
            <div className="wishlist-empty-text">
              <span
                style={{ marginBottom: 30, marginTop: 20 }}
                className="text_cta link return_link"
                title="Continue Shopping">
                Your cart is empty
              </span>
            </div>
            <a
              className="wishlist-products-page wishlist-login block_button emphasise"
              href=""
              onClick={e => {
                e.preventDefault()
                push('/')
              }}
              title="Login to view your wishlist">
              Continue shopping
            </a>
          </div>
        </div>
      )}
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
                //  onChange={handleChange('weight')}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
                labelWidth={0}
              />
              <Button
                style={{
                  width: '60%',
                  backgroundColor: '#fff',
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
    </div>
  )
}

export default cart;
