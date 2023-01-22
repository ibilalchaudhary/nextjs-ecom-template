import React, { useEffect, useState, Fragment } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import nextCookie from 'next-cookies'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
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
import { nextWithAuthSync } from '@utilts/nextAuth'
import { APIFuncs } from '@utilts/APIs'
import { ExtractDateAndTime } from '@utilts/utilties'
const PostLink = ({ slug, _id, children }) => (
  <Link
    href={`/productdetail/[slug]?id=${_id}`}
    as={`/productdetail/${slug}?id=${_id}`}>
    {children}
  </Link>
)
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

  cComplete: { backgroundColor: '#FF0000' },
  active: {
    backgroundColor: '#000',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: '#000',
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const orderPage = () => {
  const [order, setOrder] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [steps, setSteps] = useState([])
  const [modalOn, setModalOn] = useState(false)
  const classes = useStyles()
  const { query, push } = useRouter()
  const dispatch = useDispatch()
  const { token } = useSelector(({ USER }) => ({
    token: USER.token,
  }))
  const changeStatus = ({ cancellationComment, cancellationReason }) => {
    const tempOrder = order
    tempOrder.status = 'Canceled'
    tempOrder.cancellationComment = cancellationComment
    tempOrder.cancellationReason = cancellationReason
    APIFuncs.cancelOrder(tempOrder, tempOrder._id, token).then((Res) => {
      if (Res) {
        setOrder(tempOrder)
        setSteps(['Placed', 'Canceled', 'Shipped', 'Delivered'])
        setActiveStep(1)
        setModalOn(false)
      }
    })
  }

  useEffect(() => {
    APIFuncs.getMyOrderDetail(query.id, token).then((res) => {
      if (res.status === 'Canceled') {
        setSteps(['Placed', 'Canceled', 'Shipped', 'Delivered'])
        setActiveStep(1)
      } else if (res.status === 'Shipped') {
        setActiveStep(2)
        setSteps(['Placed', 'Proceed', 'Shipped', 'Delivered'])
      } else if (res.status === 'Delivered') {
        setActiveStep(3)
        setSteps(['Placed', 'Proceed', 'Shipped', 'Delivered'])
      } else if (res.status === 'Placed') {
        setActiveStep(0)
        setSteps(['Placed', 'Proceed', 'Shipped', 'Delivered'])
      } else if (res.status === 'Proceed') {
        setActiveStep(1)
        setSteps(['Placed', 'Proceed', 'Shipped', 'Delivered'])
      }
      setOrder(res)
    })
    return () => {
      console.log('will unmount')
    }
  }, [])

  return (
    <div className={'pageContainer'}>
      <Head>
        <title>Order Detail</title>
      </Head>
      {/* <CancelOrderModal
        modalOn={modalOn}
        token={token}
        applyFunc={changeStatus}
        orderObject={order}
        modalSwitch={setModalOn}
      /> */}
      {/* <Header
        title={'Order Details'}
        backgroundColor={'#fff'}
        renderCart={true}
      /> */}

      {order !== null && (
        <div className={'scrollAbleBody'}>
          <div className={'sectionBody'}>
            <div className={'sectionBodyInner'}>
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
              {/* {order.status !== 'Canceled' && (
                <div className={'lastSectionBodySpans'}>
                  <Button
                    variant={'contained'}
                    style={{ backgroundColor: '#50c0AB',color:'#fff' }}
                    onClick={() => {
                      order.status !== 'Delivered'
                        ? setModalOn(true)
                        : push(`/my/disputes/${order._id}`)
                    }}
                    fullWidth>
                    {order.status !== 'Delivered'
                      ? 'Cancel'
                      : 'Return / Refund'}
                  </Button>
                </div>
              )} */}
            </div>
          </div>
          <div className={'sectionBody'}>
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
                            className={'itemInfo makeItBold'}>{`Rs ${Math.round(
                            price
                          )}`}</div>
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
          <div className={'sectionBody'}>
            <div className={'sectionBodyInner'}>
              <div className={'sectionBodyHeader'}>DELIVERY DETAILS</div>
              <Divider />
              <div className={'sectionBodySubHeader'}>DELIVERY ADDRESS:</div>
              <div className={'itemInfo'}>
                {order.address.firstName} {order.address.lastName}
              </div>
              <div className={'itemInfo'}>{order.address.phone}</div>
              <div className={'itemInfo'}>{order.address.address}</div>
              <div className={'itemInfo'}>{order.address.city}</div>
              <div className={'sectionBodySubHeader'}>DELIVERY METHOD:</div>
              <div className={'itemInfo'}>{order.shipping.method}</div>
              <div className={'sectionBodySubHeader'}>DELIVERY CHARGES:</div>
              <div className={'itemInfo'}>{order.shipping.charge}</div>
            </div>
          </div>
          <div className={'sectionBody'}>
            <div className={'sectionBodyInner'}>
              <div className={'sectionBodyHeader'}>PAYMENT DETAILS</div>
              <Divider />
              <div className={'sectionBodySubHeader'}>PAYMENT METHOD:</div>
              <div className={'itemInfo'}>{order.payment.method}</div>
              <div className={'sectionBodySubHeader'}>PAYMENT STATUS:</div>
              <div className={'itemInfo'}>{order.payment.state}</div>
            </div>
          </div>
          <div className={'sectionBody lastSectionBody'}>
            <div className={'sectionBodyInner'}>
              <div className={'sectionBodyHeader'}>ORDER TOTAL</div>
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
          </div>
        </div>
      )}
      <style jsx>{`
        .pageContainer {
          height: calc(100vh - 50px);
        }
        .scrollAbleBody::-webkit-scrollbar {
          display: none;
        }
        .sectionBodyHeader {
          font-weight: bold;
          font-size: 2vh;
          margin: 0 0 0.5vh 0;
        }
        .lastSectionBodySubHeaderBolder {
          font-weight: 700;
          font-size: 1.5vh;
          color: #2d2d2d;
        }
        .lastSectionBodySubHeader {
          font-weight: bold;
          font-size: 1.5vh;
          color: #666;
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
        .sectionBodySubHeader {
          font-weight: bold;
          font-size: 1.5vh;
          color: #999;
          margin: 0.5vh 0;
        }
        .sectionBodyInner {
          width: 95%;
          margin: 2vh 0;
          display: flex;
          flex-direction: column;
        }
        .itemRightInfo {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .makeItBold {
          font-weight: bold;
        }
        .itemImg {
          height: 18vh;
          border-radius: 0.5vh;
        }
        .itemBody {
          margin: 0.5vh 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .scrollAbleBody {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 93vh;
          width: 100%;
          overflow-y: scroll;
        }
        .itemRight {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 60%;
          height: 18vh;
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
        .lastSectionBody {
          margin: 2vh 2.5% !important;
        }
      `}</style>
    </div>
  )
}
// orderPage.getInitialProps = async ctx => {
//   const { Authorization } = nextCookie(ctx)
//   const redirectOnError = () =>
//     typeof window !== 'undefined'
//       ? Router.push('/account/login')
//       : ctx.res.writeHead(302, { Location: '/account/login' }).end()
//   return Authorization ? { data: { Authorization } } : await redirectOnError()
// }
// export default nextWithAuthSync(orderPage)
export default orderPage
