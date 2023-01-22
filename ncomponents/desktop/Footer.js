const Footer = ({ displayType, changeDisplay, settings }) => {
  //  console.log('settings', settings)
  return (
    <div id="site_footer" className="site-footer">
      <div className="site-footer__divider" />
      <div className="site-footer__main">
        <div className="site-footer__social">
          <div className="site-footer__appstore">
            <a
              title="Download on the App Store"
              href="https://itunes.apple.com/us/app/namshi-online-fashion-shopping/id840127349?mt=8"
              rel="follow"
              target="_blank"
              className="app_store_badge">
              Download on the App Store
            </a>
            <a
              title="Android App On Google Play"
              href="https://play.google.com/store/apps/details?id=com.namshi.android"
              rel="follow"
              target="_blank"
              className="google_play_badge">
              Android App On Google Play
            </a>
          </div>
          <div
            className="site-footer__social-icons"
            itemScope
            itemType="http://schema.org/Organization">
            <a
              itemProp="sameAs"
              href="https://www.instagram.com/brandcitylive/"
              className="site-footer__social-icon instagram"
              target="_blank">
              <svg
                aria-labelledby="simpleicons-instagram-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
            <a
              itemProp="sameAs"
              href="https://www.fb.com/Brandcity/"
              className="site-footer__social-icon facebook"
              target="_blank">
              <svg viewBox="0 0 512 512">
                <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
              </svg>
            </a>
            <a
              itemProp="sameAs"
              href="https://www.snapchat.com/add/brandcitypk"
              className="site-footer__social-icon snapchat.com"
              target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.05 32">
                <path
                  className="cls-1"
                  d="M20.21,35.65h-.42a7.29,7.29,0,0,1-4.47-1.76,6.52,6.52,0,0,0-2.59-1.32,8.35,8.35,0,0,0-1.36-.11,9.29,9.29,0,0,0-1.88.21,4.12,4.12,0,0,1-.7.1.44.44,0,0,1-.49-.35c-.08-.27-.13-.52-.19-.77-.14-.64-.24-1-.51-1.08-3.13-.48-4-1.14-4.23-1.61a.6.6,0,0,1,0-.2.35.35,0,0,1,.29-.37c4.82-.79,7-5.71,7.06-5.92v0a1.83,1.83,0,0,0,.17-1.54c-.33-.78-1.41-1.12-2.12-1.35l-.47-.16C6.85,18.83,6.74,18.26,6.79,18a1.34,1.34,0,0,1,1.31-.85.92.92,0,0,1,.39.08,4.15,4.15,0,0,0,1.72.45,1.41,1.41,0,0,0,1-.33c0-.33,0-.67-.06-1-.14-2.28-.32-5.11.4-6.72a8.71,8.71,0,0,1,8.09-5.22h.67a8.73,8.73,0,0,1,8.1,5.22c.72,1.62.54,4.45.4,6.72v.1c0,.32,0,.62-.06.92a1.37,1.37,0,0,0,.93.33h0a4.29,4.29,0,0,0,1.62-.45,1.22,1.22,0,0,1,.5-.1,1.53,1.53,0,0,1,.58.11h0a1.06,1.06,0,0,1,.81.86c0,.33-.25.84-1.5,1.33l-.47.16c-.71.23-1.79.57-2.12,1.35a1.83,1.83,0,0,0,.17,1.54v0c.09.21,2.25,5.13,7.07,5.92a.35.35,0,0,1,.3.37.59.59,0,0,1,0,.2c-.2.46-1.09,1.12-4.23,1.61-.26,0-.36.37-.51,1.07-.06.25-.11.5-.19.77a.42.42,0,0,1-.45.33h0a3.92,3.92,0,0,1-.7-.09,9.35,9.35,0,0,0-1.88-.2,8.36,8.36,0,0,0-1.36.11,6.51,6.51,0,0,0-2.58,1.32A7.3,7.3,0,0,1,20.21,35.65Z"
                  transform="translate(-2.98 -4)"
                />
                <path
                  className="cls-2"
                  d="M20.33,4.71a8.37,8.37,0,0,1,7.78,5c.69,1.54.51,4.32.37,6.56,0,.35,0,.7-.06,1v.14l.09.11a1.68,1.68,0,0,0,1.19.45h0a4.63,4.63,0,0,0,1.76-.48.85.85,0,0,1,.35-.07,1.18,1.18,0,0,1,.45.08h0c.34.12.57.34.58.54s-.08.52-1.27,1l-.45.15c-.78.25-1.95.62-2.34,1.55A2.17,2.17,0,0,0,29,22.6c.14.33,2.35,5.31,7.33,6.13a.23.23,0,0,1,0,.08c-.08.2-.62.89-4,1.4-.52.08-.65.67-.8,1.35-.05.24-.11.49-.18.74,0,.08,0,.08-.11.08h0a3.69,3.69,0,0,1-.63-.08,9.77,9.77,0,0,0-1.95-.21,8.69,8.69,0,0,0-1.42.12,6.78,6.78,0,0,0-2.73,1.38,7,7,0,0,1-4.27,1.7h-.42a7,7,0,0,1-4.27-1.7,6.77,6.77,0,0,0-2.73-1.38,8.69,8.69,0,0,0-1.42-.12,9.61,9.61,0,0,0-2,.22,4,4,0,0,1-.63.09c-.12,0-.12,0-.15-.09-.07-.25-.13-.51-.18-.75-.15-.68-.28-1.27-.8-1.35-3.34-.52-3.87-1.2-4-1.4a.23.23,0,0,1,0-.08c5-.82,7.19-5.8,7.33-6.13a2.17,2.17,0,0,0,.18-1.83c-.39-.93-1.57-1.3-2.34-1.55l-.45-.15c-1-.4-1.32-.8-1.27-1s.54-.56,1-.56a.58.58,0,0,1,.24,0,4.5,4.5,0,0,0,1.87.49,1.72,1.72,0,0,0,1.29-.45l.09-.1V17.3c0-.33,0-.67-.06-1-.14-2.24-.32-5,.37-6.55a8.36,8.36,0,0,1,7.77-5h.67m0-.71h-.67a9.06,9.06,0,0,0-8.41,5.43c-.76,1.69-.57,4.57-.43,6.88,0,.27,0,.56.05.83a1.36,1.36,0,0,1-.66.14,3.81,3.81,0,0,1-1.57-.42,1.26,1.26,0,0,0-.54-.11A1.69,1.69,0,0,0,6.44,17.9c-.09.49.13,1.21,1.7,1.83l.49.17c.65.21,1.64.52,1.9,1.15a1.51,1.51,0,0,1-.16,1.25l0,0c-.09.2-2.17,5-6.8,5.71a.71.71,0,0,0-.59.74,1,1,0,0,0,.08.32c.35.81,1.81,1.41,4.48,1.82a3.32,3.32,0,0,1,.24.81c.06.26.11.52.2.8a.79.79,0,0,0,.83.6A4.29,4.29,0,0,0,9.56,33a9,9,0,0,1,1.81-.21,8,8,0,0,1,1.3.11,6.17,6.17,0,0,1,2.44,1.26A7.68,7.68,0,0,0,19.79,36h.42a7.68,7.68,0,0,0,4.67-1.83,6.17,6.17,0,0,1,2.44-1.26,8,8,0,0,1,1.3-.11,9,9,0,0,1,1.81.19,4.26,4.26,0,0,0,.77.09h0A.77.77,0,0,0,32,32.5c.08-.27.14-.53.2-.79a3.29,3.29,0,0,1,.24-.8c2.67-.41,4.13-1,4.48-1.82a.94.94,0,0,0,.08-.32.71.71,0,0,0-.59-.74c-4.63-.76-6.71-5.51-6.8-5.71l0,0A1.51,1.51,0,0,1,29.45,21c.27-.63,1.25-.94,1.9-1.15l.49-.17c1.15-.46,1.73-1,1.72-1.66a1.38,1.38,0,0,0-1-1.19h0a1.89,1.89,0,0,0-.71-.14,1.57,1.57,0,0,0-.65.13,4,4,0,0,1-1.47.42,1.3,1.3,0,0,1-.57-.14c0-.23,0-.48,0-.73v-.1c.15-2.31.33-5.19-.43-6.89A9.07,9.07,0,0,0,20.33,4Z"
                  transform="translate(-2.98 -4)"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="site-footer__payments">
          <div data-nm-newsletter-popup>
            <div data-nm-newsletter-popup="true">
              {/* <button className="site-footer__newsletter-button">
                Subscribe to our newsletter
              </button> */}
              <div
                className="site-footer__newsletter-button"
                style={{ borderBottom: '0 solid #000' }}></div>
              <div className="newsletter-popup">
                <div className="newsletter-popup__bg" />
                <div className="newsletter-popup__content">
                  <div className="newsletter-popup__image">
                    <div
                      className="newsletter-popup__image__bg"
                      style={{
                        backgroundImage:
                          'url("//a.namshicdn.com/cms/misc/popup_newsletter_20180228.jpg")',
                      }}
                    />
                  </div>
                  <form
                    className="newsletter-popup__form"
                    name="newsletterSubscribe"
                    noValidate>
                    <div className="newsletter-popup__close" />
                    <div className="newsletter-popup__title">Sign Up Now</div>
                    <div className="newsletter-popup__description">
                      To keep up to date with the latest arrivals,
                      <br />
                      exclusive launches and fashion inspiration
                      <br />
                      direct to your inbox.
                    </div>
                    <div className="newsletter-popup__email">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        title="The provided email address is not valid"
                      />
                    </div>
                    <div className="newsletter-popup__genders">
                      <div className="newsletter-popup__gender">
                        <label className="nm-radio-button">
                          <input type="radio" name="male" defaultValue="male" />
                          <span className="nm-radio-button__label-visible">
                            <span className="nm-radio-button__input" />
                            Male
                          </span>
                        </label>
                      </div>
                      <div className="newsletter-popup__gender">
                        <label className="nm-radio-button">
                          <input
                            type="radio"
                            name="female"
                            defaultValue="female"
                          />
                          <span className="nm-radio-button__label-visible">
                            <span className="nm-radio-button__input" />
                            Female
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="newsletter-popup__privacy-policy">
                      <label className="nm-checkbox">
                        <input type="checkbox" name="privacy" />
                        <span className="nm-checkbox__label-visible">
                          <span className="nm-checkbox__input" />
                          <span> I accept the </span>
                          <a
                            href="https://support.namshi.com/hc/en/sections/201953905"
                            target="_blank">
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                    <div className="newsletter-popup__subscribe">
                      <button>Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <a
            className="site-footer__payments-title"
            title="Payment Methods"
            href="/"
            target="_blank">
            Payment Methods
          </a>
          <ul className="payment_methods">
            <li className="mastercard">MasterCard</li>
            <li className="visa">Visa</li>
            <li className="cash_on_delivery">Cash On Delivery</li>
          </ul>
        </div>
      </div>
      <div id="site-footer__second">
        <a href={'/content/quality-policy'}>Quality Policy</a>
        <a href={'/content/product-care'}>Product care</a>
        <a href={'/content/shipping-and-delivery-policy'}>
          Shipping and Delivery Policy
        </a>
        <a href={'/content/about-us'}>About Us</a>
        <a href={'/content/contact-us'}>Contact Us</a>
      </div>
      <div className="site-footer__device-switch device_switch">
        <p>Desktop</p>
        <input
          className="site-footer__toggle switch_to_mobile"
          value={displayType === 'mobile'}
          onChange={changeDisplay}
          type="checkbox"
        />
        <p>Mobile</p>
      </div>
      <style jsx>{`
        #site-footer__second {
          width: 1200px;
          margin: 0 auto;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          padding: 0 0% 60px 0%;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
        }

        #site-footer__second a {
          font-weight: bold;
        }

        #site-footer__second > a:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default Footer;
