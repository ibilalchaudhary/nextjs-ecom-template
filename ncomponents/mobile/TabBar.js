import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { APIFuncs } from '@utilts/APIs'
import isEmpty from 'lodash/isEmpty'
import useInput from '@components/useInput'
import { loginWithEmail, signUpWithEmail } from '@redux/action'
import { EmailValidator } from '@utilts/utilties'
import { setAuthModal } from '@redux/action'

const TabBar = (props) => {
  const { query, pathname, push, replace } = useRouter()
  const [authType, setAuthType] = useState('login')
  const [input, handleInputChange] = useInput()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const { variants } = useSelector(({ MEGAMENU }) => ({
    variants: MEGAMENU.WholeMegaMenu,
  }))

  const { authModal, returnto, slug, childSlug, vSlug } = query

  const { cart, wishlist, loggedIn } = useSelector(({ USER }) => ({
    cart: USER.cart,
    wishlist: USER.wishlist,
    token: USER.token,
    loggedIn: USER.loggedIn,
  }))

  const setAuthOpen = (value) => {
    const realValue = value ? 'yes' : 'no'
    Router.replace({
      pathname: pathname
        .replace('[slug]', slug)
        .replace('[vSlug]', vSlug)
        .replace('[childSlug]', childSlug),
      query: { ...query, authModal: realValue },
    })
  }

  const validReset = EmailValidator(input.email)
  const validLogin = EmailValidator(input.email) && !isEmpty(input.password)
  const validSignup =
    EmailValidator(input.email) &&
    !isEmpty(input.password) &&
    !isEmpty(input.firstName) &&
    !isEmpty(input.lastName)

  const login = () => {
    setLoading(true)
    const { email, firstName, lastName, gender, password } = input
    if (validLogin) {
      loginWithEmail({ email, password, returnto: returnto || '/account' })(
        dispatch
      ).then((response) => {
        setLoading(false)
      })
    } else {
      setErrorMessage('Username or password is not correct.')
    }
  }

  const signup = () => {
    setLoading(true)
    const { email, firstName, lastName, gender, password } = input
    if (validSignup) {
      signUpWithEmail({
        email,
        firstName,
        lastName,
        gender,
        role: 'user',
        password,
      })(dispatch).then((res) => {
        setLoading(false)
      })
    } else {
      setErrorMessage('Please complete the form correctly.')
    }
  }

  const resetPassword = () => {}

  return (
    <section className="tabbar">
      <ul className="tabbar__tabslist">
        <li id={pathname === '/mobile' ? 'active' : ''}>
          <a
            onClick={(e) => {
              e.preventDefault()
              replace('/')
            }}
            href="/">
            <i className="icon-feed" />
            <span>Home</span>
          </a>
        </li>
        <li id={pathname === '/mobile/categories' ? 'active' : ''}>
          <a
            onClick={(e) => {
              e.preventDefault()
              replace('/categories')
            }}
            href="/categories">
            <i className="icon-categories" />
            <span>Categories</span>
          </a>
        </li>
        <li id={['/cart', '/checkout'].includes(pathname) ? 'active' : ''}>
          <span id="cartCount">
            <a
              onClick={(e) => {
                e.preventDefault()
                replace('/cart')
              }}
              href="/cart"
              className="topbar-actions-cart  show-cart">
              <i className="icon-bag">
                {cart && cart?.items?.length !== 0 && (
                  <span className="tabbar__tip" style={{ color: '#fff' }}>
                    {cart?.items?.length}
                  </span>
                )}
              </i>
              <span>Cart</span>
            </a>
          </span>
        </li>

        <li id={pathname === '/account' ? 'active' : ''}>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault()
              loggedIn ? replace('/account') : setAuthModal(true)(dispatch)
            }}>
            <i className="icon-my-account" />
            <span>Account</span>
          </a>
        </li>
        <li id={pathname === '/mobile/wishlist' ? 'active' : ''}>
          <span id="wishlistCount">
            <a
              href="/mobile/wishlist"
              onClick={(e) => {
                e.preventDefault()
                replace('/mobile/wishlist')
              }}>
              <i className="icon-favorites">
                {wishlist && wishlist.length !== 0 && (
                  <span
                    className="tabbar__tip animated"
                    style={{ color: '#fff' }}>
                    {wishlist.length}
                  </span>
                )}
              </i>
              <span>Wishlist</span>
            </a>
          </span>
        </li>
      </ul>
    </section>
  )
}

export default TabBar;
