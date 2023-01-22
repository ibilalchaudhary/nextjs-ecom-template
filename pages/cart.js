/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
import React, { useState, createRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FilterMaker } from '@utilts/utilties'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { addorRemoveFromCart, setAuthModal } from '@redux/action'
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
  const loginCheck = () => {
    push('/checkout')
    // if (token) {
    //   push('/checkout')
    // } else {
    //   setAuthModal(true)(dispatch)
    // }
  }
  return (
    <div className="cart-is-open clickyCart">
      {cart && cart?.items?.length ? (
        <div className="clickyCartContainer">
          <div className="clickyCartContainerOut">
            <div className="clickyCartContainerIn">
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
                    <ul className="clickyCartItemContainer">
                      <li
                        className="details-brand"
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                        <PostLink _id={product._id} slug={product.slug}>
                          {product.name}
                        </PostLink>
                        <span
                          onClick={() => {
                            changeCart(product._id, variant._id, 0)
                          }}
                          className={'deskDust'}>
                          <DustBin fontSize="large" />
                        </span>
                      </li>

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
                          className={'mobileDust'}>
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
                        <span className={'priceTag'}>
                          {`Rs ${qtyX * variant.price}`}
                        </span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="stickyCheckoutBar">
            <div
              onClick={() => {
                // setModalOn(true)
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
              {/* <span>Show discounts or add a coupon code</span> */}
            </div>
            <div
              style={{
                padding: '0 10px 0.5vh 10px',
                backgroundColor: '#fff',
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
                      {'Incl GST'}
                    </span>
                    <span
                      className={'subtotal'}
                      style={{
                        color: '#111',
                        fontWeight: '600',
                      }}>{`Rs ${cart?.subtotal}`}</span>
                  </span>
                </li>
              </ul>

              <span
                style={{
                  // margin: '1vh 0',
                  borderRadius: '0.5vh',
                  textDecoration: 'underline',
                  height: '6vh',
                }}
                // onClick={e => {
                //   e.preventDefault()
                //   isEmpty(user) === false
                //     ? push('/checkout')
                //     : replace({
                //         pathname,
                //         query: {
                //           ...query,
                //           authModal: 'yes',
                //           returnto: '/cart',
                //         },
                //       })
                // }}
                onClick={loginCheck}
                title="Secure Checkout"
                className="cart-addToCart">
                Checkout
              </span>
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
      {modalOn && (
        <div className={`modal`}>
          <div className="model-shadow" />
          <div
            className="modal-content modal-fadeIn is-center"
            style={{ margin: '30px 35vw' }}>
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
      )}
      <style jsx>
        {`
          .mobileDust {
            height: 3.5vh;
            color: var(--omnisell-CartTextColor);
            font-size: 2vh;
            font-weight: 600;
            -webkit-transition: all 0.2s;
            transition: all 0.2s;
            float: right;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .priceTag {
            height: 3.5vh;
            color: var(--omnisell-CartTextColor);
            font-size: 2vh;
            font-weight: 600;
            -webkit-transition: all 0.2s;
            transition: all 0.2s;
            float: right;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .clickyCartItemContainer {
            margin-left: 1vw;
          }
          .clickyCartContainerOut {
            margin: 0;
            width: 100%;
            background-color: #e3e3e3;
            line-height: 16px;
          }
          .clickyCart {
            position: relative;
          }
          .clickyCartContainer {
            height: 100%;
            width: 100vw;
            padding: 0;
            -webkit-transform: translate(0);
            -ms-transform: translate(0);
            transform: translate(0);
            background-color: '#E3E3E3';
          }
          .clickyCartContainerIn {
            position: relative;
            min-height: 100%;
          }
          @media (max-width: 768px) {
            .stickyCheckoutBar {
              position: -moz-sticky;
              position: -ms-sticky;
              position: -o-sticky;
              position: sticky;
              bottom: 58px;
            }
            .subtotal {
              font-size: 1.8vh;
            }
            .deskDust {
              display: none;
            }
            .priceTag {
              font-size: 2vh;
            }
            .clickyCartItemContainer {
              width: 70%;
            }
            .clickyCartContainerOut {
              height: calc(100% - 15.5vh);
              padding: 0 5px;
              line-height: 16px;
            }
            .clickyCartContainer {
              width: 100vw;
            }
            .clickyCart {
              width: 100%;
              height: calc(100vh - 108px);
            }
            .clickyCartContainerIn {
              min-height: 100%;
              max-height: 100%;
              overflow-y: scroll;
            }
          }
          @media (min-width: 769px) {
            .priceTag {
              font-size: 2.5vh;
            }
            .clickyCartItemContainer {
              width: 88%;
            }
            .clickyCartContainerOut {
              min-height: 41vh;
              padding: 0;
              line-height: 16px;
            }
            .clickyCartContainer {
              width: 64vw;
            }
            cart-overview__item .product-overview {
              margin-top: 0;
              padding: 10px;
            }
            .clickyCartContainerIn {
              min-height: 100%;
            }
            .clickyCart {
              padding: 0 18vw;
              min-height: calc(100vh - 402px);
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
            .product-overview-link {
              width: 40%;
              text-align: center;
              position: relative;
            }
            .product-overview-link-image {
              max-height: 100%;
              max-width: 100%;
              height: 100px;
            }
            .product-overview-link-image:before {
              content: ' ';
              position: absolute;
              height: 100%;
              width: 100%;
              background: #eee;
              left: 0;
              top: 0;
            }
            .details-brand,
            .details-description,
            .details-personalization-text,
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
            .details-brand {
              font-weight: 700;
              color: #000;
            }
            .cost-overview {
              margin-top: 20px;
              padding-top: 10px;
              border-top: 1px solid #ebeded;
            }
            .cost-overview {
              position: relative;
              z-index: 3;
            }
            .cartSlider-wrapper .cost-overview:before {
              content: ' ';
              right: 0;
              z-index: -1;
              width: 100%;
              position: absolute;
              height: 1px;
              background: #fff;
              box-shadow: 0 -13px 34px 33px #fff;
            }
            .details-brand,
            .details-description,
            .details-personalization-text,
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
            .overview-cod_fees,
            .overview-shipping,
            .overview-subtotal,
            .overview-total {
              display: flex;
              justify-content: space-between;
              margin: 10px 0;
            }
            .overview-shipping {
              font-weight: 900;
              color: var(--omnisell-CartTextColor);
            }
            .cart-addToCart {
              flex: 1;
              border-radius: 4px;
              text-decoration: none !important;
            }
            .cart-addToCart,
            .cart-blockBtn {
              margin: 10px 0;
              text-decoration: none !important;
              background: var(--omnisell-ButtonColor);
              color: #fff;
              width: 100%;
              height: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 15px;
            }
            .mobileDust {
              display: none;
            }
            .product-overview {
              margin-top: 0;
              padding: 15px 0;
            }
            .deskDust {
              height: 4vh;
              color: var(--omnisell-PrimaryColor);
              font-size: 3vh;
              font-weight: 600;
              -webkit-transition: all 0.2s;
              transition: all 0.2s;
              float: right;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .size-value-title {
              font-size: 1.8vh;
            }
            .size-value {
              font-size: 1.8vh;
            }
            .details-brand {
              font-weight: 900;
              font-size: 1.8vh;
            }
            .price-value {
              font-size: 1.8vh;
            }
            .subtotal {
              font-size: 2.5vh;
            }
          }
        `}
      </style>
    </div>
  )
}

export default cart;
