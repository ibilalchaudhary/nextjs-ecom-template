import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
//import nextCookie from "next-cookies";
import { useSelector } from 'react-redux'
//import { HeaderBar as Header } from "../../../components/HeaderBars";
//import { nextWithAuthSync } from "../../../utilts/nextAuth";
import { APIFuncs } from '@utilts/APIs'

import EmptyView from '@components/emptynessHolder'
const disputesPage = () => {
  const { push } = useRouter()
  const { phone, email, token } = useSelector(
    ({ USER: { phone, email, token } }) => ({
      phone,
      email,
      token,
    })
  )
  const [complaints, setComplaints] = useState([])
  const [busy, setBusy] = useState(true)
  useEffect(() => {
    if (token)
      APIFuncs.getMyRMA(token, { phone, email }).then(RES => {
        if (RES) {
          if (RES.status === 'success') {
            Array.isArray(RES.complaints) && setComplaints(RES.complaints)
          }
        }
        setBusy(false)
      })
    return () => {
      console.log('will unmount')
    }
  }, [])
  // console.log('complaints', complaints)
  return (
    <div className={'pageContainer'}>
      <Head>
        <title>Disputes</title>
      </Head>
      {complaints.length !== 0 && !busy ? (
        <div className={'bodyContainer'}>
          {complaints.map(
            ({ id, order_id, type, status, updated_at, created_at }, index) => {
              return (
                <div
                  key={'Item' + index}
                  className={'itemContainer'}
                  onClick={() => {
                    push('/account/disputes/detail/' + order_id)
                  }}>
                  <div className={'itemLeft'}>
                    <div className={'bolder'}>{`COMPLAINT ID: ${id}`}</div>
                    <div>{`Order ID: ${order_id}`}</div>
                    <div>{`${updated_at}`}</div>
                  </div>
                  <div className={'itemCenter'}>
                    <span className={'bolder'}>Status</span>
                    <div>{`${status}`}</div>
                  </div>
                  <div className={'itemRight'}>
                    <img
                      className={'orderView'}
                      src={'/images/viewOrder.png'}
                    />
                  </div>
                </div>
              )
            }
          )}
        </div>
      ) : (
        !busy && (
          <EmptyView
            backToPath={'/account'}
            buttonText={'Back to Account'}
            displayText={'Good... No Complaints'}
            image={'/images/emptyComplaints.png'}
          />
        )
      )}
      <style jsx>{`
        .pageContainer {
          height: calc(100vh - 108px);
          background-color: #f1f3f6;
        }
        .bolder {
          font-weight: bold;
        }
        .bodyContainer {
          overflow-y: scroll;
          height: 100%;
          width: 100%;
          background-color: #f1f3f6;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .orderView {
          width: 100%;
          height: 80%;
        }
        .itemContainer {
          border-radius: 0.5vh;
          margin: 2vh 2%;
          height: 15vh;
          width: 96%;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .itemLeft {
          padding: 0 0 0 2%;
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .itemRight {
          width: 20%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .itemCenter {
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .bodyContainer::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: 769px) and (orientation: landscape) {
          .pageContainer {
            height: calc(100vh - 428px);
          }
        }
        @media (max-width: 768px) and (orientation: portrait) {
          .pageContainer {
            height: calc(100vh - 108px);
          }
        }
      `}</style>
    </div>
  )
}

export default disputesPage
