import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InitialProps from '@components/InitialProps'
import { useRouter } from 'next/router'
import { SocialAuth } from '@redux/action'
import { APIFuncs } from '@utilts/APIs'
// import FacebookLogin from 'react-facebook-login'

const Index = () => {
  const { push, replace, query, beforePopState } = useRouter()
  const { code } = query
  // const dispatch = useDispatch()
  // const responseFacebook = (response) => {
  //   console.log(response);
  // }
  // const componentClicked = (response) => {
  //   console.log(response);
  // }
  useEffect(() => {
    APIFuncs.FacebookSyncer(code).then(res => {
      console.log('FACEBook', res)
    })
    // SocialAuth(code)(dispatch).then(res => 
    //   console.log('FACEBook', res)
    // })
  }, [])
  return (
    <div id="content">
      <div className="loading is-double is-center" />
      <section id="uaSocialAuth" className="userAuth__contentWrapper">
        <div className="userAuth__socialBtns">
          <a
            href="https://api.brandcity.com.pk/api/auth/facebook"
            className="userAuth__btn userAuth__btn--fb">
            <i className="userAuth__icon userAuth__icon--fb"></i>
            Facebook
          </a>
        </div>
        <div
          onClick={() => {
            localStorage.setItem('previousURL', location.href)
            setTimeout(() => {
              const previousURL = localStorage.getItem('previousURL')
              localStorage.removeItem('previousURL')
              alert(previousURL)
            }, 1000)
          }}>Hit Me</div>
        {/* <FacebookLogin
          appId="979389919144404"
          autoLoad={false}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook} /> */}
      </section>
    </div>
  )
}

Index.getInitialProps = InitialProps
export default Index
