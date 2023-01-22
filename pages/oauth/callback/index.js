import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InitialProps from '@components/InitialProps'
import { SocialAuth } from '@redux/action'
import Router, { useRouter } from 'next/router'
import { APIFuncs } from '@utilts/APIs'
const Index = () => {
  const dispatch = useDispatch()
  const { replace, query, back, push } = useRouter()
  const { code } = query
  const token = useSelector(({ USER }) => USER.token)
  useEffect(() => {
    const previousURL = localStorage.getItem('previousURL')
    console.log('BACKUrl', previousURL)
    if (token) {
      push(previousURL)
      localStorage.removeItem('previousURL')
    } else {
      APIFuncs.FacebookSyncer(code).then(res => {
        SocialAuth(res)(dispatch).then(resX => {
          //console.log('FinalStepResult: ', resX)
          if (resX) {
            push(previousURL)
          }
          localStorage.removeItem('previousURL')
        })
      })
    }
  }, [])
  return (
    <div id="contentX">
      <div className="loading is-double is-center" />
      <img src={'/images/FB.png'} className="makeitAlign" />
      <div className="makeitAlignText">Connecting to Facebook ...</div>
      <style jsx>{`
        #contentX {
          padding: 0;
          color: #000;
          min-height: calc(100vh - 403px);
        }
        .makeitAlignText {
          text-align: center;
          width: 25vw;
          margin: 0 37.5vw;
        }
        .makeitAlign {
          width: 25vw;
          margin: 0 37.5vw;
        }
      `}</style>
    </div>
  )
}

Index.getInitialProps = InitialProps

export default Index
