import React, { useEffect, useState, Fragment } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from '@material-ui/core'
import { APIFuncs } from '@utilts/APIs'
const disputesPage = () => {
  const { push, query } = useRouter()
  const [complaint, setComplaint] = useState(null)
  const [busy, setBusy] = useState(true)
  const token = useSelector(({ USER }) => USER.token)
  useEffect(() => {
    if (token)
      if (query.id)
        APIFuncs.getMyRMADetail(token, query.id).then(RES => {
          if (RES) {
            if (RES.status === 'success') {
              RES.details && setComplaint(RES.details)
            }
          }
          setBusy(false)
        })
    return () => {
      console.log('will unmount')
    }
  }, [])
  // console.log('complaint', complaint)
  return (
    <span className={'pageContainer'}>
      <Head>
        <title>Disputes</title>
      </Head>
      {/* <Header
        title={'My Dispute'}
        renderBottomBorder={true}
        renderCart={true}
        backgroundColor={'#fff'}
      /> */}
      <span className={'bodyContainer'}>
        {!!complaint && !busy ? (
          <span className={'scrollableBody'}>
            <div className={'part1'}>
              <div>{`COMPLAINT ID: ${complaint.id}`}</div>
              <div>{`Order ID: ${complaint.order_id}`}</div>
            </div>
            <span className={'part2'}>
              <div>
                <span style={{ fontWeight: 'bold' }}>Request Status:</span>
                <span
                  style={{ textTransform: 'uppercase', margin: '0 0 0 1vh' }}>
                  {complaint.status}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Request Type:</span>
                <span
                  style={{ textTransform: 'uppercase', margin: '0 0 0 1vh' }}>
                  {complaint.type}
                </span>
              </div>
              <p style={{ color: 'green' }}>
                Your request is being reviewed by our officer.
              </p>
              <Divider light />
              {complaint.rma_items.map(
                ({ name, price, sku, qty, reason, status }, index) => {
                  return (
                    <Fragment key={'item' + index}>
                      <div>
                        <span style={{ fontWeight: 'bold' }}>
                          Item No. {index + 1}
                        </span>
                      </div>
                      <div className={'topbottommargin'}>
                        <span style={{ fontWeight: 'bold' }}>Name:</span>
                        <span
                          style={{
                            margin: '0 0 0 1vh',
                          }}>
                          {name}
                        </span>
                      </div>
                      <div className={'topbottommargin'}>
                        <span style={{ fontWeight: 'bold' }}>Price:</span>
                        <span
                          style={{
                            margin: '0 0 0 1vh',
                          }}>
                          {`Rs ${price}`}
                        </span>
                      </div>
                      <div className={'topbottommargin'}>
                        <span style={{ fontWeight: 'bold' }}>SKU:</span>
                        <span
                          style={{
                            margin: '0 0 0 1vh',
                          }}>
                          {sku}
                        </span>
                      </div>
                      <div className={'topbottommargin'}>
                        <span style={{ fontWeight: 'bold' }}>
                          Quantity Returned:
                        </span>
                        <span
                          style={{
                            textTransform: 'uppercase',
                            margin: '0 0 0 1vh',
                          }}>
                          {qty}
                        </span>
                      </div>
                      <div className={'topbottommargin'}>
                        <span style={{ fontWeight: 'bold' }}>Reason:</span>
                        <span
                          style={{
                            margin: '0 0 0 1vh',
                          }}>
                          {reason}
                        </span>
                      </div>
                      <div className={'topbottommargin'}>
                        <span style={{ fontWeight: 'bold' }}>Status:</span>
                        <span
                          style={{
                            textTransform: 'uppercase',
                            margin: '0 0 0 1vh',
                          }}>
                          {status}
                        </span>
                      </div>
                      <Divider light />
                    </Fragment>
                  )
                }
              )}
              <p>Your Comment: </p>
              <div>{complaint.comint}</div>
            </span>
          </span>
        ) : (
          !busy && <div></div>
        )}
      </span>
      <style jsx>{`
        .scrollableBody::-webkit-scrollbar {
          display: none;
        }
        .topbottommargin {
          margin: 0.5vh 0;
        }
        .part2 {
          padding: 2vh 0 2vh 2vh;
          border-radius: 0.5vh;
          width: 100%;
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }
        .part1 {
          font-weight: bold;
          padding: 0 0 0 2vh;
          width: 100%;
          border-radius: 0.5vh;
          margin: 0 0 1vh 0;
          height: 10vh;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .scrollableBody {
          height: 93vh;
          overflow-y: scroll;
          width: 96%;
          margin: 0 2%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bodyContainer {
          height: 93vh;
          width: 100%;
          background-color: #f1f3f6;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </span>
  )
}

export default disputesPage
