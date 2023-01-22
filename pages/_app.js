/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable arrow-parens */
/* eslint-disable object-curly-newline */
/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable react/jsx-fragments */
// @ts-nocheck
import React, { Fragment } from 'react'
import { Provider, connect } from 'react-redux'
import App from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import { PersistGate } from 'redux-persist/integration/react'
import cookie from 'js-cookie'
import ReactPixel from 'react-facebook-pixel'
//import { Universal } from '@shopify/react-google-analytics'
import SideBar from '@components/mobile/SideBar'
import TopBar from '@components/mobile/TopBar'
import TabBar from '@components/mobile/TabBar'
import Header from '@components/desktop/Header'
import Footer from '@components/desktop/Footer'
import AuthMobile from '@components/mobile/AuthMobile'
import persistedStore from '@redux/store'
import { updateSettings, GetMegaMenuNew } from '@redux/action'
import LinearProgress from '@material-ui/core/LinearProgress'
import MobileStyles from '@public/css/mainMobile.js'
import DesktopStyles from '@public/css/main.js'
import GoogleAnalytic from '@components/GoogleAnalytics'
import '@public/css/customTheme.css'
import '@public/css/custom.css'
import '@public/css/font_english_all.css'
import 'slick-carousel/slick/slick.css'
import '@public/css/slick/slick-theme.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LandingPage from '@components/VeryFirstLanding'
import { setAuthModal } from '@redux/action'
import { isEmpty } from '@utilts/utilties'

const Arr = ['order-success']
const ArrForBack = [
  '/account/myaddress',
  '/account/myorders',
  '/account/myorders/[id]',
  '/checkout',
  '/cart',
  '/mobile/search',
]
const ArrForNotTabbar = [
  '/account/myaddress',
  '/account/myorders',
  '/account/myorders/[id]',
  '/order-success',
  //'/cart',
  '/checkout',
]
const advancedMatching = undefined // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: true, // enable logs
}
const ArrDeskWithoutHeader = ['search']
class MyApp extends App {
  state = {
    sideBarVisible: false,
    loading: false,
  }

  componentDidMount() {
    const { store } = this.props
    GetMegaMenuNew()(store.dispatch)
    updateSettings()(store.dispatch).then(SETTINGS => {
      if (!!SETTINGS) {
        const { analytics } = SETTINGS
        if (analytics.fbPixels_status === 'enabled') {
          ReactPixel.init(analytics.fbPixels_id, advancedMatching, options)
          ReactPixel.pageView()
        }
      }
    })
    /*Router.events.on('routeChangeComplete', () => this.setState({loading: false}));
    Router.events.on('routeChangeError', () => this.setState({loading: false}));
    Router.events.on('routeChangeStart', this.handleRouteChange); */
  }

  setSideBarVisibility = value => {
    this.setState({ sideBarVisible: value })
  }

  displayType = cookie.get('displayType')

  changeDisplay = () => {
    this.props.router.replace('/')
    const payload = this.displayType === 'mobile' ? 'desktop' : 'mobile'
    cookie.set('displayType', payload, {
      expires: 360 * 24 * 60 * 60 * 1000,
      path: '/',
    })
    window.location.reload(false)
  }

  /*   handleRouteChange = (url) => {
    const {displayType} = this.props;

    this.setState({loading: true});
    if (displayType === 'mobile') Router.push(`/mobile${url}`, url, {shallow: true});
    return url;
  }; */

  /*   componentWillUnmount() {
    Router.events.off('routeChangeStart', this.handleRouteChange);
  } */

  render() {
    const { Component, pageProps, store, router, settings, brand } = this.props
    const { sideBarVisible, loading } = this.state
    const { shopName, title, description, analytics, shopEmail } = settings
    const RenderMainApp = brand !== '' && brand !== undefined
    const { route, pathname } = router
    // Router.events.on('routeChangeComplete', url => {
    //   setTimeout(() => {
    //     window.gtag('config', 'UA-147246396-1', {
    //       page_location: url,
    //       page_title: document.title,
    //     })
    //   }, 0)
    // })
    !!analytics &&
      analytics.google_status === 'enabled' &&
      Router.events.on('routeChangeComplete', url => {
        setTimeout(() => {
          window.gtag('config', analytics.google_id, {
            page_location: url,
            page_title: document.title,
          })
        }, 0)
      })
      

    return (
      <Provider store={store}>
        <Head>
          <meta name="description" content={description} />
          <link rel="icon" href="/images/icon.png" />
          <meta
            name="viewport"
            content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no"
          />
          {!isEmpty(settings) && (
            <Fragment>
              <meta
                name="author"
                content={`${shopName ? shopName : ''}, ${
                  shopEmail ? shopEmail : ''
                }`}
              />
              <meta name="owner" content={shopName ? shopName : ''} />
            </Fragment>
          )}
          <meta name="language" content="EN" />
          <meta name="robots" content="index,follow" />
          <meta name="og:country-name" content="PK" />
        </Head>

        <PersistGate persistor={store.__PERSISTOR} loading={<LinearProgress />}>
          <Fragment>
            {!!analytics && (
              <Fragment>
                {/* {analytics.google_status === 'enabled' && (
                  <Universal
                    account={analytics.google_id}
                    domain={'brandcity.omnisell.pk'}
                    debug
                  />
                )} */}
                {analytics.google_status === 'enabled' && (
                  <GoogleAnalytic Id={analytics.google_id} />
                )}
              </Fragment>
            )}

            {loading && <LinearProgress />}
            {RenderMainApp ? (
              <Fragment>
                <div
                  id="wrapper"
                  className="modal-open wishlist-visible"
                  dir="ltr">
                  <AuthMobile />
                  {this.displayType === 'desktop' ? (
                    <Fragment>
                      <DesktopStyles />
                      <Header
                        renderSearch={
                          !ArrDeskWithoutHeader.includes(route.split('/')[1])
                        }
                      />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <MobileStyles />
                      <SideBar
                        sideBarVisible={sideBarVisible}
                        setSideBarVisibility={this.setSideBarVisibility}
                        displayType={this.displayType}
                        changeDisplay={this.changeDisplay}
                      />
                      {route.split('/')[2] !== 'listing' &&
                        route.split('/')[1] !== 'listing' &&
                        route.split('/')[3] !== 'listing' &&
                        !Arr.includes(route.split('/')[2]) &&
                        !Arr.includes(route.split('/')[1]) && (
                          <TopBar
                            exceptions={ArrForBack}
                            setSideBarVisibility={this.setSideBarVisibility}
                          />
                        )}
                    </Fragment>
                  )}
                  <Component title={title} {...pageProps} />
                  {this.displayType === 'desktop' ? (
                    <Footer
                      settings={settings}
                      displayType={this.displayType}
                      changeDisplay={this.changeDisplay}
                    />
                  ) : (
                    !Arr.includes(route.split('/')[1]) &&
                    !Arr.includes(route.split('/')[2]) &&
                    !ArrForNotTabbar.includes(pathname) && <TabBar />
                  )}
                </div>
              </Fragment>
            ) : (
              <LandingPage />
            )}
          </Fragment>
        </PersistGate>
      </Provider>
    )
  }
}

const mapStateToProps = ({ SETTINGS: { settings }, APPSTATE: { brand } }) => ({
  settings,
  brand,
})

export default withRedux(persistedStore)(
  connect(mapStateToProps, { setAuthModal })(MyApp)
)
