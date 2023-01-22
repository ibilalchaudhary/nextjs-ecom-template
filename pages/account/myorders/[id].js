import React, { useEffect, useState, Fragment } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import nextCookie from 'next-cookies'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
  Divider,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Button,
} from '@material-ui/core'
import { Check } from '@material-ui/icons'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { APIFuncs } from '@utilts/APIs'
import { ExtractDateAndTime } from '@utilts/utilties'
import CancelOrderModal from '@components/cancelOrderModal'
import EmptyView from '@components/emptynessHolder'
// const PostLink = ({ slug, _id, children }) => (
//   <Link
//     href={`/[vSlu]/[slug]?id=${_id}`}
//     as={`/productdetail/${slug}?id=${_id}`}>
//     {children}
//   </Link>
// )
// ["Placed", "Proceed", "Shipped", "Delivered"]
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: '2vh',
  },
  active: {
    '& $line': {
      backgroundColor: '#000',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#000',
    },
  },
  line: {
    height: '0.3vh',
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector)

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: '4vh',
    height: '4vh',
    display: 'flex',
    borderRadius: '2vh',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cComplete: { backgroundColor: 'var(--omnisell-DangerColor)' },
  active: {
    background: 'var(--omnisell-ButtonColor)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    background: 'var(--omnisell-ButtonColor)',
  },
})
const ColorlibStepIcon = ({ active, completed, isCanceled }) => {
  const classes = useColorlibStepIconStyles()
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: !isCanceled && (active || completed),
        [classes.completed]: !isCanceled && (active || completed),
        [classes.cComplete]: isCanceled && (active || completed),
      })}>
      {active || completed ? (
        <Check style={{ width: '2.5vh', height: '2.5vh' }} />
      ) : (
        <div style={{ width: '2.5vh', height: '2.5vh' }} />
      )}
    </div>
  )
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
  isCanceled: PropTypes.bool,
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const orderDetail = () => {
  const [order, setOrder] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [steps, setSteps] = useState([])
  const [modalOn, setModalOn] = useState(false)
  const { query, push } = useRouter()
  const { token } = useSelector(({ USER }) => ({
    token: USER.token,
  }))
  const changeStatus = ({ cancellationComment, cancellationReason }) => {
    const tempOrder = order
    tempOrder.status = 'Canceled'
    tempOrder.cancellationComment = cancellationComment
    tempOrder.cancellationReason = cancellationReason
    APIFuncs.cancelOrder(tempOrder, tempOrder._id, token).then(Res => {
      if (Res) {
        setOrder(tempOrder)
        setSteps(['Received', 'Canceled', 'Shipped', 'Delivered'])
        setActiveStep(1)
        setModalOn(false)
      }
    })
  }

  useEffect(() => {
    APIFuncs.getMyOrderDetail(query.id, token).then(res => {
      // console.log('res.status', res.status)
      if (res.status === 'Canceled') {
        setSteps(['Received', 'Canceled', 'Shipped', 'Delivered'])
        setActiveStep(1)
      } else if (res.status === 'Shipped') {
        setActiveStep(2)
        setSteps(['Received', 'Proceed', 'Shipped', 'Delivered'])
      } else if (res.status === 'Delivered') {
        setActiveStep(3)
        setSteps(['Received', 'Proceed', 'Shipped', 'Delivered'])
      } else if (res.status === 'Received') {
        setActiveStep(0)
        setSteps(['Received', 'Proceed', 'Shipped', 'Delivered'])
      } else if (res.status === 'Proceed') {
        setActiveStep(1)
        setSteps(['Received', 'Proceed', 'Shipped', 'Delivered'])
      }
      setOrder(res)
    })
    return () => {
      console.log('will unmount')
    }
  }, [])
  return (
    <div>
      <Head>
        <title>Order Detail</title>
      </Head>
      <CancelOrderModal
        modalOn={modalOn}
        token={token}
        applyFunc={changeStatus}
        orderObject={order}
        modalSwitch={setModalOn}
      />
      <div className={'orderDetailPageCont'}>
        {order !== null && (
          <Fragment>
            <div className={'orderCard'}>
              <h3
                style={{
                  fontWeight: 'bold',
                  color: '#111',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  fontSize: '1.125rem',
                  display: 'block',
                  marginBlockStart: '1em',
                  marginBlockEnd: '1em',
                  marginInlineStart: 0,
                  marginInlineEnd: 0,
                }}>
                ORDER DETAILS
              </h3>
              <h4
                style={{
                  display: 'block',
                  marginBlockStart: '1em',
                  marginBlockEnd: '1em',
                  marginInlineStart: 0,
                  marginInlineEnd: 0,
                }}>
                Your order has been Received.
              </h4>
              <div>
                <Stepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<ColorlibConnector />}>
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel
                        StepIconComponent={({ active, completed }) => (
                          <ColorlibStepIcon
                            active={active}
                            completed={completed}
                            isCanceled={order.status === 'Canceled'}
                            setupIndex={index}
                          />
                        )}>
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div>
                <div className={'lastSectionBodySpans'}>
                  <div className={'sectionBodySubHeader'}>ORDER NO:</div>
                  <div className={'itemInfo'}>{order.orderNo}</div>
                </div>
                <div className={'lastSectionBodySpans'}>
                  <div className={'sectionBodySubHeader'}>ORDER DATE:</div>
                  <div className={'itemInfo'}>
                    {ExtractDateAndTime(order.createdAt).dateWithTime}
                  </div>
                </div>
                <div className={'lastSectionBodySpans'}>
                  <div className={'sectionBodySubHeader'}>ORDER STATUS:</div>
                  <div className={'itemInfo'}>{order.status}</div>
                </div>
              </div>
              {order.status !== 'Canceled' && order.status !== 'Delivered' && (
                <div className={'orderQueryButtonCont'}>
                  <Button
                    variant={'contained'}
                    style={{
                      background: 'var(--omnisell-ButtonColor)',
                      color: '#fff',
                    }}
                    onClick={() => {
                      order.status !== 'Delivered'
                        ? setModalOn(true)
                        : push(`/account/disputes/${order._id}`)
                    }}
                    fullWidth>
                    {order.status !== 'Delivered'
                      ? 'Cancel Order'
                      : 'Return / Refund'}
                  </Button>
                </div>
              )}
            </div>
            <div className={'orderCard'}>
              <h4
                style={{
                  fontWeight: 'bold',
                  color: '#111',
                  fontSize: '1rem',
                  display: 'block',
                  margin: '10px 0',
                }}>
                {`${order.items.length} ${
                  order.items.length < 2 ? 'item' : 'items'
                }`}
              </h4>
              <Divider />
              {order.items.map(
                ({ img, name, price, qty, size, pid, slug }, index) => {
                  return (
                    <div className={'itemBody'}>
                      <img src={img.medium} className={'itemImg'} />
                      <div className={'itemRight'}>
                        <div className={'itemInfo makeItBold'}>{name}</div>
                        <div className={'itemInfo'}>{`Qty: ${qty}`}</div>
                        <div className={'itemInfo'}>{`Size: ${size}`}</div>
                        <div
                          className={'itemInfo makeItBold'}>{`Rs ${Math.round(
                          price
                        )}`}</div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
            <div className={'orderCard'}>
              <h4
                style={{
                  fontWeight: 'bold',
                  color: '#111',
                  fontSize: '1rem',
                  display: 'block',
                  margin: '10px 0',
                }}>
                DELIVERY DETAILS
              </h4>
              <Divider />

              <div className={'lastSectionBodySpans'}>
                <span className={'sectionBodySubHeader'}>DELIVERY METHOD:</span>
                <span className={'itemInfo'}>{order.shipping.method}</span>
              </div>
              <div className={'lastSectionBodySpans'}>
                <span className={'sectionBodySubHeader'}>
                  DELIVERY CHARGES:
                </span>
                <span className={'itemInfo'}>{order.shipping.charge}</span>
              </div>
              <div className={'lastSectionBodySpans'}>
                <span className={'sectionBodySubHeader'}>
                  DELIVERY ADDRESS:
                </span>
                <span className={'itemInfo leftAlign'}>
                  <div>
                    {order.address.firstName} {order.address.lastName}
                  </div>
                  <div>{order.address.phone}</div>
                  <div>{order.address.address}</div>
                  <div>{order.address.city}</div>
                </span>
              </div>
            </div>
            <div className={'orderCard'}>
              <h4
                style={{
                  fontWeight: 'bold',
                  color: '#111',
                  fontSize: '1rem',
                  display: 'block',
                  margin: '10px 0',
                }}>
                PAYMENT DETAILS
              </h4>
              <Divider />
              <div className={'lastSectionBodySpans'}>
                <span className={'sectionBodySubHeader'}>PAYMENT METHOD:</span>
                <span className={'itemInfo'}>{order.payment.method}</span>
              </div>
              <div className={'lastSectionBodySpans'}>
                <span className={'sectionBodySubHeader'}>PAYMENT STATUS:</span>
                <span className={'itemInfo'}>{order.payment.state}</span>
              </div>
            </div>
            <div className={'orderCard'}>
              <h4
                style={{
                  fontWeight: 'bold',
                  color: '#111',
                  fontSize: '1rem',
                  display: 'block',
                  margin: '10px 0',
                }}>
                ORDER TOTAL
              </h4>
              <Divider />
              <div className={'lastSectionBodySpans'}>
                <span className={'lastSectionBodySubHeader'}>SUB-TOTAL:</span>
                <span className={'itemInfo'}>{order.amount.subtotal}</span>
              </div>
              <div className={'lastSectionBodySpans'}>
                <span className={'lastSectionBodySubHeader'}>DELIVERY:</span>
                <span className={'itemInfo'}>{order.shipping.charge}</span>
              </div>
              <div className={'lastSectionBodySpans'}>
                <span className={'lastSectionBodySubHeaderBolder'}>TOTAL:</span>
                <span className={'lastSectionBodySubHeaderBolder'}>
                  {order.amount.total}
                </span>
              </div>
            </div>
          </Fragment>
        )}
      </div>
      <style jsx>{`
        * {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
        }
        .lastSectionBodySubHeaderBolder {
          font-weight: 700;
          font-size: 1.5vh;
          color: #2d2d2d;
        }
        .leftAlign {
          text-align: right;
        }
        .orderDetailPageCont {
          background-color: #f0f0f0;
        }
        .orderCard {
          padding: 2vw;
          background-color: #fff;
          margin: 0 0 10px 0;
        }
        .lastSectionBodySubHeader {
          font-weight: bold;
          font-size: 1.5vh;
          color: #666;
        }
        .sectionBodySubHeader {
          font-weight: bold;
          font-size: 1.5vh;
          color: #111;
          margin: 0.5vh 0;
        }
        .lastSectionBodySpans {
          display: flex;
          justify-content: space-between;
          margin: 0.5vh 0;
        }
        .itemInfo {
          font-size: 1.5vh;
          margin: 0 0 0.5vh 0;
        }
        .itemBody {
          margin: 0.5vh 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .itemRightInfo {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .makeItBold {
          cursor: pointer;
          font-size: 14px;
          color: #111;
          font-weight: 700;
        }
        .itemImg {
          width: 25vw;
        }
        .itemRight {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 60%;
          height: 18vh;
        }
        @media (max-width: 768px) {
          .itemImg {
            width: 28vw;
          }
          .itemRight {
            width: 62vw;
          }
          .orderCard {
            border-radius: 0.5vw;
          }
          .orderDetailPageCont {
            width: 100vw;
            padding: 2vw;
            min-height: calc(100vh - 50px);
          }
        }
        @media (min-width: 769px) {
          .makeItBold {
            font-weight: 900;
          }
          .itemImg {
            width: 10vw;
          }
          .itemRight {
            width: 46vw;
          }
          .orderQueryButtonCont {
            width: 60%;
            margin: 5vh 20% 0 20%;
          }
          .orderCard {
            border-radius: 0.5vh;
          }
          .orderDetailPageCont {
            width: 64vw;
            margin: 0 18vw;
            min-height: calc((100vh - 2vw) - 402px);
            padding: 1vw;
          }
        }
      `}</style>
    </div>
  )
}
export default orderDetail
