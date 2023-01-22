import React, { Fragment, useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import Slider from 'react-slick'
import { APIFuncs } from '@utilts/APIs'
import FBChat from 'react-messenger-customer-chat'
import { isEmpty } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import {
  addorRemoveFromCart,
  addOrRemoveFromWishlist,
  setAuthModal,
} from '@redux/action'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from 'react-loader-spinner'

const Cats = {
  women: 'cat1',
  men: 'cat2',
  kids: 'cat3',
  home: 'cat4',
}
const sliderSettings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  rtl: false,
  arrows: true,
}
const sliderSettingsPrice = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  rtl: false,
  arrows: true,
}
const sliderSettingsMain = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  rtl: false,
  dots: false,
  arrows: false,
}

const Variant = ({ vIndex, variants, settings }) => {
  const {
    query: { search, vSlug },
    push,
    pathname,
    back,
  } = useRouter()
  const [listings, setListings] = useState({})
  const [newArrivals, setNewArrivals] = useState([])
  const [trending, setTrending] = useState({})
  const [bestSeller, setBestSeller] = useState({})
  const [page, setPage] = useState(1)
  const [selectedItem, setSelectedItem] = useState({})
  const [notif, setNotif] = useState(false)
  const [loading, setLoading] = useState(false)

  const variant = variants[vIndex]
  const { title } = settings

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
    APIFuncs.GetSubCategoryContent(vSlug, 1, '&sort=-createdAt')
      .then(response => {
        setListings(response)
      })
      .catch(error => console.log('error', error))
    APIFuncs.GetSubCategoryContent('sneakers', 1, '&sort=-createdAt')
      .then(response => {
        setTrending(response)
      })
      .catch(error => console.log('error', error))
    APIFuncs.GetSubCategoryContent('canvas', 1, '&sort=-createdAt')
      .then(response => {
        setBestSeller(response)
      })
      .catch(error => console.log('error', error))
  }, [])

  const fetchNewListings = () => {
    APIFuncs.GetSubCategoryContent(vSlug, page, '&sort=-createdAt').then(
      res => {
        if (page === 1) {
          setNewArrivals(res.data)
        } else {
          setNewArrivals(newArrivals.concat(res.data))
        }
      }
    )
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


  return (
    <div id="content">
      <Head>
        <title>{`${!!variant ? variant.q : ''} | ${title}`}</title>
      </Head>
      <div className="site_width_container">
        <div className="responsive-layout">
          {settings.banners !== undefined &&
            settings.banners[Cats[vSlug]] !== undefined && (
              <Slider
                className="multiple-slide-carousel main-carousel home-slider"
                {...sliderSettingsMain}>
                {settings.banners[Cats[vSlug]].slider.map(
                  ({ _id, link, img }, index) => {
                    return (
                      <a
                        key={_id + 'banner'}
                        href={link}
                        className="home_swiper_image_wrapper"
                        onClick={e => {
                          e.preventDefault()
                          push(link)
                        }}>
                        <img
                          src={
                            img
                              ? settings.CDN_URL + img
                              : '/images/placeholder.png'
                          }
                          className="home_swiper_image"
                        />
                      </a>
                    )
                  }
                )}
              </Slider>
            )}
          {/*<div className="responsive-layout__container-wrapper">*/}
          {/*  <div className="responsive-layout__row responsive-layout__categories">*/}
          {/*    <div className="responsive-layout__single-container">*/}
          {/*      <div className="responsive-layout__heading">New Arrivals</div>*/}
          {/*      <Slider className="multiple-slide-carousel" {...sliderSettings}>*/}
          {/*        {!isEmpty(listings.data) &&*/}
          {/*          listings.data*/}
          {/*            .slice(0, 10)*/}
          {/*            .map(({ imgA, name, slug, variants, _id }) => {*/}
          {/*              const lName = name.toLowerCase()*/}
          {/*              const properName =*/}
          {/*                lName.charAt(0).toUpperCase() + lName.slice(1)*/}
          {/*              return (*/}
          {/*                <a*/}
          {/*                  key={name + 'g'}*/}
          {/*                  href={`${pathname.replace(*/}
          {/*                    '[vSlug]',*/}
          {/*                    vSlug*/}
          {/*                  )}/listing/${slug}?id=${_id}`}*/}
          {/*                  className="responsive-layout__single-container"*/}
          {/*                  onClick={e => {*/}
          {/*                    e.preventDefault()*/}
          {/*                    Router.push({*/}
          {/*                      pathname: `/${vSlug}/listing/${slug}`,*/}
          {/*                      query: { id: _id },*/}
          {/*                    })*/}
          {/*                  }}*/}
          {/*                  style={{*/}
          {/*                    width: '169px',*/}
          {/*                    marginRight: 20,*/}
          {/*                  }}>*/}
          {/*                  <div className="responsive-layout__categories--image">*/}
          {/*                    <img*/}
          {/*                      src={*/}
          {/*                        imgA.length !== 0*/}
          {/*                          ? imgA[0].medium*/}
          {/*                          : '/images/placeholder.png'*/}
          {/*                      }*/}
          {/*                      width={169}*/}
          {/*                      height={169}*/}
          {/*                    />*/}
          {/*                  </div>*/}
          {/*                  <div className="carousel-module-product-info">*/}
          {/*                    /!* <h3 className="list-product-brand carousel-module-product-brand">*/}
          {/*                    {name}*/}
          {/*                  </h3>*!/*/}
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
          {/*              )*/}
          {/*            })}*/}
          {/*      </Slider>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  /!*end arrival widget*!/*/}
          {/*</div>*/}

          {/*start Browse by category*/}
          {settings.banners != undefined &&
            settings.banners[Cats[ vSlug ? vSlug :'women']] !== undefined &&
            settings.banners[Cats[vSlug ? vSlug :'women']].mobile_banner_1?.length &&
            settings.banners[Cats[vSlug? vSlug :'women']].mobile_banner_2?.length &&
            (
              <>
                <div className="responsive-layout__heading">
                  Browse by category
                </div>
                <div className="shop_by_categories_wrapper">
                  {settings.banners[Cats[vSlug ? vSlug :'women']].mobile_banner_1.map(
                    ({ _id, link, img }, index) => {
                      return (
                        <a
                          key={_id + 'women'}
                          href={link}
                          onClick={e => {
                            e.preventDefault()
                            push(link)
                            window.scrollTo({
                              top: 0,
                              behavior: 'smooth',
                            })
                          }}
                          className="shop_by_categories_entry">
                          <img
                            src={
                              img
                                ? settings.CDN_URL + img
                                : '/images/placeholder.png'
                            }
                            alt="picture"
                            className="shop_by_categories_entry_img"
                          />
                        </a>
                      )
                    }
                  )}
                  {settings.banners[Cats[vSlug? vSlug :'women']].mobile_banner_2.map(
                    ({ _id, link, img }, index) => {
                      return (
                        <a
                          key={_id + 'men'}
                          href={link}
                          onClick={e => {
                            e.preventDefault()
                            push(link)
                            window.scrollTo({
                              top: 0,
                              behavior: 'smooth',
                            })
                          }}
                          className="shop_by_categories_entry">
                          <img
                            src={
                              img
                                ? settings.CDN_URL + img
                                : '/images/placeholder.png'
                            }
                            alt="picture"
                            className="shop_by_categories_entry_img"
                          />
                        </a>
                      )
                    }
                  )}
                </div>
              </>
            )}

          <div className='responsive-layout__row responsive-layout__categories'>
            <div className='responsive-layout__single-container'>
              <div className='responsive-layout__heading'>
                Recommended Categories
              </div>
              <Slider className='multiple-slide-carousel' {...sliderSettings}>
                {variant.children.map(
                  ({
                     name,
                     hc_header_img_url,
                     slug,
                     children,
                   }) => {
                    const lName = name.toLowerCase()
                    const properName =
                      lName.charAt(0)
                        .toUpperCase() + lName.slice(1)
                    return (
                      <a
                        key={name + 'f'}
                        href={`${pathname.replace('[vSlug]', vSlug)}/${slug}`}
                        className='responsive-layout__single-container'
                        onClick={e => {
                          e.preventDefault()
                          Router.push(
                            `${pathname.replace('[vSlug]', vSlug)}/${slug}`,
                          )
                        }}
                        style={{
                          width: '169px',
                          marginRight: 20,
                        }}>
                        <div className='responsive-layout__categories--image'>
                          <img
                            src={
                              hc_header_img_url ||
                              (children[0]
                                ? children[0].hc_header_img_url
                                : '/images/placeholder.png')
                            }
                            width={169}
                            height={169}
                          />
                        </div>
                        {/* <div className='responsive-layout__categories--title'>
                          {properName}
                        </div>*/}
                      </a>
                    )
                  },
                )}
              </Slider>
            </div>
          </div>

          {/*start Categories for kids*/}
          {settings.banners !== undefined &&
            settings.banners[Cats[vSlug?vSlug:'women']] !== undefined &&
            settings.banners[Cats[vSlug?vSlug:'women']].mini_banners?.length &&
            (
              <>
                <div
                  style={{ marginTop: 38 }}
                  className="responsive-layout__heading">
                  Discounts
                </div>
                <div className="shop_by_categories_wrapper">
                  {settings.banners[Cats[vSlug?vSlug:'women']].mini_banners.map(
                    ({ _id, link, img }, index) => {
                      return (
                        <a
                          key={'b' + _id}
                          href={link}
                          onClick={e => {
                            e.preventDefault()
                            push(link)
                          }}
                          className="shop_by_categories_medium_entry">
                          <img
                            src={
                              img
                                ? settings.CDN_URL + img
                                : '/images/placeholder.png'
                            }
                            alt="picture"
                            className="shop_by_categories_entry_img_discount"
                          />
                        </a>
                      )
                    }
                  )}
                </div>
              </>
            )}

          {/*end Categories for kids*/}


          {/*start best seller widget*/}
            <div className="responsive-layout__row responsive-layout__categories">
              <div className="responsive-layout__single-container">
                <div className="responsive-layout__heading">Best Sellers</div>
                <Slider className="multiple-slide-carousel" {...sliderSettings}>
                  {!isEmpty(bestSeller.data) &&
                    bestSeller.data
                      .slice(0, 10)
                      .map(({ imgA, name, slug, variants, _id }) => {
                        const lName = name.toLowerCase()
                        const properName =
                          lName.charAt(0).toUpperCase() + lName.slice(1)
                        return (
                          <a
                            key={name + 'go'}
                            href={`${pathname.replace(
                              '[vSlug]',
                              vSlug
                            )}/listing/${slug}?id=${_id}`}
                            className="responsive-layout__single-container"
                            onClick={e => {
                              e.preventDefault()
                              Router.push({
                                pathname: `/${vSlug}/listing/${slug}`,
                                query: { id: _id },
                              })
                            }}
                            style={{
                              width: '169px',
                              marginRight: 20,
                            }}>
                            <div className="responsive-layout__categories--image">
                              <img
                                src={
                                  imgA.length !== 0
                                    ? imgA[0].medium
                                    : '/images/placeholder.png'
                                }
                                width={169}
                                height={169}
                              />
                            </div>
                            <div className="carousel-module-product-info">
                              {/* <h3 className="list-product-brand carousel-module-product-brand">
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
                        )
                      })}
                </Slider>
              </div>
            </div>
          {/*end best seller widget*/}


          {/*start best seller widget*/}


          {settings.banners !== undefined &&
            settings.banners[Cats['women']] !== undefined &&
            settings.banners[Cats['women']].browse_by_brand?.length &&
            (
                <div className="responsive-layout__row responsive-layout__categories">
                  <div className="responsive-layout__single-container">
                    <div className="responsive-layout__heading">Deal Zone</div>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:30}}>
                      {settings.banners[Cats['women']].browse_by_brand.map(
                        ({ _id, link, img }, index) => {
                          return (
                          <a key={'b' + _id}
                             href={link}
                             onClick={e => {
                               e.preventDefault()
                               push(link)
                             }} style={{width:'24%',height:280,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img  src={
                              img
                                ? settings.CDN_URL + img
                                : '/images/placeholder.png'
                            } alt='picture' style={{width:'100%',height:'100%',objectFit:'contain'}} />
                          </a>
                        )
                      })}

                    </div>
                  </div>
                </div>
            )}
          {/*end best seller widget*/}



          {/*start instagram posts*/}
          {settings.banners !== undefined &&
            settings.banners[Cats['women']] !== undefined &&
            settings.banners[Cats['women']].browse_by_size.length ?
            (
              <>
                <div
                  style={{ marginTop: 40 }}
                  className="responsive-layout__heading">
                  @brandcity
                </div>
                <div className="instagram_posts_wrapper">
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
                          className="instagram_posts_wrapper_entry">
                          <img
                            src={
                              img
                                ? settings.CDN_URL + img
                                : '/images/placeholder.png'
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
                                <line
                                  x1="17.5"
                                  y1="6.5"
                                  x2="17.51"
                                  y2="6.5"></line>
                              </svg>
                            </button>
                          </div>
                        </a>
                      )
                    }
                  )}
                </div>
              </>
            ):null}
          {/*end instagram posts*/}


          {/*start trending widget*/}
            <div className="responsive-layout__row responsive-layout__categories">
              <div className="responsive-layout__single-container">
                <div className="responsive-layout__heading">Trending</div>
                <Slider className="multiple-slide-carousel" {...sliderSettings}>
                  {!isEmpty(trending.data) &&
                    trending.data
                      .slice(0, 10)
                      .map(({ imgA, name, slug, variants, _id }) => {
                        const lName = name.toLowerCase()
                        const properName =
                          lName.charAt(0).toUpperCase() + lName.slice(1)
                        return (
                          <a
                            key={name + 'get'}
                            href={`${pathname.replace(
                              '[vSlug]',
                              vSlug
                            )}/listing/${slug}?id=${_id}`}
                            className="responsive-layout__single-container"
                            onClick={e => {
                              e.preventDefault()
                              Router.push({
                                pathname: `/${vSlug}/listing/${slug}`,
                                query: { id: _id },
                              })
                            }}
                            style={{
                              width: '169px',
                              marginRight: 20,
                            }}>
                            <div className="responsive-layout__categories--image">
                              <img
                                src={
                                  imgA.length !== 0
                                    ? imgA[0].medium
                                    : '/images/placeholder.png'
                                }
                                width={169}
                                height={169}
                              />
                            </div>
                            <div className="carousel-module-product-info">
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
                        )
                      })}
                </Slider>
              </div>
            </div>
          {/*end trending widget*/}


          <div style={{width:1360}} className="responsive-layout__container-wrapper">
            <div className="responsive-layout__row responsive-layout__categories">
              <div className="responsive-layout__single-container">
                <div className="responsive-layout__heading">New Arrivals</div>
                <div className="catalog_content">
                  {loading && (
                    <span className="pageLoader is-visible">
                      <div className="loading is-center" />
                    </span>
                  )}
                  <div>
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
                      <ul id="catalog_listings" className="less">
                        {!isEmpty(newArrivals)
                          ? newArrivals.map(
                              ({
                                _id,
                                name,
                                slug: slugXXX,
                                variants,
                                imgA,
                                img,
                                active,
                              }) => {
                                const inWishList = !isEmpty(wishlist)
                                  ? wishlist.find(
                                      ({ product }) => product._id === _id
                                    )
                                  : null
                                let Discount = 0
                                let Off = 0
                                if (variants[0].price) {
                                  Discount =
                                    variants[0].mrp.toFixed(0) -
                                    variants[0].price.toFixed(0)
                                  Off =
                                    (Discount / variants[0].mrp.toFixed(0)) *
                                    100
                                }
                                return (
                                  <li
                                    key={_id}
                                    // onMouseEnter={() =>
                                    //   setListingHover(_id, true)
                                    // }
                                    // onMouseLeave={() =>
                                    //   setListingHover(_id, false)
                                    // }
                                    // className={`listing ${
                                    //   listingHover[_id] ? 'active' : 'closed'
                                    // }`}
                                    className="listing active">
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
                                    <a
                                      onClick={e => {
                                        e.preventDefault()
                                        window.scrollTo({
                                          top: 0,
                                          behavior: 'smooth',
                                        })
                                        push({
                                          pathname: `/${vSlug}/listing/${slugXXX}`,
                                          query: { id: _id },
                                        })
                                      }}
                                      className="product_listing_link"
                                      title={name}>
                                      <div className="image_container">
                                        <img
                                          alt={name}
                                          src={
                                            imgA.length !== 0
                                              ? imgA[0].large
                                              : '/images/placeholder.png'
                                          }
                                        />
                                        <div
                                          className="preloader"
                                          style={{ visibility: 'hidden' }}
                                        />
                                      </div>
                                      <div className="details_container">
                                        <p className="brand">{name}</p>
                                        <p className="price">
                                          {Off !== 0 && (
                                            <span className="pre_reduction">{`Rs ${variants[0].mrp.toLocaleString()}`}</span>
                                          )}
                                          <span className="reduction">{`Rs ${variants[0].price
                                            .toFixed(0)
                                            .toLocaleString()}`}</span>
                                          {Off !== 0 && (
                                            <span className="reduction_tag_as_catalog">
                                              -{Math.round(Off)}%
                                            </span>
                                          )}
                                        </p>
                                      </div>
                                    </a>
                                    <div className="size_options_container hoverToggled">
                                      <div className="sizeOptions__wrapper">
                                        <ul className="size_options">
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
                                                    className="listingAddToBag size_listing simple ">
                                                    {stock ===0? <div className='size_listing_no_stock'>
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                           viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                           strokeWidth="2" strokeLinecap="round"
                                                           strokeLinejoin="round" className="feather feather-x">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                      </svg>
                                                    </div>:null}
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
                                          className="add-to-cart">
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
                                  </li>
                                )
                              }
                            )
                          : null}
                      </ul>
                    </InfiniteScroll>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>

        {notif && (
          <div id="continueShopping" data-client-render>
            <div className={`modal`}>
              <div
                onClick={() => {
                  setNotif(false)
                }}
                className="model-shadow"
              />
              <div
                className="modal-content modal-fadeIn is-center"
                style={{ margin: '30px 35vw' }}>
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
                <div className="productContinueShopping">
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
                    className="productContinueShopping-subheading"
                    style={{
                      fontWeight: '600',
                      fontSize: '2.5vh',
                      color: '#111',
                    }}>
                    What do you want to do now?
                  </div>
                  <div
                    className="productContinueShopping-actions"
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <a
                      href=""
                      onClick={e => {
                        e.preventDefault()
                        setNotif(false)
                        setSelectedItem({})
                      }}
                      className="productContinueShopping-actions-link go-back"
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
                      href="/cart"
                      onClick={e => {
                        e.preventDefault()
                        push('/cart')
                      }}
                      style={{
                        width: '90%',
                        padding: '3vh 0',
                        borderRadius: '0.5vh',
                        textDecoration: 'none',
                      }}
                      className="productContinueShopping-actions-button  show-cart">
                      View Cart
                    </a>
                  </div>
                </div>
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
    </div>
  )
}


export default Variant;
