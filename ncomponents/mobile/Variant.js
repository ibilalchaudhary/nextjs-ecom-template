// @ts-nocheck
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Fragment, useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import { APIFuncs } from '@utilts/APIs'
import { isEmpty, isEqual } from 'lodash'
import Slider from 'react-slick'
// import FBChat from 'react-messenger-customer-chat'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import {
  addorRemoveFromCart,
  addOrRemoveFromWishlist,
  setAuthModal,
} from '@redux/action'
import Loader from 'react-loader-spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

const Cats = {
  women: 'cat1',
  men: 'cat2',
  kids: 'cat3',
  home: 'cat4',
}
const sliderSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  rtl: true,
  arrows: false,
}
const Variant = ({ vIndex, variants, settings }) => {
  const {
    query: { vSlug },
    push,
    pathname,
  } = useRouter()
  const { bannersA } = settings
  const variant = variants[vIndex]
  const { title } = settings
  const [listings, setListings] = useState({})
  const [trending, setTrending] = useState({})
  const [bestSeller, setBestSeller] = useState({})
  const [loading, setLoading] = useState(true)
  const [newArrivals, setNewArrivals] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [page, setPage] = useState(1)
  const [notif, setNotif] = useState(false)
  const dispatch = useDispatch()

  const { cart, wishlist, token } = useSelector(({ USER }) => ({
    cart: USER.cart,
    wishlist: USER.wishlist,
    token: USER.token,
  }))
  const changeWishList = product => {
    addOrRemoveFromWishlist(
      {
        product,
        variant: product.variants[0],
      },
      wishlist,
      token
    )(dispatch)
  }

  useEffect(() => {
    APIFuncs.GetSubCategoryContent(
      vSlug ? vSlug : 'women',
      1,
      '&sort=-createdAt'
    )
      .then(response => {
        if (
          (isEmpty(listings) || !isEqual(listings.data, response.data)) &&
          !isEmpty(response)
        ) {
          setListings(response)
          setLoading(false)
        }
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
      })
    APIFuncs.GetSubCategoryContent('sneakers', 1, '&sort=-createdAt')
      .then(response => {
        if (
          (isEmpty(trending) || !isEqual(trending.data, response.data)) &&
          !isEmpty(response)
        ) {
          setTrending(response)
          setLoading(false)
        }
      })
      .catch(error => {
        setLoading(false)
      })
    APIFuncs.GetSubCategoryContent('canvas', 1, '&sort=-createdAt')
      .then(response => {
        if (
          (isEmpty(bestSeller) || !isEqual(bestSeller.data, response.data)) &&
          !isEmpty(response)
        ) {
          setBestSeller(response)
          setLoading(false)
        }
      })
      .catch(error => {
        setLoading(false)
      })
  }, [])

  const fetchNewListings = () => {
    APIFuncs.GetSubCategoryContent(
      vSlug ? vSlug : 'women',
      page,
      '&sort=-createdAt'
    ).then(res => {
      if (page === 1) {
        setNewArrivals(res?.data)
      } else {
        setNewArrivals(newArrivals.concat(res?.data))
      }
    })
    setPage(page + 1)
  }

  useEffect(() => {
    fetchNewListings()
  }, [])

  const changeCart = (pid, vid) => {
    if (token) {
      setLoading(true)
      addorRemoveFromCart(
        { pid, vid, qty: 1 },
        token
      )(dispatch).then(() => {
        setNotif(true)
        setLoading(false)
      })
    } else setAuthModal(true)(dispatch)
  }

  return loading ? (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  ) : (
    <div id="page-wrapper grid view" style={{ paddingBottom: 60 }}>
      <Head>
        <title>{`${variant.q} | ${title}`}</title>
      </Head>
      <div
        className="navigation"
        style={{
          position: 'sticky',
          top: 50,
          left: 0,
          zIndex: 33,
        }}>
        <ul className="navigation-tabs">
          {!isEmpty(variants) &&
            variants.map(({ name, slug }) => (
              <li
                key={slug}
                className={`navigation-tab ${
                  slug === variant.slug ? ' is-selected' : ''
                }`}>
                <a
                  className="navigation-link"
                  onClick={e => {
                    e.preventDefault()
                    Router.push(`/${slug}`)
                  }}
                  href={`/${slug}`}>
                  {name}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="page-wrapper grid view">
        {settings.banners != undefined &&
          settings.banners[Cats[vSlug ? vSlug : 'women']] !== undefined && (
            <div style={{ width: '100vw' }} className="row">
              {!!settings.banners[Cats[vSlug ? vSlug : 'women']].mobile_slider
                .length && (
                <Slider
                  style={{
                    width: '100vw',
                  }}
                  {...sliderSettings}>
                  {settings.banners[
                    Cats[vSlug ? vSlug : 'women']
                  ].mobile_slider.map(({ _id, link, img }, index) => {
                    return (
                      <a
                        key={name}
                        href={link}
                        style={{ width: '100vw !important' }}
                        onClick={e => {
                          e.preventDefault()
                          push('/mobile' + link)
                        }}>
                        <img
                          src={
                            img
                              ? settings.CDN_URL + img
                              : '/images/placeholder.png'
                          }
                          style={{ width: '100vw' }}
                          className="lazyloaded"
                        />
                      </a>
                    )
                  })}
                </Slider>
              )}
            </div>
          )}
      </div>

      {settings.banners != undefined &&
        settings.banners[Cats[vSlug ? vSlug : 'women']] !== undefined &&
        settings.banners[Cats[vSlug ? vSlug : 'women']].mobile_banner_1
          ?.length &&
        settings.banners[Cats[vSlug ? vSlug : 'women']].mobile_banner_2
          ?.length && (
          <>
            <h1
              style={{ margin: '20px 0px', textAlign: 'center' }}
              className="carousel-module-title">
              Shop by category
            </h1>
            <div className="shop_by_categories_wrapper_mobile">
              {settings.banners[
                Cats[vSlug ? vSlug : 'women']
              ].mobile_banner_1.map(({ _id, link, img }, index) => {
                return (
                  <a
                    key={name}
                    href={link}
                    onClick={e => {
                      e.preventDefault()
                      push('/mobile' + link)
                    }}
                    className="shop_by_categories_entry_mobile lazyloaded">
                    <img
                      src={
                        img ? settings.CDN_URL + img : '/images/placeholder.png'
                      }
                      alt="picture"
                      className="shop_by_categories_entry_img_mobile"
                    />
                  </a>
                )
              })}
              {settings.banners[
                Cats[vSlug ? vSlug : 'women']
              ].mobile_banner_2.map(({ _id, link, img }, index) => {
                return (
                  <a
                    key={name}
                    href={link}
                    onClick={e => {
                      e.preventDefault()
                      push('/mobile' + link)
                    }}
                    className="shop_by_categories_entry_mobile lazyloaded">
                    <img
                      src={
                        img ? settings.CDN_URL + img : '/images/placeholder.png'
                      }
                      alt="picture"
                      className="shop_by_categories_entry_img_mobile"
                    />
                  </a>
                )
              })}
            </div>
          </>
        )}

      <section
        className="carousel-module-container multi"
        style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #E8E8E8',
        }}>
        <div className="carousel-module">
          <div className="carousel-module-header">
            <h1
              style={{ margin: '20px 0px', textAlign: 'center' }}
              className="carousel-module-title">
              Recommended Categories
            </h1>
          </div>
          <div className="carousel-module-wrapper">
            <div className="wrapper">
              {!isEmpty(variants) &&
                variant.children.map(
                  ({ name, hc_header_img_url, slug: slugX, children }) => {
                    const lName = name.toLowerCase()
                    const properName =
                      lName.charAt(0).toUpperCase() + lName.slice(1)
                    return (
                      <div
                        key={slugX}
                        onClick={e => {
                          Router.push(
                            `/mobile/${vSlug ? vSlug : 'women'}/${slugX}`
                          )
                        }}
                        className="carousel-module-product"
                        style={{
                          width: '30vw',
                          height: '30vw',
                          elevation: 5,
                        }}>
                        <div
                          style={{
                            position: 'relative',
                          }}
                          className="viewable">
                          <a
                            href={`${pathname}/${slugX}`}
                            onClick={e => {
                              e.preventDefault()
                            }}
                            style={{
                              backgroundColor: '#afafaf',
                              borderRadius: 10,
                            }}
                            className="is-shadow-product carousel-module-product-link">
                            <img
                              src={
                                hc_header_img_url ||
                                (children[0]
                                  ? children[0].hc_header_img_url
                                  : '/images/placeholder.png')
                              }
                              style={{
                                width: '30vw',
                                height: '30vw',
                              }}
                              className="lazyloaded"
                            />
                          </a>
                          {/*<h2
                            style={{
                              position: 'absolute',
                              bottom: '40%',
                              textAlign: 'center',
                              width: '100%',
                              color: '#fff',
                              fontWeight: 'bold',
                              textShadow: '0px 2px 3px #555',
                            }}>
                            {properName}
                          </h2>*/}
                        </div>
                      </div>
                    )
                  }
                )}
            </div>
          </div>
        </div>
      </section>

      {/*<div className="row">*/}
      {/*  <div style={{ height: 250 }} className="carousel-module-wrapper">*/}
      {/*    <div className="carousel-module-scrollable">*/}
      {/*      <div className="carousel-module-header">*/}
      {/*        <h1*/}
      {/*          style={{ textAlign: 'center' }}*/}
      {/*          className="carousel-module-title">*/}
      {/*          New Arrivals*/}
      {/*        </h1>*/}
      {/*      </div>*/}
      {/*      <div className="carousel-module-products">*/}
      {/*        {!isEmpty(listings.data) &&*/}
      {/*          listings.data*/}
      {/*            .slice(0, 10)*/}
      {/*            .map(({ imgA, name, slug, variants, _id }) => (*/}
      {/*              <div key={_id} className="carousel-module-product">*/}
      {/*                <a*/}
      {/*                  href={`/listing/${slug}?id=${_id}`}*/}
      {/*                  onClick={e => {*/}
      {/*                    e.preventDefault()*/}
      {/*                    Router.push({*/}
      {/*                      pathname: `/listing/${slug}`,*/}
      {/*                      query: { id: _id },*/}
      {/*                    })*/}
      {/*                  }}*/}
      {/*                  className="is-shadow-product carousel-module-product-link"*/}
      {/*                  style={{*/}
      {/*                    width: '106px !important',*/}
      {/*                    borderRadius: 6,*/}
      {/*                    background: 'rgba(255,255,255,.6)',*/}
      {/*                  }}>*/}
      {/*                  <div>*/}
      {/*                    <img*/}
      {/*                      className="list-product-image carousel-module-product-image lazyloaded"*/}
      {/*                      alt="Button Detail Wrap Skirt"*/}
      {/*                      width="152px"*/}
      {/*                      height="152px"*/}
      {/*                      src={*/}
      {/*                        imgA.length !== 0*/}
      {/*                          ? imgA[0].medium*/}
      {/*                          : '/images/placeholder.png'*/}
      {/*                      }*/}
      {/*                    />*/}
      {/*                  </div>*/}
      {/*                  <div className="carousel-module-product-info">*/}
      {/*                    /!*<h3 className="list-product-brand carousel-module-product-brand">*/}
      {/*                        {name}*/}
      {/*                      </h3>*!/*/}
      {/*                    <span className="list-product-price has-special">*/}
      {/*                      {variants[0].price < variants[0].mrp && (*/}
      {/*                        <span*/}
      {/*                          style={{ color: '#999' }}*/}
      {/*                          className="price-regular line-through">*/}
      {/*                          {`Rs ${variants[0].mrp.toLocaleString()}`}*/}
      {/*                        </span>*/}
      {/*                      )}*/}

      {/*                      <span className="price-special">{`Rs ${variants[0].price.toLocaleString()}`}</span>*/}
      {/*                    </span>*/}
      {/*                  </div>*/}
      {/*                </a>*/}
      {/*              </div>*/}
      {/*            ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="row">
        <div style={{ height: 250 }} className="carousel-module-wrapper">
          <div className="carousel-module-header">
            <h1
              style={{ textAlign: 'center' }}
              className="carousel-module-title">
              Trending
            </h1>
          </div>
          <div className="carousel-module-scrollable">
            <div className="carousel-module-products">
              {!isEmpty(trending.data) &&
                trending.data
                  .slice(0, 30)
                  .map(({ imgA, name, slug, variants, _id }) => (
                    <div key={_id} className="carousel-module-product">
                      <a
                        href={`/listing/${slug}?id=${_id}`}
                        onClick={e => {
                          e.preventDefault()
                          Router.push({
                            pathname: `/listing/${slug}`,
                            query: { id: _id },
                          })
                        }}
                        className="is-shadow-product carousel-module-product-link"
                        style={{
                          width: '106px !important',
                          borderRadius: 6,
                          background: 'rgba(255,255,255,.6)',
                        }}>
                        <div>
                          <img
                            className="list-product-image carousel-module-product-image lazyloaded"
                            alt="Button Detail Wrap Skirt"
                            width="152px"
                            height="152px"
                            src={
                              imgA.length !== 0
                                ? imgA[0].medium
                                : '/images/placeholder.png'
                            }
                          />
                        </div>
                        <div className="carousel-module-product-info">
                          {/*<h3 className="list-product-brand carousel-module-product-brand">
                              {name}
                            </h3>*/}
                          <span className="list-product-price has-special">
                            {variants[0].price < variants[0].mrp && (
                              <span
                                style={{ color: '#999' }}
                                className="price-regular line-through">
                                {`Rs ${variants[0].mrp.toLocaleString()}`}
                              </span>
                            )}

                            <span className="price-special">{`Rs ${variants[0].price.toLocaleString()}`}</span>
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>

      {settings.banners != undefined &&
        settings.banners[Cats['women']] !== undefined &&
        settings.banners[Cats[vSlug ? vSlug : 'women']].mini_banners
          ?.length && (
          <>
            <h1
              style={{ margin: '20px 0px', textAlign: 'center' }}
              className="carousel-module-title">
              Discounts
            </h1>
            <div className="shop_by_kids_wrapper_mobile">
              {settings.banners[Cats[vSlug ? vSlug : 'women']].mini_banners.map(
                ({ _id, link, img }, index) => {
                  return (
                    <a
                      key={'banner' + _id}
                      href={link}
                      onClick={e => {
                        e.preventDefault()
                        push(link)
                      }}
                      className="shop_by_kids_wrapper_entry_mobile">
                      <img
                        src={
                          img
                            ? settings.CDN_URL + img
                            : '/images/placeholder.png'
                        }
                        alt="picture"
                        className="shop_by_categories_entry_img_mobile"
                      />
                    </a>
                  )
                }
              )}
            </div>
          </>
        )}

      <div className="row">
        <div style={{ height: 250 }} className="carousel-module-wrapper">
          <div className="carousel-module-header">
            <h1
              style={{ textAlign: 'center' }}
              className="carousel-module-title">
              Best Sellers
            </h1>
          </div>
          <div className="carousel-module-scrollable">
            <div className="carousel-module-products">
              {!isEmpty(bestSeller.data) &&
                bestSeller.data
                  .slice(0, 30)
                  .map(({ imgA, name, slug, variants, _id }) => (
                    <div key={_id} className="carousel-module-product">
                      <a
                        href={`/listing/${slug}?id=${_id}`}
                        onClick={e => {
                          e.preventDefault()
                          Router.push({
                            pathname: `/listing/${slug}`,
                            query: { id: _id },
                          })
                        }}
                        className="is-shadow-product carousel-module-product-link"
                        style={{
                          width: '106px !important',
                          borderRadius: 6,
                          background: 'rgba(255,255,255,.6)',
                        }}>
                        <div>
                          <img
                            className="list-product-image carousel-module-product-image lazyloaded"
                            alt="Button Detail Wrap Skirt"
                            width="152px"
                            height="152px"
                            src={
                              imgA.length !== 0
                                ? imgA[0].medium
                                : '/images/placeholder.png'
                            }
                          />
                        </div>
                        <div className="carousel-module-product-info">
                          {/*<h3 className="list-product-brand carousel-module-product-brand">
                              {name}
                            </h3>*/}
                          <span className="list-product-price has-special">
                            {variants[0].price < variants[0].mrp && (
                              <span
                                style={{ color: '#999' }}
                                className="price-regular line-through">
                                {`Rs ${variants[0].mrp.toLocaleString()}`}
                              </span>
                            )}

                            <span className="price-special">{`Rs ${variants[0].price.toLocaleString()}`}</span>
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>

      {settings.banners !== undefined &&
        settings.banners[Cats['women']] !== undefined &&
        settings.banners[Cats['women']].browse_by_brand?.length && (
          <div style={{ width: '100%', background: '#fff' }}>
            <h1
              style={{ margin: '20px 0px', textAlign: 'center' }}
              className="carousel-module-title">
              Deal Zone
            </h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {settings.banners[Cats['women']].browse_by_brand.map(
                ({ _id, link, img }, index) => {
                  return (
                    <a
                      key={'b' + _id}
                      href={link}
                      onClick={e => {
                        e.preventDefault()
                        push(link)
                      }}
                      style={{
                        width: '24%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <img
                        src={
                          img
                            ? settings.CDN_URL + img
                            : '/images/placeholder.png'
                        }
                        alt="picture"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </a>
                  )
                }
              )}
            </div>
          </div>
        )}

      {settings.banners != undefined &&
      settings.banners[Cats['women']] !== undefined &&
      settings.banners[Cats['women']].browse_by_size?.length ? (
        <>
          <h1
            style={{ margin: '20px 0px', textAlign: 'center' }}
            className="carousel-module-title">
            @brandcity
          </h1>
          <div className="instagram_wrapper_mobile">
            {settings.banners[Cats['women']].browse_by_size.map(
              ({ link, img, _id }, index) => {
                return (
                  <a
                    key={'img' + index}
                    href={link}
                    onClick={e => {
                      e.preventDefault()
                      push(link)
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      })
                    }}
                    className="instagram_entry_mobile">
                    <img
                      src={
                        img ? settings.CDN_URL + img : '/images/placeholder.png'
                      }
                      alt="picture"
                      className="instagram_posts_wrapper_img"
                    />
                    <div className="instagram_posts_wrapper_on_hover">
                      <button className="instagram_posts_wrapper_btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram">
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </button>
                    </div>
                  </a>
                )
              }
            )}
          </div>
        </>
      ) : null}

      <div className="page-wrapper grid view">
        <div className="row">
          <section className="carousel-module-container multi">
            <div className="carousel-module">
              <div className="carousel-module-header">
                <h1
                  style={{ margin: '20px 0px', textAlign: 'center' }}
                  className="carousel-module-title">
                  New Arrivals
                </h1>
              </div>
              <InfiniteScroll
                dataLength={newArrivals.length}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                next={fetchNewListings}
                hasMore={true}
                loader={
                  <div
                    style={{
                      width: 200,
                      height: 50,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '1px solid #333',
                      margin: '30px auto',
                      borderRadius: 15,
                    }}>
                    <Loader
                      style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      type="Oval"
                      color="#000"
                      height={'24'}
                      width={'24'}
                    />
                  </div>
                }>
                <div className="carousel-module-wrapper">
                  <div className="product-list">
                    {!isEmpty(newArrivals)
                      ? newArrivals.map(
                          (
                            { _id, name, slug: slugX, variants, imgA, group },
                            index
                          ) => {
                            const inWishList = !isEmpty(wishlist)
                              ? wishlist.find(
                                  found => found.product._id === _id
                                )
                              : null
                            let Discount = 0
                            let Off = 0
                            if (variants[0].price) {
                              Discount =
                                variants[0].mrp.toFixed(0) -
                                variants[0].price.toFixed(0)
                              Off =
                                (Discount / variants[0].mrp.toFixed(0)) * 100
                            }
                            return (
                              <div key={_id} className="list-product">
                                <div className="wishlist">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      changeWishList({
                                        _id,
                                        name,
                                        imgA,
                                        keyFeatures: [],
                                        variants,
                                      })
                                    }
                                    className={`wishlist-button${
                                      inWishList ? ' active' : ''
                                    }`}>
                                    <svg
                                      className="wishlist-icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24">
                                      <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
                                    </svg>
                                  </button>
                                </div>
                                <div
                                  className="list-product-link is-shadow-product"
                                  title={name}>
                                  <a
                                    href={`/${
                                      pathname.split('/')[1]
                                    }/listing/${slugX}?id=${_id}`}
                                    onClick={e => {
                                      e.preventDefault()
                                      Router.push({
                                        pathname: `/${
                                          pathname.split('/')[1]
                                        }/listing/${slugX}`,
                                        query: { id: _id },
                                      })
                                    }}
                                    className="viewable">
                                    <div
                                      className="list-product-imageWrapper"
                                      style={{
                                        width: '174px',
                                        height: '285px',
                                      }}>
                                      <img
                                        className="list-product-image"
                                        alt={name}
                                        // width="140px"
                                        // height="207px"
                                        src={
                                          imgA.length !== 0
                                            ? imgA[0].medium
                                            : '/images/placeholder.png'
                                        }
                                      />
                                    </div>
                                  </a>
                                  <div className="list-product-details">
                                    <h3 className="list-product-brand">
                                      {name}
                                    </h3>
                                    <span className="list-product-price has-special">
                                      {Off !== 0 && (
                                        <span className="price-regular is-discounted">
                                          {`Rs ${variants[0].mrp.toLocaleString()}`}
                                        </span>
                                      )}
                                      <span className="price-special">{`Rs ${variants[0].price.toLocaleString()}`}</span>
                                      {Off !== 0 && (
                                        <span className="list-reduction_tag">
                                          -{Math.round(Off)}%
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                  <div className="size_options_container_mobile">
                                    <div className="sizeOptions__wrapper">
                                      <ul className="size_options-mobile">
                                        {variants.map(
                                          ({
                                            _id: vid,
                                            size: sizeX,
                                            active: vActive,
                                            stock,
                                          }) => {
                                              return (
                                                <li
                                                  key={sizeX}
                                                  onClick={() => {
                                                    setSelectedItem({
                                                      _id,
                                                      vid,
                                                    })
                                                  }}
                                                  style={{
                                                    backgroundColor:
                                                      selectedItem?.vid === vid
                                                        ? '#000'
                                                        : '#fff',
                                                    color:
                                                      selectedItem?.vid === vid
                                                        ? '#fff'
                                                        : '#000',
                                                    pointerEvents: stock ===0 ?'none': 'auto',
                                                    opacity: stock ===0 ? 0.55: 1,
                                                  }}
                                                  className="size_listing-mobile">
                                                  {stock ===0 ?<div className='size_listing-mobile_no_stock'>
                                                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'
                                                         viewBox='0 0 24 24' fill='none' stroke='currentColor'
                                                         strokeWidth='2' strokeLinecap='round'
                                                         strokeLinejoin='round' className='feather feather-x'>
                                                      <line x1='18' y1='6' x2='6' y2='18'></line>
                                                      <line x1='6' y1='6' x2='18' y2='18'></line>
                                                    </svg> </div>:null }
                                                  {sizeX}
                                                </li>
                                              )
                                          }
                                        )}
                                      </ul>
                                      <button
                                        onClick={() => {
                                          if (selectedItem.vid) {
                                            changeCart(
                                              selectedItem._id,
                                              selectedItem.vid
                                            )
                                          } else {
                                            alert('Please select size ')
                                          }
                                        }}
                                        style={{ marginTop: 6 }}
                                        className="add-to-cart-mobile">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24">
                                          <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
                                        </svg>
                                        ADD TO CART
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                        )
                      : null}
                  </div>
                </div>
              </InfiniteScroll>
            </div>
          </section>
        </div>
        )}
      </div>
      <style jsx>{`
        .wrapper {
          width: 95vw;
          margin: 0 2.5vw;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
          grid-column-gap: 2.5vw;
          grid-row-gap: 2.5vw;
        }
      `}</style>
      {/* <Whatsapp />  */}
      {/* <FBChat
        pageId="107252286033498"
        themeColor="#dd1e26"
        htmlRef={window.location.pathname}
      /> */}
    </div>
  )
}

export default Variant
