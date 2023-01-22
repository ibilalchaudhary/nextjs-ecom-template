import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
const isProd = process.env.NODE_ENV == 'production'
const nextLogin = ({ token, returnto }) => {
  // cookie.set('token', token, { expires: 30 })
  // console.log("here");
  isProd
    ? cookie.set('token', token, {
        expires: 30,
        domain: 'brandcity.com.pk',
      })
    : cookie.set('token', token, {
        expires: 30,
      })
  // console.log(returnto)
  // console.log(Router)
  //Router.replace({ pathname: returnto || '/', query: { authModal: 'no' } })
}

const nextAuth = ctx => {
  const { token } = nextCookie(ctx)
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/account/login' })
      ctx.res.end()
    } else {
      Router.push('/account/login')
    }
  }
  return token
}

const nextLogout = () => {
  isProd
    ? cookie.remove('token', { domain: 'brandcity.com.pk' })
    : cookie.remove('token')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/')
}

const nextWithAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        // console.log('logged out from storage!')
        Router.push('/account/login')
      }
    }
    useEffect(() => {
      window.addEventListener('storage', syncLogout)
      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [])
    return <WrappedComponent {...props} />
  }
  Wrapper.getInitialProps = async ctx => {
    const token = nextAuth(ctx)
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))
    return { ...componentProps, token }
  }
  return Wrapper
}

export { nextWithAuthSync, nextLogout, nextLogin, nextAuth }
