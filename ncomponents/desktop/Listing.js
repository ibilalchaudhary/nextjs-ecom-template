// @ts-nocheck
import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router, { useRouter } from 'next/router'
import ReactPixel from 'react-facebook-pixel'
import {
  addorRemoveFromCart,
  addOrRemoveFromWishlist,
  setAuthModal,
} from '@redux/action'
import { APIFuncs } from '@utilts/APIs'
import Whatsapp from '@components/whatsapp'
import FBChat from 'react-messenger-customer-chat'
import Head from 'next/head'
import ReactImageMagnify from 'react-image-magnify'

const calculatePrice = ({ mrp, price }) => {
  let priceX = 0
  priceX = price < mrp ? price : mrp
  return priceX
}
const Listing = ({ variants, vIndex }) => {
  const dispatch = useDispatch()
  const { cart, wishlist, token, settings } = useSelector(
    ({ USER: { cart, wishlist, token }, SETTINGS: { settings } }) => ({
      cart,
      wishlist,
      token,
      settings,
    })
  )

  const { query, pathname, push, back } = useRouter()
  const [listing, setListing] = useState({})
  const [loading, setLoading] = useState(true)
  const [brand, setBrand] = useState(null)
  const [sizeChart, setSizeChart] = useState(false)
  const [sizeSelected, setSelectedSize] = useState('')
  const [notif, setNotif] = useState(false)
  const [groupData, setGroupData] = useState([])
  const [showMore, setShowMore] = useState(false)
  const [listings, setListings] = useState([])
  const [curImgIndx, setcurImgIndx] = useState(0)
  const [recentProducts, setRecentProducts] = useState([])
  const { vSlug, id } = query

  const _fetchRecentlyViewedProductList = async recentlyViewed => {
    try {
      const res = await APIFuncs.getRecentlyViewedProducts(recentlyViewed)
      if (res && res.length > 0) {
        setRecentProducts(res)
      }
    } catch (e) {}
  }

  useEffect(() => {
    if (cart && cart.items != '') {
      var x = cart.items.filter(e => {
        return e.product._id == id
      })
      if (x != '' && x[0].product._id == id) {
        setNotif(true)
      }
    }
    APIFuncs.GetProductDetail(id)
      .then(response => {
        if (response) {
          setListing(response)
          const { group, categories, variants, brand } = response
          if (!!settings) {
            const { analytics } = settings
            if (analytics.fbPixels_status === 'enabled') {
              ReactPixel.trackCustom('Lead', {
                content_name: response.name,
                currency: 'PKR',
                value: calculatePrice(variants[0]),
              })
            }
          }
          setBrand(brand)
          if (group) {
            APIFuncs.getGroupDetail(group)
              .then(data => {
                setGroupData(data)
                // APIFuncs.GetSubCategoryContent(vSlug, 1, filter)
                //   .then(response => {
                //
                //     setListings(response)
                //     setLoading(false)
                //   })
                //   .catch(error => console.log('error', error))
              })
              .catch(error => console.log('error', error))
          }
          if (Array.isArray(categories)) {
            if (categories.length !== 0) {
              const LastIndex = categories.length - 1
              const { _id: similarProductID } = categories[LastIndex]
              APIFuncs.getSimilarProducts(similarProductID).then(
                similarProduct => {
                  if (Array.isArray(similarProduct)) {
                    setListings(similarProduct)
                  }
                }
              )
            }
          }
          setLoading(false)
        } else setLoading(false)
      })
      .catch(error => console.log('error', error))
  }, [])

  useEffect(() => {
    _getRecentlyViewedProducts().then()
  }, [id])

  const _getRecentlyViewedProducts = async () => {
    try {
      let recentlyViewed = localStorage.getItem('recent')
      if (recentlyViewed) {
        recentlyViewed = JSON.parse(recentlyViewed)
        recentlyViewed.reverse()
        if (!recentlyViewed.includes(id)) {
          if (recentlyViewed.length > 10) {
            recentlyViewed = []
          }
          recentlyViewed.push(id)
          localStorage.setItem('recent', JSON.stringify(recentlyViewed))
        }
      } else {
        let productIds = []
        productIds.push(id)
        localStorage.setItem('recent', JSON.stringify(productIds))
      }

      if (recentlyViewed && recentlyViewed.length > 0) {
        _fetchRecentlyViewedProductList(recentlyViewed)
      }
    } catch (error) {}
  }

  const validateId = (a, b) => {
    setSelectedSize(a)
    if (cart && cart.items != '') {
      var x = cart.items.filter(e => {
        return e.product._id == id
      })
      if (x != '' && b == x[0].variant.size) {
        setNotif(true)
      } else {
        setNotif(false)
      }
    }
  }
  const changeCart = () => {
    // if (token) {
    setLoading(true)
    addorRemoveFromCart(
      { pid: listing._id, vid: sizeSelected, qty: 1 },
      token
    )(dispatch).then(() => {
      if (!!settings) {
        const { analytics } = settings
        if (analytics.fbPixels_status === 'enabled') {
          ReactPixel.trackCustom('AddToCart', {
            currency: 'PKR',
            value: calculatePrice(listing.variants[0]),
            content_type: 'product',
            content_ids: listing._id,
            content_name: listing.name,
          })
        }
      }
      setLoading(false)
      setNotif(true)
    })
    // } else setAuthModal(true)(dispatch)
  }
  const loginCheck = () => {
    push('/checkout')
    // if (token) {
    //   push('/checkout')
    // } else {
    //   setAuthModal(true)(dispatch)
    // }
  }
  const changeWishList = () => {
    if (token) {
      addOrRemoveFromWishlist(
        { product: listing, variant: selectedVariant || listing.variants[0] },
        wishlist,
        token
      )(dispatch)
    } else setAuthModal(true)(dispatch)
  }
  const inWishList = wishlist.find(
    found => (found.product ? found.product._id : found.product) === listing._id
  )
  const inCart = cart
    ? cart.items.find(
        found =>
          (found.product ? found.product._id : found.product) === listing._id &&
          found.variant.size === sizeSelected
      )
    : null

  const selectedVariant = listing.variants
    ? listing.variants.find(found => found.size === sizeSelected)
    : null
  let Discount = 0
  let Off = 0
  if (listing.variants) {
    Discount =
      listing.variants[0].mrp.toFixed(0) - listing.variants[0].price.toFixed(0)
    Off = (Discount / listing.variants[0].mrp.toFixed(0)) * 100
  }
  return loading ? (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  ) : (
    <div id="content" className="detail_wide">
      <Head>
        <title>{listing.name}</title>
        <meta name="description" content={listing.metaDescription} />
        <meta name="keywords" content={listing.metaKeywords} />
        <meta name="og:title" property="og:title" content={listing.name} />
        <meta name="og:type" property="og:type" content="website" />
        <meta
          name="og:url"
          property="og:url"
          content={`https://www.brandcity.com.pk/listing/${listing.slug}?id=${listing._id}`}
        />
        {listing.imgA !== undefined && listing.imgA[0] !== undefined && (
          <meta
            name="og:image"
            property="og:image"
            content={listing.imgA[0].medium}
          />
        )}
        <meta name="og:site_name" property="og:site_name" content="BrandCity" />
        <meta
          name="og:description"
          property="og:description"
          content={listing.metaDescription}
        />
      </Head>
      <div className="site_width_container">
        <div className="content">
          <section className="product">
            <div>
              {listing.imgA !== undefined && (
                <div className="flex-container">
                  <div className="flex-row product__item">
                    <div className="product__carousel">
                      <div className="save-for-later product__addtowishlist">
                        <div className="wishlist ">
                          <button
                            onClick={changeWishList}
                            className={`wishlist-button${
                              inWishList ? ' active' : ''
                            }`}
                            data-sku={listing.sku}
                            data-price={listing.variants[0].price.toFixed(0)}
                            data-special-price="">
                            <svg
                              className="wishlist-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        id="product_carousel"
                        className="slim-slider deskRow">
                        <div
                          style={{
                            width: '15%',
                            height: '46vh',
                            //backgroundColor: '#989',
                            display: 'flex',
                            flexDirection: 'column',
                          }}>
                          {listing.imgA.map(({ small }, index) => {
                            const Selected = curImgIndx === index
                            return (
                              <img
                                key={'img' + index}
                                onClick={() => {
                                  setcurImgIndx(index)
                                }}
                                src={small}
                                style={{
                                  width: `calc(100% - ${Selected ? 2 : 0}px )`,
                                  marginBottom: '1vh',
                                  border: `${Selected ? 1 : 0}px solid #111`,
                                }}
                              />
                            )
                          })}
                        </div>
                        <div className="reactimagemagnify">
                          <ReactImageMagnify
                            {...{
                              smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src:
                                  listing.imgA.length !== 0
                                    ? listing.imgA[curImgIndx].medium
                                    : '/images/placeholder.png',
                              },
                              largeImage: {
                                src:
                                  listing.imgA.length !== 0
                                    ? listing.imgA[curImgIndx].large
                                    : '/images/placeholder.png',
                                width: 800,
                                height: 1000,
                              },
                              enlargedImageContainerStyle: {
                                zIndex: 999999,
                                borderRadius: 5,
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product__options">
                      <header>
                        <div className="product__details">
                          {!!brand && !!brand.imgA && (
                            <div className="product__logo">
                              <img src={brand.imgA} id="brand_img" />
                            </div>
                          )}

                          <h2 className="product__brandname">{listing.name}</h2>
                          {listing.sale && (
                            <p
                              className="product__deliveryestimation"
                              style={{
                                fontWeight: '700',
                                textDecoration: 'underline',
                                color: '#e95c5b',
                                background: 'rgba(242,83,82,0.1)',
                                width: '70px',
                                padding: '5px',
                              }}>
                              On Sale
                            </p>
                          )}
                          <p className="product__price">
                            {Discount !== 0 && (
                              <span className="pre-reduction">{`Rs ${listing.variants[0].mrp.toLocaleString()}`}</span>
                            )}
                            <span
                              className="reduction"
                              style={{
                                fontSize: '.8em',
                              }}>
                              {`Rs ${listing.variants[0].price
                                .toFixed(0)
                                .toLocaleString()}`}
                            </span>
                            <span className="includeVAT"> (Incl. GST) </span>
                          </p>
                          {Discount !== 0 && (
                            <p
                              className="reduction_tag_wrapper"
                              style={{ marginTop: '1em' }}>
                              <span className="reduction_message">
                                You Save:
                              </span>
                              <span className="reduction_message_amount">{` Rs ${Discount}`}</span>
                              <span className="reduction_tag">
                                -{Math.round(Off)}%
                              </span>
                            </p>
                          )}
                          <p
                            className="reduction_tag_wrapper"
                            style={{ marginTop: '1em' }}>
                            <span className="reduction_message">
                              {`SKU: ${listing.sku}`}
                            </span>
                          </p>
                        </div>
                      </header>
                      <p className="product__deliveryestimation">
                        Fast Delivery
                      </p>
                      {/*<p className="product__deliveryestimation blink_me">
                        All orders after 14th May will be shipped after Eid.
                      </p>*/}
                      <div
                        id="sizeSelector"
                        className="size__selector animated">
                        <div className="option_select" id="sizeSelector">
                          <div className="size-selection-bar">
                            <p className="faux_label">Size</p>
                            <div>
                              <a
                                href="#"
                                onClick={e => {
                                  e.preventDefault()
                                  setSizeChart(true)
                                }}>
                                <p>Show size chart</p>
                              </a>
                            </div>
                          </div>
                          <ul id="product_size">
                            {listing.variants.map(
                              ({ _id, sku, size, stock, active }) => {
                                if (active)
                                  return (
                                    <li style={{pointerEvents: stock === 0 ? 'none': 'auto'}}
                                      onClick={() => validateId(_id, size)}
                                      key={_id + 'j'}>
                                      <label
                                        className={`available ${sizeSelected ===
                                          _id  && 'selected'}`}
                                      style={{position:'relative', opacity: stock === 0 ? 0.5: 1}}
                                      >
                                        <span className="size">
                                          {stock === 0 ?
                                            <span style={{position:'absolute',top:-8, left:-10,color:'rgba(0,0,0,0.26)'}} className='product_size_no_stock'>
                                           <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'
                                                viewBox='0 0 24 24' fill='none' stroke='currentColor'
                                                strokeWidth='2' strokeLinecap='round'
                                                strokeLinejoin='round' className='feather feather-x'>
                                                  <line x1='18' y1='6' x2='6' y2='18'></line>
                                                  <line x1='6' y1='6' x2='18' y2='18'></line>
                                                </svg>
                                          </span>: null
                                          }

                                          {size}</span>
                                      </label>
                                    </li>
                                  )
                              }
                            )}
                          </ul>
                          {/* <div id="size_mapper">
                            <div id="product_size_mapper" data-nm-size-mapping>
                              <div
                                data-ng-show="sizeMap"
                                className="select_container">
                                <span>
                                  <select
                                    value={sizeType}
                                    onChange={handleInputChange}
                                    name="sizeType">
                                    <option value="int"> International </option>
                                    <option value="UK"> UK </option>
                                    <option value="USA"> USA </option>
                                  </select>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="skywards_reward_miles">Premium</div> */}
                          <div className="product__cta">
                            <div className="applepay_wrapper">
                              <div className="cta__addtocart " id="add_to_cart">
                                {!notif ? (
                                  <span
                                    onClick={() => {
                                      if (inCart) push('/cart')
                                      else if (sizeSelected) changeCart()
                                      else alert('Please select size')
                                    }}
                                    //href="/cart/"
                                    className="product-Addtocart-btn">
                                    <span className="cart-loader">
                                      <span className="icon-loader-white" />
                                    </span>
                                    <span className="cart-button-label block_button emphasise is-visible">
                                      <span>
                                        <i className="icon-cart" />
                                        Add To Shopping Cart
                                      </span>
                                    </span>
                                  </span>
                                ) : (
                                  <span
                                    onClick={loginCheck}
                                    //href="/cart/"
                                    className="product-Addtocart-btn">
                                    <span className="cart-loader">
                                      <span className="icon-loader-white" />
                                    </span>
                                    <span className="cart-button-label block_button emphasise is-visible">
                                      <span>
                                        <i className="icon-cart" />
                                        CHECKOUT
                                      </span>
                                    </span>
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {groupData.length !== 0 && (
                          <div className="product__colors">
                            <p className="product__color-label">
                              More options
                              <span className="product__current-color">
                                {listing.name}
                              </span>
                            </p>
                            <ul className="product__colorlist">
                              {groupData &&
                                groupData.length &&
                                groupData.map(({ color, imgA, slug, _id }) => (
                                  <li
                                    key={_id + 'l'}
                                    className={`product__color ${
                                      id === _id ? 'is-selected' : ''
                                    }`}>
                                    <a
                                      href={`${pathname
                                        .replace('[listingSlug]', slug)
                                        .replace('[vSlug]', vSlug)}?id=${_id}`}
                                      title={color?.name}
                                      onClick={e => {
                                        // e.preventDefault()
                                        Router.push({
                                          pathname: pathname
                                            .replace('[listingSlug]', slug)
                                            .replace('[vSlug]', vSlug),
                                          query: { id: _id },
                                        })
                                      }}>
                                      <img
                                        src={
                                          imgA.length !== 0
                                            ? imgA[0].small
                                            : '/images/placeholder.png'
                                        }
                                        alt={color?.name}
                                      />
                                      <p className="product-variation-label">
                                        {color ? color.name : ''}
                                      </p>
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="product__info">
                        <div
                          className={`product__desc__wrapper ${
                            showMore ? '' : 'is--collapsed'
                          }`}>
                          <div className="product_description ">
                            <h2 className="open product__desc__header">
                              Description
                            </h2>
                            <div className="toggle_section">
                              <div>
                                <a
                                  href="#"
                                  className="open toogle__header "
                                  title="Details">
                                  Details
                                </a>
                              </div>
                              <div
                                className="info_shortdescription info_content"
                                dangerouslySetInnerHTML={{
                                  __html: listing.description,
                                }}
                              />
                            </div>
                          </div>
                          <div className="product__showmore">
                            <span
                              className={`product__showmore__btn show-more ${
                                showMore ? 'hidden' : ''
                              }`}
                              onClick={e => {
                                e.preventDefault()
                                setShowMore(true)
                              }}>
                              Show more
                            </span>
                            <span
                              className={`product__showmore__btn show-less ${
                                showMore ? '' : 'hidden'
                              }`}
                              onClick={e => {
                                e.preventDefault()
                                setShowMore(false)
                              }}>
                              Show less
                            </span>
                          </div>
                        </div>
                      </div>
                      <section className="product__usps__wrapper">
                        <section className="product-usps">
                          <div className="product-usp">
                            <i className="icon-brands" /> 100% Genuine Brands
                          </div>
                          <div className="product-usp">
                            <i className="icon-cod" /> Cash On Delivery
                          </div>
                          <div className="product-usp">
                            <i className="icon-delivery" /> Fast Delivery
                          </div>
                        </section>
                      </section>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* <Whatsapp />  */}
            <FBChat
              pageId="107252286033498"
              themeColor="#dd1e26"
              htmlRef={window.location.pathname}
            />
          </section>
          <section className="flex-container">
            <div className="recos">
              <div className="recommendations">
                {recentProducts && recentProducts.length > 0 ? (
                  <>
                    <div className="header header-title">Recently Viewed</div>
                    <section
                      style={{ marginBottom: 100 }}
                      className="recommendations-wrapper">
                      <div
                        className="slim-slider product-slides"
                        id="recosSlider">
                        <div className="slim-slider-wrapper">
                          <div
                            className="slim-slides"
                            style={{
                              touchAction: 'pan-y',
                              userSelect: 'none',
                              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                            }}>
                            {recentProducts?.map(
                              ({ imgA, name, slug, variants, _id }, index) => {
                                const RPDiscount =
                                  variants[0].mrp.toFixed(0) -
                                  variants[0].price.toFixed(0)

                                return (
                                  <div
                                    key={_id + 'm'}
                                    className="recos-product slim-slide active"
                                    style={{ minWidth: 232 }}>
                                    <a
                                      href=""
                                      onClick={e => {
                                        e.preventDefault()
                                        Router.push({
                                          pathname: pathname
                                            .replace('[listingSlug]', slug)
                                            .replace('[vSlug]', vSlug),
                                          query: { id: _id },
                                        })
                                      }}
                                      className="product-link">
                                      <img
                                        className="product-image"
                                        src={
                                          imgA.length !== 0
                                            ? imgA[0].medium
                                            : '/images/placeholder.png'
                                        }
                                        alt="Upon Sandal"
                                      />
                                      <div className="recos-product-info">
                                        <h4 className="product-name">{name}</h4>
                                        <span className="product-price has-special">
                                          <span className="reduction">{`Rs ${variants[0].price
                                            .toFixed(0)
                                            .toLocaleString()}`}</span>
                                          {RPDiscount !== 0 && (
                                            <span className="price-special">{`Rs ${variants[0].mrp
                                              .toFixed(0)
                                              .toLocaleString()}`}</span>
                                          )}
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                )
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                ) : null}

                <div className="header header-title">Similar Products</div>
                <section className="recommendations-wrapper">
                  <div className="slim-slider product-slides" id="recosSlider">
                    <div className="slim-slider-wrapper">
                      <div
                        className="slim-slides"
                        style={{
                          touchAction: 'pan-y',
                          userSelect: 'none',
                          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                        }}>
                        {listings.map(
                          ({ imgA, name, slug, variants, _id }, index) => {
                            const RPDiscount =
                              variants[0].mrp.toFixed(0) -
                              variants[0].price.toFixed(0)

                            return (
                              <div
                                key={_id + 'n'}
                                className="recos-product slim-slide active"
                                style={{ minWidth: 232 }}>
                                <a
                                  href=""
                                  onClick={e => {
                                    e.preventDefault()
                                    Router.push({
                                      pathname: pathname
                                        .replace('[listingSlug]', slug)
                                        .replace('[vSlug]', vSlug),
                                      query: { id: _id },
                                    })
                                  }}
                                  className="product-link">
                                  <img
                                    className="product-image"
                                    src={
                                      imgA.length !== 0
                                        ? imgA[0].medium
                                        : '/images/placeholder.png'
                                    }
                                    alt="Upon Sandal"
                                  />
                                  <div className="recos-product-info">
                                    <h4 className="product-name">{name}</h4>
                                    <span className="product-price has-special">
                                      <span className="reduction">{`Rs ${variants[0].price
                                        .toFixed(0)
                                        .toLocaleString()}`}</span>
                                      {RPDiscount !== 0 && (
                                        <span className="price-special">{`Rs ${variants[0].mrp
                                          .toFixed(0)
                                          .toLocaleString()}`}</span>
                                      )}
                                    </span>
                                  </div>
                                </a>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <div className={`nmModal ${sizeChart ? 'nmModal--active' : ''}`}>
          <div className="nmModal__overlay">
            <div className="nmModal__wrapper">
              <a
                href="#"
                className="nmModal__close"
                onClick={e => {
                  e.preventDefault()
                  setSizeChart(false)
                }}>
                ×
              </a>
              <div className="size-chart">
                {!!variants[vIndex].sizechartA && (
                  <img
                    src={variants[vIndex].sizechartA}
                    style={{ width: '100%' }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>{`
        .blink_me {
          animation: blinker 2.5s linear infinite;
          color: var(--omnisell-PrimaryColor) !important;
        }

        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default Listing
