import React from 'react'
import ARRAY from '@utilts/Brands'
import { chooseBrand } from '@redux/action'
import { useDispatch } from 'react-redux'

const VeryFirstLanding = () => {
  const dispatch = useDispatch()
  return (
    <div id="splash_container">
      <div className="panel">
        <div className="branding">
          <img className="logo_en" src={'/images/Alnasser_logo.png'} />
        </div>
        <ul className="BrandCont">
          {ARRAY.map(({ name, imgSrc }, index) => (
            <li
              key={'Brand' + index}
              onClick={() => {
                chooseBrand(name)(dispatch)
              }}>
              <div className="brand">
                <img src={imgSrc} className={'BrandLogo'} />
                <span style={{fontSize:'12px'}}>{name}</span>
              </div>
            </li>
          ))}
        </ul>
        <p translate="copyright" className="copyright">
          © 2022 Brandcity. All Rights Reserved.
        </p>
      </div>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        #__next {
          font-size: 15px;
          height: 100vh;
          width: 100vw;
          color: #4f4f4f;
          font-family: Arial, Sans-serif;
          line-height: 25px;
          margin: 0;
          padding: 0;
          background: url(https://a.namshicdn.com/cms/large/global/20180302/splash_bg.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50%;
          position: relative;
        }
        .BrandLogo {
          width: 10vh;
          height: 10vh;
          background-color: #fff;
        }
        .BrandCont {
          -ms-box-orient: horizontal;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -moz-flex;
          display: -webkit-flex;
          display: flex;
          justify-content: center;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
          list-style: none;
        }
        .brand {
          border-radius: 0.5vh;
          background-color: #44444430;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 10px;
        }

        ul {
          padding: 0;
          margin: 0;
        }
        #splash_container {
          position: absolute;
          top: 50%;
          left: 50%;
          overflow: hidden;
          transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
        }
        a:-webkit-any-link {
          color: -webkit-link;
          cursor: pointer;
          text-decoration: underline;
        }
        #splash_container .panel {
          background-color: #ffffff;
          color: #000000;
          margin: 0 auto;
          padding: 32px 32px 17px;
          text-align: center;
          width: 700px;
        }
        .logo_ar,
        .logo_en,
        .branding {
          margin-bottom: 16px;
          font-weight: bold;
        }
        .copyright {
          margin-top: 20px;
        }
        p {
          margin: 0;
        }

        @media (max-width: 768px) {
          #__next {
            background-position: 80% 50%;
          }
          #splash_container {
            width: 90%;
          }
        }
        @media (max-width: 600px) {
          .BrandLogo {
            width: 10vh;
            height: 10vh;
          }
          .brand {
            border-radius: 0.5vh;
            margin: 10px;
          }
          #__next {
            background-position: right;
          }
          #splash_container .panel {
            width: 90%;
            padding: 5%;
          }
        }
      `}</style>
    </div>
  )
}

export default VeryFirstLanding;
