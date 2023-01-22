import React, { useEffect, useState  } from 'react'
import { GetMegaMenuNew, chooseBrand } from '@redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import firebase from '../../firebase/firebase'
import { ArrowBackIos, Menu, Clear, Search } from '@material-ui/icons'
import axios from 'axios';
const ArrForBack = [
  '/account/myaddress',
  '/account/myorders',
  '/account/myorders/[id]',
  '/checkout',
  '/cart',
  '/account',
  '/mobile/search',
]
const BackWithSearch = ['/mobile/[vSlug]/[slug]/[childSlug]']
const ArrDeskWithoutHeader = ['/mobile/search']
const TopBar = ({ setSideBarVisibility, exceptions }) => {
  const { query, pathname, back, push } = useRouter()
  const {loggedIn, settings,userToken } = useSelector(
    ({ USER, SETTINGS: { settings } }) => ({
      loggedIn: USER.loggedIn,
      settings,
      userToken: USER.token
    })
  )
  const dispatch = useDispatch()
  useEffect(() => {
    GetMegaMenuNew()(dispatch);
    if(firebase.messaging.isSupported()){
      const messaging = firebase.messaging();
      if (!messaging.vapidKey) {
        messaging.usePublicVapidKey("BODR8Bpux-KvW0x5AU35_TBE67GlE4eqnFy_jHcOYFMedrSpR70sF7LGW6I2tBoSaXZRt8fdpYwESLy48q50Qso");
      }
      messaging.requestPermission().then(() => {
        return messaging.getToken()
      }).then(token => {
        // console.log('Mtoken', token);
        if (loggedIn) {
          axios.post('https://api.brandcity.com.pk/api/users/tokens', { webToken: token },{
            headers: {
              'Authorization': `Bearer ${userToken}`
            }
          });
          axios.post('https://api.brandcity.com.pk/api/tokens', { token: token, platform: 'web' });
        } else {
          axios.post('https://api.brandcity.com.pk/api/tokens', { token: token, platform: 'web' })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
    
  }, [])
  return (
    <div className="topbar">
      {exceptions.includes(pathname) || BackWithSearch.includes(pathname) ? (
        <span onClick={back} className="topbar-menu-link sidebar-toggler">
          {pathname === '/mobile/search' ? (
            <Clear style={{ fontSize: 30, color: '#111' }} />
          ) : (
            <ArrowBackIos style={{ fontSize: 30, color: '#111' }} />
          )}
        </span>
      ) : (
        <span
          onClick={e => {
            e.preventDefault()
            setSideBarVisibility(true)
          }}
          className="topbar-menu-link sidebar-toggler">
          <Menu style={{ fontSize: 30, color: '#111' }} />
        </span>
      )}
      {!ArrForBack.includes(pathname) && !BackWithSearch.includes(pathname) && (
        <a
          className="topbar-logo"
          href="/mobile/women"
          style={{
            backgroundImage: `url(${settings.logoMobile
                ? settings.CDN_URL + encodeURI(settings.logoMobile)
                : ''
              })`,
          }}
          onClick={e => {
            e.preventDefault()
            push('/mobile/women')
          }}>
          {/*Al Nasser*/}
        </a>
      )}
      <div className="topbar-actions">
        {!ArrForBack.includes(pathname) && (
          <div data-float-search className="topbar-actions-search">
            <div>
              {pathname.includes('search') ? (
                <a href="/mobile/search" onClick={back}>
                  <Clear style={{ fontSize: 30, color: '#111' }} />
                </a>
              ) : (
                <a
                  href="/mobile/search"
                  onClick={e => {
                    e.preventDefault()
                    push('/mobile/search')
                  }}>
                  <Search style={{ fontSize: 30, color: '#111' }} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TopBar
