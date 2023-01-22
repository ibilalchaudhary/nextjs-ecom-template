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
                <svg
                  className="site-header__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
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
                <svg
                  className="site-header__icon"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                  />
                  <circle
                    cx={12}
                    cy={7}
                    r={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                  />
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
                <svg
                  className="site-header__icon"
                  enableBackground="new 0 0 50 50"
                  height={24}
                  viewBox="0 0 50 50"
                  width={24}
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8,14L4,49h42l-4-35H8z"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                  />
                  <path
                    d="M34,19c0-1.241,0-6.759,0-8  c0-4.971-4.029-9-9-9s-9,4.029-9,9c0,1.241,0,6.759,0,8"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                  />
                  <circle cx={34} cy={19} r={2} />
                  <circle cx={16} cy={19} r={2} />
                </svg>
                <span id="cartCount" className="site-header__cart-count">
                  <i id="cart_count" className="cart-count filled">
                    {cart ? cart.items.length : 0}
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
