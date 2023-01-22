// @ts-nocheck
/* eslint-disable import/newline-after-import */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState, Fragment } from 'react'
import Router, { useRouter } from 'next/router'
import { GetMegaMenuNew, chooseBrand } from '@redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthModal } from '@redux/action'
import Config from '@config/index'
import Brands from '@utilts/Brands'
import firebase from '../../firebase/firebase'
import axios from 'axios'

const Header = ({ renderSearch }) => {
  const [search, setSearch] = useState('')
  const { query, push } = useRouter()
  const { vSlug } = query
  const [hControls1, setHControls1] = useState(false)
  const [hControls2, setHControls2] = useState(false)
  const [hControls3, setHControls3] = useState(false)
  const [hControls4, setHControls4] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const dispatch = useDispatch()
  const { cart, variants, brand, loggedIn, settings, userToken } = useSelector(
    ({ USER, MEGAMENU, APPSTATE: { brand }, SETTINGS: { settings } }) => ({
      cart: USER.cart,
      variants: MEGAMENU.WholeMegaMenu,
      brand,
      loggedIn: USER.loggedIn,
      settings,
      userToken: USER.token,
    })
  )
  useEffect(() => {
    GetMegaMenuNew()(dispatch)
    if (firebase.messaging.isSupported()) {
      const messaging = firebase.messaging()
      if (!messaging.vapidKey) {
        messaging.usePublicVapidKey(
          'BODR8Bpux-KvW0x5AU35_TBE67GlE4eqnFy_jHcOYFMedrSpR70sF7LGW6I2tBoSaXZRt8fdpYwESLy48q50Qso'
        )
      }
      messaging
        .requestPermission()
        .then(() => {
          return messaging.getToken()
        })
        .then(token => {
          // console.log('token', token);
          if (loggedIn) {
            axios.post(
              'https://api.brandcity.com.pk/api/users/tokens',
              { webToken: token },
              {
                headers: {
                  Authorization: `Bearer ${userToken}`,
                },
              }
            )
            axios.post('https://api.brandcity.com.pk/api/tokens', {
              token: token,
              platform: 'web',
            })
          } else {
            axios.post('https://api.brandcity.com.pk/api/tokens', {
              token: token,
              platform: 'web',
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])
  const FoundBrand = Brands.filter(item => item.name === brand)

  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 130 ? "is-sticky-header" : "";
    setSticky(stickyClass);
  };
  const stickyClass = `nav-depth--background ${sticky}`;

  return (
    <div className="site-header">
      {!!Config.desktop.topHeader && (
        <div className="site-header__usps-bg">
          <div className="site-header__topbar">
            <div className="site-header__usps usps">
              <div
                className={`site-header__usp-link cod ${
                  hControls1 ? 'active' : 'closed'
                }`}
                onMouseEnter={() => setHControls1(true)}
                onMouseLeave={() => setHControls1(false)}
                data-nm-hover-toggle="data-nm-hover-toggle">
                <i className="icon-cod" />
                Cash On Delivery
                <div className="details hoverToggled">
                  <ul>
                    <li>Pay online using Credit Card, Debit Card</li>
                    <li>
                      Pay when you receive your order with Cash on Delivery
                    </li>
                    <li>T&amp;Cs Apply</li>
                  </ul>
                </div>
              </div>
              <div
                className={`site-header__usp-link cod ${
                  hControls2 ? 'active' : 'closed'
                }`}
                onMouseEnter={() => setHControls2(true)}
                onMouseLeave={() => setHControls2(false)}
                data-nm-hover-toggle="data-nm-hover-toggle">
                <i className="icon-exchanges" />
                Fast Delivery and Exchanges
                <div className="details hoverToggled">
                  <ul>
                    <li>Same Day Delivery within Lahore</li>
                    <li>
                      Not satisfied with your order? Exchange it for free within
                      7 days
                    </li>
                    <li>Call us on +92 3xxxxxxx for details</li>
                  </ul>
                </div>
              </div>
              <div
                className={`site-header__usp-link cod ${
                  hControls3 ? 'active' : 'closed'
                }`}
                onMouseEnter={() => setHControls3(true)}
                onMouseLeave={() => setHControls3(false)}
                data-nm-hover-toggle="data-nm-hover-toggle">
                <i className="icon-brands" />
                100% Genuine Brands
                <div className="details hoverToggled">
                  <ul>
                    <li>Brands from all across the globe</li>
                    <li>100% genuine and authentic items</li>
                  </ul>
                </div>
              </div>
              {brand !== 'nonBranded' && (
                <div
                  className={`site-header__usp-link ${
                    hControls4 ? 'active' : 'closed'
                  }`}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHControls4(true)}
                  onMouseLeave={() => setHControls4(false)}
                  data-nm-hover-toggle="data-nm-hover-toggle">
                  {brand}
                  <img
                    src={
                      FoundBrand.length !== 0
                        ? FoundBrand[0].imgSrc
                        : '/images/placeholder.png'
                    }
                    style={{ maxHeight: '30px', marginLeft: '5px' }}
                  />
                  <div className="details hoverToggled brandx">
                    <ul style={{ cursor: 'pointer' }}>
                      {Brands.map((item, index) => {
                        const selected = brand === item.name
                        return (
                          <li
                            onClick={() => {
                              chooseBrand(item.name)(dispatch)
                            }}
                            key={'BRAND' + index}
                            style={
                              selected
                                ? {
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: 'grey',
                                    color: '#fff',
                                  }
                                : {
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                  }
                            }>
                            <img
                              src={item.imgSrc}
                              style={{
                                minHeight: '30px',
                                minWidth: '30px',
                                maxHeight: '30px',
                                maxWidth: '30px',
                                marginRight: '10px',
                              }}
                            />
                            {item.name}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="site-header__main">
        <div className="site-header__main--container">
          <div className="site-header__logo">
            <a
              id="site_logo"
              style={{
                backgroundImage: `url(${
                  settings.logo
                    ? settings.CDN_URL + encodeURI(settings.logo)
                    : '/web-desktop/'
                })`,
              }}
              href="/"
              onClick={e => {
                e.preventDefault()
                push('/')
              }}
            />
          </div>
          <div id="main-navigation" className="site-header__main-navigation">
            <div className="nav-depth">
              <ul id="genderSelector">
                {variants.map(({ slug, name, children }) => {
                  const active = vSlug === slug
                  return (
                    <li className={active ? 'active' : ''} key={name}>
                      <a
                        href={`/${slug}`}
                        onClick={e => {
                          // e.preventDefault()
                          push(`/${slug}`)
                        }}>
                        {name}
                      </a>
                      {active === true && (
                        <div className={stickyClass}>
                          <ul>
                            {children.map(
                              (
                                { name, slug: slugX, children: childs },
                                index
                              ) => {
                                const lName = name.toLowerCase()
                                const properName =
                                  lName.charAt(0).toUpperCase() + lName.slice(1)
                                return (
                                  <li
                                    key={name + 'a'}
                                    className={
                                      childs.length === 0 ? 'no-shadow' : ''
                                    }>
                                    <a
                                      className={
                                        properName === 'Sale' ||
                                        properName === 'New arrivals'
                                          ? 'animation-text'
                                          : ''
                                      }
                                      href={`/${slug}/${slugX}?page=1`}
                                      onClick={() => {
                                        Router.push({
                                          pathname: `/${slug}/${slugX}`,
                                          query: {
                                            page: 1,
                                          },
                                        })
                                      }}
                                      title={properName}>
                                      {properName}
                                    </a>
                                    {childs.length > 0 ? (
                                      <div className="nav-depth--background">
                                        <ul>
                                          <li>
                                            <div className="nav-depth--row">
                                              <div className="half">
                                                <h3
                                                  title="Shop by product"
                                                  className="main-navigation--heading">
                                                  Shop by product
                                                </h3>
                                                {childs.map(
                                                  ({ name, slug: slugXX }) => {
                                                    const lName = name.toLowerCase()
                                                    const properName =
                                                      lName
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                      lName.slice(1)
                                                    return (
                                                      <a
                                                        key={name + 'b'}
                                                        href={`/${slug}/${slugX}/${slugXX}`}
                                                        onClick={e => {
                                                          e.preventDefault()
                                                          push({
                                                            pathname: `/${slug}/${slugX}/${slugXX}`,
                                                            query: {
                                                              page: 1,
                                                            },
                                                          })
                                                        }}
                                                        title={properName}>
                                                        {properName}
                                                      </a>
                                                    )
                                                  }
                                                )}
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="nav-depth--row">
                                              <a
                                                href="/women-beauty-products/beauty-bestsellers/"
                                                title="Beauty bestsellers"
                                                className="banner "
                                                style={{}}>
                                                <img
                                                  src="https://a.namshicdn.com/cms/large/navigation_banners/20190827/women/beauty_bestsellers.jpg"
                                                  alt="Beauty bestsellers"
                                                  className=" lazyloaded"
                                                  data-src="https://a.namshicdn.com/cms/large/navigation_banners/20190827/women/beauty_bestsellers.jpg"
                                                  width={168}
                                                  height={146}
                                                />
                                                <div className="banner-title">
                                                  Beauty bestsellers
                                                </div>
                                              </a>
                                              <a
                                                href="/women-beauty-products-fragrances/"
                                                title="Fragrance"
                                                className="banner "
                                                style={{}}>
                                                <img
                                                  src="https://a.namshicdn.com/cms/large/navigation_banners/20190827/women/fragrance.jpg"
                                                  alt="Fragrance"
                                                  className=" lazyloaded"
                                                  data-src="https://a.namshicdn.com/cms/large/navigation_banners/20190827/women/fragrance.jpg"
                                                  width={168}
                                                  height={146}
                                                />
                                                <div className="banner-title">
                                                  Fragrance
                                                </div>
                                              </a>
                                              <a
                                                href="/women-beauty-products/beauty-bestsellers/"
                                                title="Beauty bestsellers"
                                                className="banner "
                                                style={{}}>
                                                <img
                                                  src="https://a.namshicdn.com/cms/large/navigation_banners/20190827/women/beauty_bestsellers.jpg"
                                                  alt="Beauty bestsellers"
                                                  className=" lazyloaded"
                                                  data-src="https://a.namshicdn.com/cms/large/navigation_banners/20190827/women/beauty_bestsellers.jpg"
                                                  width={168}
                                                  height={146}
                                                />
                                                <div className="banner-title">
                                                  Beauty bestsellers
                                                </div>
                                              </a>
                                              <a
                                                href="/women-beauty-products-fragrances/"
                                                title="Fragrance"
                                                className="banner "
                                                style={{}}>
                                                <img
                                                  src="https://a.namshicdn.com/cms/large/navigation_banners/20190827/women/fragrance.jpg"
                                                  alt="Fragrance"
                                                  className=" lazyloaded"
                                                  data-src="https://a.namshicdn.com/cms/large/navigation_banners/20190827/women/fragrance.jpg"
                                                  width={168}
                                                  height={146}
                                                />
                                                <div className="banner-title">
                                                  Fragrance
                                                </div>
                                              </a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    ) : null}
                                  </li>
                                )
                              }
                            )}
                          </ul>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="site-header__right_container">
            <div className="site-header__icons">
              <div id="siteHeaderSearch" className="site-header__search">
                {renderSearch && (
                  <div className="search-header">
                    <div className="search-header-wrapper">
                      <form
                        className="site_search inline_form_container"
                        autoComplete="off"
                        _lpchecked="{1}">
                        <input
                          id="searchInput"
                          type="text"
                          className={`site_search_term term ${
                            searchActive ? 'site_search_term--with-results' : ''
                          }`}
                          value={search}
                          onChange={({ target: { value } }) => {
                            setSearch(value)
                          }}
                          onKeyPress={e => {
                            if (e.key === 'Enter') {
                              e.preventDefault()
                              if (!!search) {
                                push('/search/' + search)
                                setSearch('')
                              } else {
                                push('/search')
                              }
                            }
                          }}
                          name="q"
                          placeholder="Search for items, brands and inspiration"
                          onFocus={() => setSearchActive(true)}
                          onBlur={() => setSearchActive(false)}
                        />
                        <button
                          type="button"
                          onClick={e => {
                            e.preventDefault()
                            if (!!search) {
                              push('/search/' + search)
                              setSearch('')
                            } else {
                              push('/search')
                            }
                          }}
                          className="site_search_submit submit">
                          <i>
                            <svg
                              className="site-header__icon"
                              id="search"
                              height="32px"
                              viewBox="0 0 32 32"
                              width="32px"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z" />
                            </svg>
                          </i>
                        </button>
                      </form>
                    </div>
                    <ul
                      className={`site-search-results ${
                        searchActive ? '' : 'hidden'
                      }`}>
                      <li>
                        <h4 className="site-search-results__title site-search-results__title--bordered">
                          Trending Searches
                        </h4>
                      </li>
                      <li className="site-search-results__item">
                        Women Court Shoes
                      </li>
                      <li className="site-search-results__item">Women Pumps</li>
                      <li className="site-search-results__item">Women Pumps</li>
                      <li className="site-search-results__item">
                        Men Sneakers
                      </li>
                      <li className="site-search-results__item">
                        Men Peshawari
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <a
                className="site-header__wishlist"
                title="Wishlist"
                href="/wishlist"
                onClick={e => {
                  e.preventDefault()
                  push('/wishlist')
                }}>

                <svg xmlns="http://www.w3.org/2000/svg" width="20.541" height="18.561" viewBox="0 0 20.541 18.561">
                  <g id="Iconly_Curved_Heart" data-name="Iconly/Curved/Heart" transform="translate(0.772 0.839)">
                    <g id="Heart">
                      <path id="Stroke_1" data-name="Stroke 1" d="M.372,8.9C-.7,5.546.554,1.381,4.071.249A4.869,4.869,0,0,1,9.5,1.939a4.73,4.73,0,0,1,5.42-1.69c3.516,1.132,4.778,5.3,3.706,8.647-1.67,5.31-7.5,8.076-9.126,8.076S2.1,14.268.372,8.9Z" transform="translate(0 0)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"/>
                    </g>
                  </g>
                </svg>

              </a>
              <a
                href="/account"
                className="site-header__account"
                title="My Account"
                onClick={e => {
                  e.preventDefault()
                  loggedIn ? push('/account') : setAuthModal(true)(dispatch)
                }}>


                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11.5789" cy="7.27803" r="4.77803" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


              </a>
              <a
                id="cart_link"
                className="site-header__cart closed"
                href="/cart"
                onClick={e => {
                  e.preventDefault()
                  push('/cart')
                }}
                title="Go to Cart">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.48626 21.5H15.8341C18.9004 21.5 21.2528 20.3924 20.5847 15.9348L19.8066 9.89357C19.3947 7.66931 17.976 6.81805 16.7311 6.81805H6.55262C5.28946 6.81805 3.95308 7.73339 3.4771 9.89357L2.69907 15.9348C2.13157 19.889 4.4199 21.5 7.48626 21.5Z" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.34896 6.59839C7.34896 4.21232 9.28325 2.27802 11.6693 2.27802V2.27802C12.8183 2.27315 13.9219 2.72618 14.7361 3.53694C15.5503 4.34769 16.008 5.44938 16.008 6.59839V6.59839" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

                </svg>

                <span id="cartCount" className="site-header__cart-count">
                  <i id="cart_count" className="cart-count filled">
                    {cart ? cart?.items?.length : 0}
                  </i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-header .usps .brandx ul li:before {
          background-image: none;
        }

        .site-header .usps .brandx ul li:hover {
          background-color: grey;
          color: #fff;
        }
      `}</style>
    </div>
  )
}

export default Header;
