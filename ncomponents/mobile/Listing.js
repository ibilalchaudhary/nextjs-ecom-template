/* eslint-disable indent */
/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-fragments */
// @ts-nocheck
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ReactPixel from 'react-facebook-pixel'
import { addorRemoveFromCart, addOrRemoveFromWishlist, setAuthModal } from '@redux/action'
import { APIFuncs } from '@utilts/APIs'
import { isEmpty } from 'lodash'
import { useScrollPosition } from '@components/mobile/scroll'
import { ArrowBackIos, Favorite, FavoriteBorder } from '@material-ui/icons'
import Slider from 'react-slick'
// import FBChat from 'react-messenger-customer-chat'
const slidderSettings = {
  dots: true,
  arrow: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dotsClass: 'DotX',
  //autoplay: true,
  //speed: 800,
  //centerMode:true,
  //centerPadding:'20px',
}
const calculatePrice = ({ mrp, price }) => {
  let priceX = 0
  priceX = price < mrp ? price : mrp
  return priceX
}
const Listing = () => {
  const dispatch = useDispatch()
  const { cart, wishlist, token, settings } = useSelector(
    ({ USER: { cart, wishlist, token }, SETTINGS: { settings } }) => ({
      cart,
      wishlist,
      token,
      settings,
    }),
  )

  const { query, pathname, back, push, replace } = useRouter()
  const [sizeOpen, setSizeOpen] = useState(false)
  const [sizeChart, setSizeChart] = useState(false)
  const [loading, setLoading] = useState(false)
  const [notif, setNotif] = useState(false)
  const [similarProducts, setSimilarProducts] = useState([])
  const [showMore, setShowMore] = useState(false)
  const [groupData, setGroupData] = useState([])
  const [sizeNameSelected, setNameSelectedSize] = useState('')
  const [sizeSelected, setSelectedSize] = useState('')
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const [listing, setListing] = useState({})
  const [SizeChartPath, setsizeChartPath] = useState('')
  const [recentProducts, setRecentProducts] = useState([])

  //const variant = variants[vIndex]
  const { listingSlug, id } = query

  const _fetchRecentlyViewedProductList = async (recentlyViewed) => {
    try {
      const res = await APIFuncs.getRecentlyViewedProducts(recentlyViewed)
      if (res && res.length > 0) {
        setRecentProducts(res)
      }
    } catch (e) {
    }
  }
  useEffect(() => {
    _getRecentlyViewedProducts()
      .then()
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
    } catch (error) {
    }
  }

  const inWishList = wishlist
    ? wishlist.find(
      found =>
        (found.product ? found.product._id : found.product) === listing._id,
    )
    : false
  const inCart = cart
    ? cart.items.find(
      found =>
        (found.product ? found.product._id : found.product) === listing._id &&
        found.variant.size === sizeSelected,
    )
    : null

  const selectedVariant = listing.variants
    ? listing.variants.find(found => found.size === sizeSelected)
    : null

  const changeWishList = () => {
    if (token) {
      addOrRemoveFromWishlist(
        {
          product: listing,
          variant: selectedVariant || listing.variants[0],
        },
        wishlist,
        token,
      )(dispatch)
    } else {
      setAuthModal(true)(dispatch)
    } //replace({ pathname, query: { ...query, authModal: 'yes' } })
  }

  const changeCart = () => {
    // if (token) {
    setLoading(true)
    addorRemoveFromCart(
      {
        pid: listing._id,
        vid: sizeSelected,
        qty: 1,
      },
      token,
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
    //replace({ pathname, query: { ...query, authModal: 'yes' } })
  }

  const categories = !isEmpty(listing) ? listing.categories : []
  if (!isEmpty(categories)) {
    const sId = categories[categories.length - 1]._id
    APIFuncs.getSimilarProducts(sId).then(products => {
      if (!isEmpty(products) && isEmpty(similarProducts)) {
        setSimilarProducts(products)
      }
    })
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y < -200) {
        setHideOnScroll(true)
      } else {
        setHideOnScroll(false)
      }
    },
    [hideOnScroll],
  )

  useEffect(() => {
    APIFuncs.GetProductDetail(id)
      .then(response => {
        setListing(response)
        if (response) {
          const { variants, group, categories } = response
          if (!!settings) {
            const { analytics, CDN_URL } = settings
            if (!!categories && !!categories.length) {
              !!categories[0].sizechart &&
              setsizeChartPath(CDN_URL + categories[0].sizechart)
            }

            if (analytics.fbPixels_status === 'enabled') {
              ReactPixel.trackCustom('Lead', {
                content_name: response.name,
                currency: 'PKR',
                value: calculatePrice(variants[0]),
              })
            }
          }
          if (!!group) {
            APIFuncs.getGroupDetail(group).then(data => {
              setGroupData(data)
            })
          }
        }
      })
      .catch(error => console.log('error', error))
  }, [])
  let Discount = 0
  let Off = 0
  if (listing.variants) {
    Discount =
      listing.variants[0].mrp.toFixed(0) - listing.variants[0].price.toFixed(0)
    Off = (Discount / listing.variants[0].mrp.toFixed(0)) * 100
  }
  return (
    <div>
      <Head>
        <title>{`${listing.name}`}</title>
        <meta name='description' content={listing.metaDescription} />
        <meta name='keywords' content={listing.metaKeywords} />
        <meta name='og:title' property='og:title' content={listing.name} />
        <meta name='og:type' property='og:type' content='website' />
        <meta
          name='og:url'
          property='og:url'
          content={`https://www.brandcity.com.pk/listing/${listing.slug}?id=${listing._id}`}
        />
        {listing.imgA !== undefined && listing.imgA[0] !== undefined && (
          <meta
            name='og:image'
            property='og:image'
            content={listing.imgA[0].medium}
          />
        )}
        <meta name='og:site_name' property='og:site_name' content='BrandCity' />
        <meta
          name='og:description'
          property='og:description'
          content={listing.metaDescription}
        />
      </Head>
      <div className={`details-topbar ${hideOnScroll ? 'withBG' : ''}`}>
        <a
          className='topbar-menu-link go-back'
          onClick={e => {
            e.preventDefault()
            history.length > 1 ? back() : replace('/mobile')
          }}
          href=''>
          <ArrowBackIos
            style={{
              color: '#111',
              fontSize: 22,
            }}
          />
        </a>
        <div className='topbar-meta'>
          <p className='topbar-brand-name'>{listing.name}</p>
        </div>
        <div className='wishlist'>
          <button
            type='button'
            className={`wishlist-button ${inWishList ? 'active' : ''}`}
            onClick={() => changeWishList()}>
            {inWishList ? (
              <Favorite
                style={{
                  color: 'var(--omnisell-CartTextColor)',
                  fontSize: 24,
                }}
              />
            ) : (
              <FavoriteBorder
                style={{
                  color: '#111',
                  fontSize: 24,
                }}
              />
            )}
            {/* <svg
              className="wishlist-icon"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
            </svg> */}
          </button>
        </div>
      </div>
      <div className='page-wrapper detail'>
        {listing.name !== undefined && (
          <Fragment>
            <section className='product'>
              <div style={{ margin: '0 0 10px 0' }}>
                <Slider
                  {...slidderSettings}
                  style={{
                    width: '100%',
                  }}>
                  {listing.imgA.map(({ medium }, index) => {
                    return (
                      <div
                        key={'Img' + index}
                        // className="slim-slide zoom active"
                        //onClick={nextImager}
                      >
                        <img
                          src={medium}
                          style={{
                            width: '100vw',
                            //height: '400px',
                          }}
                        />
                      </div>
                    )
                  })}
                </Slider>
              </div>
              <div className='product-brief'>
                <div className='product-brief-group'>
                  <h2 className='product-brand-name'>{listing.name}</h2>
                  {listing.sale && (
                    <p
                      className='product__deliveryestimation'
                      style={{
                        marginBottom: '5px',
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

                  <p className='product-brief-price'>
                    {Discount !== 0 && (
                      <span
                        style={{
                          marginRight: 10,
                          color: '#999',
                        }}
                        className='product-brief-regular-price line-through'>
                        {`Rs ${listing.variants[0].mrp.toLocaleString()}`}
                      </span>
                    )}
                    <span
                      style={{ color: 'var(--omnisell-CartTextColor)' }}
                      className='product-brief-regular-price '>{`Rs ${listing.variants[0].price.toLocaleString()}`}</span>
                    <span className='includeVAT'> (Incl. GST) </span>
                  </p>
                  <h1 className='product-brief-name'>{`SKU: ${listing.sku}`}</h1>
                  <div id='deliveryPromise'>
                    <div className='deliveryPromise__wrapper'>
                      Order fast <span className='counter'>and get it</span>{' '}
                      soon
                    </div>
                    {/*<div className="deliveryPromise__wrapper blink_me">
                      All orders after 14th May will be shipped after Eid.
                    </div>*/}
                  </div>
                </div>
                {/* <div id="sizeButton" className="product-size-button"> */}
                {/*   <a */}
                {/*     href="" */}
                {/*     onClick={e => { */}
                {/*       e.preventDefault() */}
                {/*       setSizeOpen(true) */}
                {/*     }} */}
                {/*     className="product-size-selector animated"> */}
                {/*     {sizeSelected ? sizeNameSelected : 'Size'} */}
                {/*     <i className="icon-arrow" /> */}
                {/*   </a> */}
                {/* </div> */}
              </div>
              {!isEmpty(groupData) && (
                <div className='product-variations-wrapper'>
                  <div className='product-variations-scrollable'>
                    <div className='product-variations-heading'>
                      More options
                    </div>
                    <ul className='product-variations'>
                      {groupData.map(({ color, imgA, slug, _id }) => {
                        return (
                          <li
                            className='product-variations-variation'
                            key={slug + 'pl'}>
                            <a
                              className={`product-variation-link ${
                                id === _id ? 'is-selected' : ''
                              }`}
                              href={`${pathname.replace(
                                '[listingSlug]',
                                slug,
                              )}?id=${_id}`}
                              onClick={e => {
                                // e.preventDefault()
                                push({
                                  pathname: pathname.replace(
                                    '[listingSlug]',
                                    slug,
                                  ),
                                  query: { id: _id },
                                })
                              }}>
                              <img
                                className='product-variation-image lazyloaded'
                                src={imgA[0].small}
                              />
                              <p className='product-variation-label'>
                                {color ? color.name : 'prints'}
                              </p>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )}
              <div id='sizeSelection'>
                <div>
                  <div
                    id='sizes-modal'
                    className={`modal is-bottom ${
                      sizeOpen ? '' : 'is-hidden'
                    }`}>
                    <div
                      onClick={e => {
                        e.preventDefault()
                        setSizeOpen(false)
                      }}
                      className='model-shadow'
                    />
                    <div className='modal-content modal-slideUp'>
                      <div className='animate__slideout'>
                        {!sizeChart ? (
                          <div>
                            <div className='ProductRow'>
                              <div className='ProductRow__img-wrapper'>
                                <img
                                  src={listing.imgA[0].small}
                                  className='ProductRow__img'
                                />
                              </div>
                              <div className='ProductRow__details'>
                                <div className='ProductRow__title'>
                                  {listing.name}
                                </div>
                                <div className='ProductRow__price-wrapper'>
                                  {Discount !== 0 && (
                                    <div className='ProductRow__price ProductRow__price--striked'>
                                      {`Rs ${listing.variants[0].mrp
                                        .toFixed(0)
                                        .toLocaleString()}`}
                                    </div>
                                  )}
                                  <div
                                    className='ProductRow__special-price'>{`Rs ${listing.variants[0].price.toLocaleString()}`}</div>
                                  <div className='ProductRow__vat-notice'>
                                    Incl. GST
                                  </div>
                                </div>
                              </div>
                              <div
                                className='ProductRow__close'
                                onClick={() => {
                                  setSizeChart(false)
                                  setSizeOpen(false)
                                }}>
                                <span>×</span>
                              </div>
                            </div>
                            <div className='product-sizes'>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '100%',
                                  justifyContent: 'space-between',
                                }}>
                                <h4>Select Size</h4>
                                {!!SizeChartPath && (
                                  <h4
                                    onClick={() => {
                                      setSizeChart(true)
                                    }}>
                                    Show size chart
                                  </h4>
                                )}
                              </div>
                              <ul className='product-sizes-list'>
                                {listing.variants.map(
                                  ({ _id, sku, size, stock, active }) => {
                                    if (active) {
                                      return (
                                        <li
                                          onClick={() => {
                                            setSelectedSize(_id)
                                            setNameSelectedSize(size)
                                            setSizeOpen(false)
                                          }}
                                          className={`product-sizes-size ${
                                            sizeSelected === _id
                                              ? 'is-selected'
                                              : ''
                                          }`}
                                          style={{
                                            pointerEvents: stock === 0 ? 'none' : 'auto',
                                            opacity: stock === 0 ? 0.6 : 1,
                                          }}
                                          key={_id}>
                              <span>
                               {stock ===0 ?<div className='size_listing-mobile_no_stock_detail'>
                                 <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'
                                      viewBox='0 0 24 24' fill='none' stroke='currentColor'
                                      strokeWidth='2' strokeLinecap='round'
                                      strokeLinejoin='round' className='feather feather-x'>
                                   <line x1='18' y1='6' x2='6' y2='18'></line>
                                   <line x1='6' y1='6' x2='18' y2='18'></line>
                                 </svg> </div>:null }
                                {size}</span>
                                        </li>
                                      )
                                    }
                                  },
                                )}
                              </ul>
                              <div
                                style={{ marginBottom: 20 }}
                                className='SelectSize__msg-wrapper'>
                                <div className='msg-lowstock'>
                                  Hurry up some sizes are about to finish soon!
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className='size-chart'>
                            <div className='size-chart__action-bar'>
                              <div
                                onClick={() => {
                                  setSizeChart(false)
                                }}
                                className='back-to-sizes-button'>
                                <i className='icon-arrow back-button-arrow' />
                                <span>Back to sizes</span>
                              </div>
                              <div
                                onClick={() => {
                                  setSizeChart(false)
                                  setSizeOpen(false)
                                }}
                                className='close-modal-button'>
                                <span>×</span>
                              </div>
                            </div>
                            <img
                              src={SizeChartPath}
                              style={{ width: '100%' }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section
                style={{
                  padding: '20px 0px',
                  borderBottom: '1px solid rgba(0,0,0,0.08)',
                }}
                className='product product-usps-wrapper'>
                <div className='product-sizes'>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                    }}>
                    <h4>Select Size</h4>
                    {!!SizeChartPath && (
                      <h4
                        onClick={() => {
                          setSizeChart(true)
                        }}>
                        Show size chart
                      </h4>
                    )}
                  </div>
                  <ul className='product-sizes-list'>
                    {listing.variants.map(
                      ({ _id, sku, size, stock, active }) => {
                        if (active) {
                          return (
                            <li
                              onClick={() => {
                                setSelectedSize(_id)
                                setNameSelectedSize(size)
                              }}
                              className={`product-sizes-size ${
                                sizeSelected === _id ? 'is-selected' : ''
                              }`}
                              style={{
                                pointerEvents: stock === 0 ? 'none' : 'auto',
                                opacity: stock === 0 ? 0.6 : 1,
                              }}
                              key={_id}>
                              <span>
                                {stock ===0 ?<div className='size_listing-mobile_no_stock_detail'>
                                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'
                                       viewBox='0 0 24 24' fill='none' stroke='currentColor'
                                       strokeWidth='2' strokeLinecap='round'
                                       strokeLinejoin='round' className='feather feather-x'>
                                    <line x1='18' y1='6' x2='6' y2='18'></line>
                                    <line x1='6' y1='6' x2='18' y2='18'></line>
                                  </svg> </div>:null }
                                {size}</span>
                            </li>
                          )
                        }
                      },
                    )}
                  </ul>
                  <div
                    style={{ marginBottom: 20 }}
                    className='SelectSize__msg-wrapper'>
                    <div className='msg-lowstock'>
                      Hurry up some sizes are about to finish soon!
                    </div>
                  </div>
                </div>
                <div id='sizeSelection'>
                  <div>
                    <div
                      id='sizes-modal'
                      className={`modal is-bottom ${
                        sizeChart ? '' : 'is-hidden'
                      }`}>
                      <div
                        onClick={e => {
                          e.preventDefault()
                          setSizeOpen(false)
                        }}
                        className='model-shadow'
                      />
                      <div className='modal-content modal-slideUp'>
                        <div className='animate__slideout'>
                          {sizeChart && (
                            <div className='size-chart'>
                              <div className='size-chart__action-bar'>
                                <div
                                  onClick={() => {
                                    setSizeChart(false)
                                  }}
                                  className='back-to-sizes-button'>
                                  <i className='icon-arrow back-button-arrow' />
                                  <span>Back to sizes</span>
                                </div>
                                <div
                                  onClick={() => {
                                    setSizeChart(false)
                                  }}
                                  className='close-modal-button'>
                                  <span>×</span>
                                </div>
                              </div>
                              <img
                                src={SizeChartPath}
                                style={{ width: '100%' }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div id='continueShopping' data-client-render>
                <div className={`modal ${notif ? '' : 'is-hidden'}`}>
                  <div
                    onClick={() => {
                      setNotif(false)
                    }}
                    className='model-shadow'
                  />

                  <div
                    className='modal-content modal-fadeIn is-center'
                    style={{ margin: '30px' }}>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <span></span>
                      <div
                        onClick={() => {
                          setNotif(false)
                        }}
                        style={{
                          fontSize: 30,
                          height: 35,
                          width: 35,
                          justifyContent: 'center',
                          alignItems: 'center',
                          display: 'flex',
                          paddingTop: 14,
                          paddingRight: 14,
                        }}>
                        <span>×</span>
                      </div>
                    </div>
                    <div className='productContinueShopping'>
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          margin: '2vh 0',
                        }}>
                        <img
                          src={'/images/done.png'}
                          style={{
                            width: '5vh',
                            height: '5vh',
                            alignSelf: 'center',
                          }}
                        />
                      </div>

                      <div
                        className='productContinueShopping-subheading'
                        style={{
                          fontWeight: '600',
                          fontSize: '2.5vh',
                          color: '#111',
                        }}>
                        What do you want to do now?
                      </div>
                      <div
                        className='productContinueShopping-actions'
                        style={{
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}>
                        <a
                          href=''
                          onClick={e => {
                            e.preventDefault()
                            setNotif(false)
                          }}
                          className='productContinueShopping-actions-link go-back'
                          style={{
                            width: '90%',
                            display: 'flex',
                            fontSize: '1.8vh',
                            justifyContent: 'center',
                            padding: '2.5vh 0',
                            fontWeight: '600',
                            color: '#111',
                            border: '1px solid #111',
                            textDecoration: 'none',
                            borderRadius: '0.5vh',
                            marginBottom: '3vh',
                          }}>
                          Continue Shopping
                        </a>
                        <a
                          href='/cart'
                          // onClick={e => {
                          //   e.preventDefault()
                          //   push('/cart')
                          // }}
                          style={{
                            width: '90%',
                            padding: '3vh 0',
                            borderRadius: '0.5vh',
                            textDecoration: 'none',
                          }}
                          className='productContinueShopping-actions-button  show-cart'>
                          View Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`product-details ${showMore ? 'show-all' : ''}`} id='productDetails'>
                <div
                  style={{ height: showMore ? '100%' : 200 }}
                  className='product-attr'
                  id='productAttr'>
                  <div id='productWrapper'>
                    <h4 className='product-attr-title'>Short Description</h4>
                    <div className='product-description'>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: listing.description,
                        }}
                        className='atrribute-value'
                      />
                      {showMore ? (
                        <div className='product-show-detail is-collapse'>
                          <a
                            onClick={e => {
                              e.preventDefault
                              setShowMore(false)
                            }}
                            className='product-expand-btn'
                            id='productExpandLess'>
                            Show less
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                {!showMore && (
                  <div className='product-show-detail is-expand'>
                    <a
                      onClick={e => {
                        e.preventDefault()
                        setShowMore(true)
                      }}
                      className='product-expand-btn'
                      id='productExpandMore'>
                      Show more
                    </a>
                  </div>
                )}
              </div>
              <section className='product product-usps-wrapper'>
                <section className='product-usps'>
                  <div className='brands product-usp'>100% Genuine</div>
                  <div className='cod product-usp'>Cash On Delivery</div>
                  <div className='exchanges product-usp'>
                    Easy 14 day exchanges
                  </div>
                  <div className='delivery product-usp'>Fast Delivery</div>
                </section>
              </section>

              {/* <Whatsapp />  */}
              {/* <FBChat
                pageId="107252286033498"
                themeColor="#f53397"
                htmlRef={window.location.pathname}
              /> */}
            </section>
            <div className='product-Addtocart is-visible'>
              <div className='applepay_wrapper applepay--pdp'>
                <div id='addToCartButton'>
                  <a
                    href=''
                    onClick={e => {
                      e.preventDefault()
                      if (inCart) {
                        push('/cart')
                      } else if (sizeSelected) {
                        changeCart()
                      } else {
                        setSizeOpen(true)
                      }
                    }}
                    className='product-Addtocart-btn'>
                    <div
                      className={`cart-loader ${loading ? 'is-visible' : ''}`}>
                      <div className='loading is-white' />
                    </div>
                    {!loading && (
                      <span className='cart-button-label is-visible'>
                        <span>
                          <i className='icon-cart' />
                          {inCart ? 'Go to Shopping Cart' : 'Add To Cart'}
                        </span>
                      </span>
                    )}
                  </a>
                </div>
                <div id='expCheckoutButton' />
              </div>
            </div>
            {recentProducts && recentProducts.length > 0 ?
              <section className='product-recos'>
                <div className='carousel-module'>
                  <div>
                    <div className='carousel-module-title'>Recently Viewed</div>
                    <div className='carousel-module-wrapper' style={{ height: 210 }}>
                      <div className='carousel-module-scrollable'>
                        <div className='carousel-module-products'>
                          {recentProducts.map(
                            ({ imgA, name, slug, price, _id, mrp, variants }) => {
                              const DiscountX =
                                variants[0].mrp.toFixed(0) -
                                variants[0].price.toFixed(0)
                              const OffX =
                                (Discount / variants[0].mrp.toFixed(0)) * 100
                              return (
                                <div
                                  key={_id}
                                  className='carousel-module-product'>
                                  <a
                                    href={`${pathname.replace(
                                      '[listingSlug]',
                                      slug,
                                    )}`}
                                    onClick={e => {
                                      e.preventDefault()
                                      push({
                                        pathname: pathname.replace(
                                          '[listingSlug]',
                                          slug,
                                        ),
                                        query: { id: _id },
                                      })
                                    }}
                                    className='is-shadow-product carousel-module-product-link'>
                                    <div>
                                      <img
                                        className='list-product-image carousel-module-product-image lazyloaded'
                                        alt='Button Detail Wrap Skirt'
                                        width='100px'
                                        height='100px'
                                        src={
                                          imgA.length !== 0
                                            ? imgA[0].small
                                            : '/images/placeholder.png'
                                        }
                                      />
                                    </div>
                                    <div className='carousel-module-product-info'>
                                      <h3 className='list-product-brand carousel-module-product-brand'>
                                        {name}
                                      </h3>
                                      <span className='list-product-price has-special'>
                                      {DiscountX !== 0 && (
                                        <span
                                          style={{ color: '#999' }}
                                          className='price-regular line-through'>
                                          {`Rs ${variants[0].mrp.toLocaleString()}`}
                                        </span>
                                      )}
                                        <span
                                          className='price-special'>{`Rs ${variants[0].price.toLocaleString()}`}</span>
                                    </span>
                                    </div>
                                  </a>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              : null}

            <section className='product-recos'>
              <div className='carousel-module'>
                <div>
                  <div className='carousel-module-title'>Similar products</div>
                  <div className='carousel-module-wrapper'>
                    <div className='carousel-module-scrollable'>
                      <div className='carousel-module-products'>
                        {similarProducts.map(
                          ({ imgA, name, slug, price, _id, mrp, variants }) => {
                            const DiscountX =
                              variants[0].mrp.toFixed(0) -
                              variants[0].price.toFixed(0)
                            const OffX =
                              (Discount / variants[0].mrp.toFixed(0)) * 100
                            return (
                              <div
                                key={_id}
                                className='carousel-module-product'>
                                <a
                                  href={`${pathname.replace(
                                    '[listingSlug]',
                                    slug,
                                  )}`}
                                  onClick={e => {
                                    e.preventDefault()
                                    push({
                                      pathname: pathname.replace(
                                        '[listingSlug]',
                                        slug,
                                      ),
                                      query: { id: _id },
                                    })
                                  }}
                                  className='is-shadow-product carousel-module-product-link'>
                                  <div>
                                    <img
                                      className='list-product-image carousel-module-product-image lazyloaded'
                                      alt='Button Detail Wrap Skirt'
                                      width='100px'
                                      height='100px'
                                      src={
                                        imgA.length !== 0
                                          ? imgA[0].small
                                          : '/images/placeholder.png'
                                      }
                                    />
                                  </div>
                                  <div className='carousel-module-product-info'>
                                    <h3 className='list-product-brand carousel-module-product-brand'>
                                      {name}
                                    </h3>
                                    <span className='list-product-price has-special'>
                                      {DiscountX !== 0 && (
                                        <span
                                          style={{ color: '#999' }}
                                          className='price-regular line-through'>
                                          {`Rs ${variants[0].mrp.toLocaleString()}`}
                                        </span>
                                      )}
                                      <span
                                        className='price-special'>{`Rs ${variants[0].price.toLocaleString()}`}</span>
                                    </span>
                                  </div>
                                </a>
                              </div>
                            )
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        )}
      </div>
      <style global jsx>{`
        .DotX {
          position: absolute;
          bottom: 20px;
          display: block;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: center;
        }

        .DotX li button:before {
          font-family: 'slick';
          font-size: 10px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: '•';
          text-align: center;
          opacity: 0.25;
          color: black;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .DotX li button {
          font-size: 0;
          line-height: 0;
          display: block;
          width: 20px;
          height: 20px;
          padding: 5px;
          cursor: pointer;
          color: transparent;
          border: 0;
          outline: none;
          background: transparent;
        }

        .DotX li {
          position: relative;
          display: inline-block;
          width: 20px;
          height: 20px;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
        }

        .DotX li button:before {
          opacity: 0.25;
          color: black;
        }

        .DotX li.slick-active button:before {
          opacity: 1;
          color: black;
          content: '•';
        }

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
