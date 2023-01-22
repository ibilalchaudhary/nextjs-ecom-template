/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
// @ts-nocheck
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable semi */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthModal, chooseBrand, LogOut } from '@redux/action'
import ARRAY from '@utilts/Brands'
import { Switch, Typography, Grid } from '@material-ui/core'

const SideBar = ({
  sideBarVisible,
  setSideBarVisibility,
  displayType,
  changeDisplay,
}) => {
  const { push, back, replace } = useRouter()
  const dispatch = useDispatch()
  const [brandsOpened, setBrandsOpened] = useState(false)
  const { variants, firstName, brand, loggedIn } = useSelector(
    ({
      MEGAMENU,
      USER: { firstName, lastName, loggedIn },
      APPSTATE: { brand },
    }) => ({
      variants: MEGAMENU.WholeMegaMenu,
      firstName,
      loggedIn,
      brand,
    })
  )
  const FoundBrand = ARRAY.filter(item => item.name === brand)
  const { settings } = useSelector(({ SETTINGS: { settings } }) => ({
    settings,
  }))
  return (
    <div
      className="sidebar"
      style={{
        touchAction: 'pan-y',
        userSelect: 'none',
        WebkitUserDrag: 'none',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}>
      <div
        className={`overlay${sideBarVisible ? ' is-visible' : ''}`}
        onClick={() => setSideBarVisibility(false)}
      />
      <div className={`sidebar-wrapper${sideBarVisible ? ' is-visible' : ''}`}>
        <div className="sidebar-profile">
          <div href="#" className="profile-pic" style={{
            backgroundImage: `url(${
              settings.logoMobile
                ? settings.CDN_URL + encodeURI(settings.logoMobile)
                : ''
            })`,
          }}/>
          <div className="profile-user">
            <h4 className="profile-user-name">
              <span> Hi, {`${loggedIn ? firstName : 'Guest'}`} </span>
            </h4>
            {!loggedIn && (
              <a
                href=""
                onClick={e => {
                  e.preventDefault()
                  !loggedIn &&
                    (setAuthModal(true)(dispatch), setSideBarVisibility(false))
                }}
                className="profile-user-logout">
                Login
              </a>
            )}
          </div>
          <a
            href="#"
            onClick={e => {
              e.preventDefault()
              push('/')
            }}
            className="profile-sidebarClose"
          />
        </div>
        <ul className="sidebar-list">
          {/* <li className="sidebar-list-item">
            <a
              onClick={e => {
                e.preventDefault()
                push('/wishlist')
              }}
              className="sidebar-list-item-link list-wishlist"
              href="/wishlist/">
              Wishlist
            </a>
          </li> */}
          {variants.length !== 0 &&
            variants.map(({ name, slug }) => (
              <li key={slug} className="sidebar-list-item">
                <a
                  onClick={e => {
                    e.preventDefault()
                    push(`/${slug}`)
                  }}
                  className={`sidebar-list-item-link list-${
                    slug === 'accessories' ? 'kids' : name.toLowerCase()
                  }`}
                  href={`/${slug}`}>
                  {name}
                </a>
              </li>
            ))}
          {/*{brand !== 'nonBranded' && (
            <li className="sidebar-list-item">
              <a
                href="#"
                className="toggle_link sidebar-list-item-link brandSelector"
                onClick={() => {
                  setBrandsOpened(true)
                }}>
                Select Brand
              </a>
              <div
                className={`toggle-content ${brandsOpened ? 'is-active' : ''}`}>
                <a
                  href=""
                  className="hide-content-link"
                  onClick={e => {
                    e.preventDefault()
                    setBrandsOpened(false)
                  }}>
                  <i className="icon-back"></i>
                  <span className="hide-content-text">Back</span>
                </a>
                <ul className="nested-list countries-list">
                  {ARRAY.map(({ name, imgSrc }, index) => (
                    <li
                      key={'Brand' + index}
                      onClick={() => {
                        chooseBrand(name)(dispatch)
                        setBrandsOpened(false)
                      }}
                      className="nested-list-item">
                      <span
                        style={{
                          display: '-webkit-flex',
                          display: '-ms-flexbox',
                          display: 'flex',
                          alignItems: 'center',
                          color: '#222',
                          //lineHeight: '24px',
                          fontSize: '14px',
                          padding: '15px 20px',
                        }}
                        href="#">
                        <img
                          src={imgSrc}
                          style={{
                            height: '12vw',
                            width: '12vw',
                            margin: '0 3.5vw 0 0',
                          }}
                        />
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )}*/}
          <li className="sidebar-list-item">
            <a
              onClick={e => {
                e.preventDefault()
                loggedIn ? push('/account') : setAuthModal(true)(dispatch)
                setSideBarVisibility(false)
              }}
              className="sidebar-list-item-link list-account">
              Account
            </a>
          </li>
          <li className="sidebar-list-item">
            <a
              onClick={e => {
                e.preventDefault()
                loggedIn ? push('/account/myorders') : setAuthModal(true)(dispatch)
                setSideBarVisibility(false)
              }}
              className="sidebar-list-item-link list-account">
              Track Your Orders
            </a>
          </li>
          <li className="sidebar-list-item">
            <a
              onClick={e => {
                e.preventDefault()
                setSideBarVisibility(false)
                push('/mobile/content/contact-us')
              }}
              className="sidebar-list-item-link list-customerservice">
              Contact Us
            </a>
          </li>
          <li className="sidebar-list-item">
            <a
              onClick={e => {
                e.preventDefault()
                setSideBarVisibility(false)
                push('/mobile/content/quality-policy')
              }}
              className="sidebar-list-item-link list-customerservice">
              Quality Policy
            </a>
          </li>
          <li className="sidebar-list-item">
            <a
              onClick={e => {
                e.preventDefault()
                setSideBarVisibility(false)
                push('/mobile/content/about-us')
              }}
              className="sidebar-list-item-link list-aboutus">
              About Us
            </a>
          </li>
          {loggedIn && (
            <li className="sidebar-list-item">
              <a
                onClick={e => {
                  e.preventDefault()
                  LogOut()(dispatch)
                  setSideBarVisibility(false)
                  replace('/')
                }}
                className="sidebar-list-item-link list-logout">
                Logout
              </a>
            </li>
          )}
          <li>
            <div className="footer-badges">
              {/* <div className="footer-badges-container__icons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.namshi.android"
                  rel="follow"
                  target="_blank"
                  title="Android App On Google Play">
                  <img src="https://a.namshicdn.com/cms/small/google-play-badge-bw.png" />
                </a>
                <a
                  href="https://itunes.apple.com/us/app/namshi-online-fashion-shopping/id840127349?mt=8"
                  rel="follow"
                  title="Download on the App Store">
                  <img src="https://a.namshicdn.com/cms/small/apple-store-bw.png" />
                </a>
              </div>
               */}
              <div className="footer-copyright">
                <b>
                  © <span id="copyrightYear">2022</span> Brandcity
                </b>
                . All Rights Reserved.
              </div>
            </div>
          </li>
        </ul>
        <div className="switchButton">
          <Typography component="div">
            <Grid
              component="label"
              container
              alignItems="center"
              justifyContent="center"
              spacing={1}>
              <Grid item>Desktop</Grid>
              <Grid item>
                <Switch
                  color="primary"
                  checked={displayType === 'mobile'}
                  onChange={changeDisplay}
                  //color="default"
                  inputProps={{ 'aria-label': 'Device Mode Changer' }}
                />
              </Grid>
              <Grid item>Mobile</Grid>
            </Grid>
          </Typography>
        </div>
      </div>
      <style jsx>{`
        .brandSelector::before {
          background-image: url(${FoundBrand.length !== 0
            ? FoundBrand[0].imgSrc
            : '/images/placeholder.png'});
        }
        //@media (max-width: 768px) {
        //  .switchButton {
        //    display: none;
        //  }
        //}
      `}</style>
    </div>
  )
}

export default SideBar;
