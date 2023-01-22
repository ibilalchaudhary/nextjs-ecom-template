import React, { useState, createRef } from 'react'
import Router, { useRouter } from 'next/router'
import { FilterMaker } from '@utilts/utilties'
import { useDispatch, useSelector } from 'react-redux'
import { addOrRemoveFromWishlist } from '@redux/action'
import useListing from '@components/useListing'
import slugify from 'slugify'
import isEmpty from 'lodash/isEmpty'
import Notification from '@components/Notification'

const wishlist = props => {
  const dispatch = useDispatch()
  const scrollRef = createRef()
  const [hControls, setHControls] = useState(false)
  const [notifMessage, setNotifMessage] = useState('')
  const [listingHover, setListingHover] = useListing()
  const [loading, setLoading] = useState(false)
  const [loadingId, setLoadingId] = useState(false)
  const { cart, wishlist, token, user } = useSelector(({ USER }) => ({
    cart: USER.cart,
    wishlist: USER.wishlist,
    token: USER.token,
    user: USER,
  }))
  const { query, pathname, push } = useRouter()

  const changeWishlist = (product, variant) => {
    setLoading(true)
    setLoadingId(product._id)
    addOrRemoveFromWishlist(
      {
        product,
        variant,
      },
      wishlist,
      token
    )(dispatch).then(() => setLoading(false))
  }

  return (
    <div className="site_width_container cartSlider cart-is-open">
      {!isEmpty(wishlist) ? (
        <div className="cartSlider-wrapper">
          <div className="cartSlider-header">
            <h2 className="cartSlider-header-title">{`Wishlist (${wishlist.length} items)`}</h2>
          </div>
          <div className="wishlist-items">
            {wishlist.map(({ product, variant }) => (
              <div
                key={product._id}
                className="wishlist-item enter"
                style={{ animationDelay: '0s' }}>
                <div>
                  <a
                    className="wishlist-item-link"
                    href={`/listing/${slugify(product.name, { lower: true })}`}
                    onClick={e => {
                      e.preventDefault()
                      push({
                        pathname: `/listing/${slugify(product.name, {
                          lower: true,
                        })}`,
                        query: { id: product._id },
                      })
                    }}>
                    <div className="wishlist-item-image-wrapper">
                      <img
                        className=" wishlist-item-image"
                        id="A6/31646W"
                        src={product.imgA[0].small}
                      />
                    </div>
                    <div className="wishlist-item-info">
                      <h3 className="wishlist-item-brand">{product.name}</h3>
                      <h4 className="wishlist-item-name">{`size: ${variant.size}`}</h4>
                      <div className="wishlist-currency">{`Rs ${variant.price.toLocaleString()}`}</div>
                    </div>
                  </a>
                </div>
                <div className="wishlist-actions">
                  <a
                    className="wishlist-remove-button"
                    style={{ paddingBottom: 20 }}
                    href=""
                    onClick={e => {
                      e.preventDefault()
                      changeWishlist(product, variant)
                    }}>
                    {console.log(
                      'loadingId === product._id',
                      loadingId === product._id
                    )}
                    {<i className="icon-delete" />}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div id="wishList" className="page-wrapper">
          <div className="wishlist-empty">
            <span className="wishlist-empty-icon" />
            <div className="wishlist-empty-text">
              <span
                style={{ marginBottom: 30 }}
                className="text_cta link return_link"
                title="Continue Shopping">
                Your wishList is empty
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
    </div>
  )
}

export default wishlist;
