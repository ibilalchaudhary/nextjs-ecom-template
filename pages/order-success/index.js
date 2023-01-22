/* eslint-disable react/jsx-fragments */
import React, { useEffect, useState, Fragment } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Divider } from '@material-ui/core'
import { APIFuncs } from '@utilts/APIs'
import nextCookie from 'next-cookies'
import { nextWithAuthSync } from '@utilts/nextAuth'
import ReactPixel from 'react-facebook-pixel'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  button: {
    borderRadius: '0.5vh !important',
    width: '95%',
    height: '95%',
  },
  button2: {
    borderRadius: '0.5vh !important',
    width: '95%',
    height: '95%',
  },
  [theme.breakpoints.down('md')]: {
    button: {
      display: 'none',
    },
  },
  [theme.breakpoints.up('md')]: {
    button2: {
      display: 'none',
    },
  },
}))
///mobile/listing/rust-speed-design-mumble-bow-flat-mules-in-rust?id=5e7f82c74630255fbce13427
const PostLink = ({ slug, _id, children }) => (
  <Link
    href={`/mobile/listing/[listingSlug]?id=${_id}`}
    as={`/mobile/listing/${slug}?id=${_id}`}>
    {children}
  </Link>
)
const calculateProductIds = products => {
  const array_ids = []
  products.forEach(product => {
    array_ids.push(product.pid)
  })
  return array_ids
}
const orderSuccess = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { push, replace, query } = useRouter()
  const { id, amount } = query
  const [order, setOrder] = useState(null)
  const { settings } = useSelector(({ SETTINGS: { settings } }) => ({
    settings,
  }))
  useEffect(() => {
    APIFuncs.getRecentOrderInfo(id).then(res => {
      if (!!res) {
        const { amount, items } = res
        if (!!settings) {
          const { analytics } = settings
          if (analytics.fbPixels_status === 'enabled') {
            ReactPixel.trackCustom('Purchase', {
              content_type: 'product',
              currency: 'PKR',
              content_ids: calculateProductIds(items),
              value: amount.total,
            })
          }
        }
        setOrder(res)
      }
    })
    return () => {}
  }, [])
  return (
    <div className={'pageContainer'}>
      <Head>
        <title>Order Success</title>
      </Head>
      <div className={'bodyContainer'}>
        <div style={{ height: '7vh' }} />
        <div className="cardWhite">
          <p className={'thankyou'}>Thank You!</p>
          <p className={'summary'}>
            Your order has been received. You will receive a confirmation call
            regarding availability before dispatch. Order processing takes 3-5
            working days.
          </p>
        </div>
        {order !== null && (
          <Fragment>
            <div className="cardWite2">
              <h3>Thank You For Your Order</h3>
              <p className="gray">
                You can track your order from your account under My Orders Section.
              </p>
              <table className="list">
                <tbody>
                  <tr>
                    <th>Order Total:</th>
                    <td>{`Rs ${amount}`}</td>
                  </tr>
                  <tr>
                    <th>Order Reference:</th>
                    <td>{order.orderNo}</td>
                  </tr>
                  <tr>
                    <th>Delivery:</th>
                    <td>------------------------</td>
                  </tr>
                  <tr>
                    <th>Order Status:</th>
                    <td>{order.status}</td>
                  </tr>
                  <tr>
                    <th>Payment Method:</th>
                    <td>{order.payment.method}</td>
                  </tr>
                  <tr>
                    <th>Payment Status:</th>
                    <td>{order.payment.state}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sectionBody">
              <div className={'sectionBodyInner'}>
                {`${order.items.length} ${
                  order.items.length < 2 ? 'item' : 'items'
                }`}
                <Divider />
                {order.items.map(
                  ({ img, name, price, qty, size, pid, slug }, index) => {
                    return (
                      <PostLink key={'items' + index} _id={pid} slug={slug}>
                        <div className={'itemBody'}>
                          <img src={img.medium} className={'itemImg'} />
                          <div className={'itemRight'}>
                            <div
                              className={
                                'itemInfo makeItBold'
                              }>{`Rs ${Math.round(price)}`}</div>
                            <div className={'itemInfo'}>{name}</div>
                            <div className={'itemInfo'}>{`Qty: ${qty}`}</div>
                            <div className={'itemInfo'}>{`Size: ${size}`}</div>
                          </div>
                        </div>
                      </PostLink>
                    )
                  }
                )}
              </div>
            </div>
            <Button
              onClick={() => {
                push('/')
              }}
              style={{
                background: 'var(--omnisell-ButtonColor)',
                height: '6vh',
                width: '70%',
                fontSize: '2.2vh',
                marginTop: '2vh',
              }}
              variant={'contained'}
              color={'primary'}
              className={classes.button}
              fullWidth={true}>
              Continue Shopping
            </Button>
          </Fragment>
        )}
        <div className="bottomBar">
          <div className="bottomBarInner">
            <Button
              onClick={() => {
                push('/mobile/categories')
              }}
              style={{ background: 'var(--omnisell-ButtonColor)' }}
              variant={'contained'}
              color={'primary'}
              className={classes.button2}
              fullWidth={true}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pageContainer {
          background-color: #f0f0f0;

          overflow: hidden;
          position: relative;
        }
        .bottomBarInner {
          width: 95%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cardWite2 h3 {
          margin: 2vh 2%;
        }
        .cardWite2 {
          background-color: #fff;
          margin: 1vh 2.5%;
          width: 95%;
          border-radius: 0.5vh;
        }
        .cardWhite .thankyou {
          font-weight: bold;
          font-size: 3vh;
          margin: 2vh 0;
        }
        .cardWhite .summary {
          font-size: 2.2vh;
          margin: 2vh 2%;
        }
        .cardWhite {
          text-align: center;
          margin: 1vh 2.5%;
          width: 95%;
          background-color: #ffbe61;
          border-radius: 0.5vh;
        }
        .gray {
          margin: 2vh 2%;
        }
        .list {
          margin: 2vh 2%;
        }
        .list tbody tr th {
          color: #b6b6b6;
          text-align: left;
        }
        .bodyContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .bottomButton {
          height: 100% !important;
        }
        .bottomBar {
          position: fixed;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          z-index: 33;
          height: 7vh;
          background-color: #fff;
        }
        .sectionBody {
          margin: 2vh 2.5% 0 2.5%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 95%;
          border-radius: 0.5vh;
          background-color: #fff;
        }
        .sectionBodyInner {
          width: 95%;
          margin: 2vh 0;
          display: flex;
          flex-direction: column;
        }
        .itemBody {
          margin: 0.5vh 0;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .itemImg {
          height: 18vh;
          border-radius: 0.5vh;
        }
        .itemRight {
          width: 60%;
          margin: 0 0 0 3%;
        }
        .itemRightInfo {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .makeItBold {
          font-weight: bold;
        }
        .itemInfo {
          font-size: 1.5vh;
          margin: 0 0 0.5vh 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }
        @media (min-width: 769px) and (orientation: landscape) {
          .gray {
            font-size: medium;
          }
          .bottomBar {
            display: none;
          }
          .cardWite2 {
            font-size: 3vh;
          }
          .list {
            font-size: medium;
          }
          .pageContainer {
            padding: 0 17vw 20px 17vw;
            overflow: hidden;
            position: relative;
          }
          .bottomBar {
            width: 56vh;
          }
          .bodyContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 67vw;
          }
        }
        @media (max-width: 768px) and (orientation: portrait) {
          .bodyContainer {
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 93%;
            width: 100%;
          }
          .bottomBar {
            width: 100%;
          }
          .pageContainer {
            width: 100%;
            height: calc(100vh - 50px);
            overflow: hidden;
            position: relative;
          }
        }
      `}</style>
    </div>
  )
}

// orderSuccess.getInitialProps = async ctx => {
//   const {  Authorization  } = nextCookie(ctx);
//   const redirectOnError = () =>
//     typeof window !== "undefined"
//       ? Router.replace("/account/login?returnto=checkout")
//       : ctx.res
//           .writeHead(302, { Location: "/account/login?returnto=checkout" })
//           .end();
//   return  Authorization ? { data: {  Authorization  } } : await redirectOnError();
// };
//export default nextWithAuthSync(orderSuccess);
export default orderSuccess
