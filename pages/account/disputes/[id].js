import React, { useEffect, useState, Fragment } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import nextCookie from 'next-cookies'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { APIFuncs } from '@utilts/APIs'
import { Button, TextField, MenuItem } from '@material-ui/core'
import {
  ArrowForwardIos,
  ArrowBackIos,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@material-ui/icons'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  qtySelector: { margin: '1vh 0', width: '70%' },
  commenter: { margin: '1vh 2.25%', width: '95%' },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  Button: {
    height: '8vh',
    width: '95%',
    background: 'var(--omnisell-ButtonColor)',
  },
}))

const disputesPage = () => {
  const classes = useStyles()
  const { push, query } = useRouter()
  const token = useSelector(({ USER }) => USER.token)
  const [order, setOrder] = useState(null)
  const [response, setResponse] = useState('')
  const [comment, setComment] = useState('')
  const [finalOrder, setFinalOrder] = useState(null)
  const [finalOrderCopy, setFinalOrderCopy] = useState(null)

  useEffect(() => {
    if (token && query.id)
      APIFuncs.getMyOrderDetail(query.id, token).then(res => {
        if (res) {
          const { orderNo, items } = res
          let finalOrder = {
            order_id: orderNo,
            return_type: '',
          }
          let itemData = []
          items.forEach(({ name, price, qty, sku, img, size }) => {
            itemData.push({
              name,
              price,
              quantity: '',
              qty,
              sku,
              reason: '',
              selected: false,
              img: img.medium,
              size,
            })
          })
          finalOrder.items = itemData
          res && setFinalOrder(finalOrder)
          res && setFinalOrderCopy(finalOrder)
          res && setOrder(res)
        }
      })
    return () => {
      console.log('will unmount')
    }
  }, [])

  const changeType = return_type => {
    setFinalOrder({ ...finalOrder, return_type })
  }

  const selectItem = index => {
    const { items } = finalOrder
    items[index].selected &&
      ((items[index].quantity = ''), (items[index].reason = ''))
    items[index].selected = !items[index].selected
    setFinalOrder({ ...finalOrder, items })
  }

  const reset = () => {
    setFinalOrder(finalOrderCopy)
  }

  const selectQTY = (value, index) => {
    const { items } = finalOrder
    items[index].quantity = value + ''
    setFinalOrder({ ...finalOrder, items })
  }

  const selectReason = (value, index) => {
    const { items } = finalOrder
    items[index].reason = value
    setFinalOrder({ ...finalOrder, items })
  }

  const SubmitComplaint = () => {
    const { return_type, items, order_id } = finalOrder
    if (!return_type) {
      alert('Please select a type of request')
      return false
    }
    let selectedObjects = []
    items.forEach(({ selected }, i) => {
      if (selected) {
        selectedObjects.push(i)
      }
    })
    if (!selectedObjects.length) {
      alert('Please select a product')
      return false
    }
    for (let k in selectedObjects) {
      if (!items[k].quantity) {
        alert('Please select quantity for ' + items[k].name)
        return false
      } else if (!items[k].reason) {
        alert('Please select reason for ' + items[k].name)
        return false
      }
    }
    if (!comment) {
      alert('Please enter comment')
      return false
    }
    let { items: arrayItems } = finalOrder
    const filtered = arrayItems.filter((value, index, arr) => {
      if (value.selected) {
        return value
      }
    })
    APIFuncs.createMyRMA(token, {
      return_type,
      order_id,
      comment,
      items: filtered,
    }).then(res => {
      if (res) {
        if (res.status === 'failed') {
          alert('Unable to process your request at this time!')
        } else {
          setResponse(res.response)
        }
      }
    })
  }

  const QtyLooper = num => {
    const arry = []
    for (let i = 0; i < num; i++) {
      arry.push(i + 1)
    }
    return arry.map((item, index) => (
      <MenuItem key={'item' + index} value={`${index + 1}`}>
        {`${index + 1}`}
      </MenuItem>
    ))
  }

  // console.log('ReadyForDispute', finalOrder)
  return (
    <div className={'pageContainer'}>
      <Head>
        <title>Disputes</title>
      </Head>
      {!response ? (
        <Fragment>
          {finalOrder && (
            <div className={'bodyContainer'}>
              {finalOrder.return_type ? (
                <div className={'orderDetail'}>
                  <Button
                    onClick={reset}
                    className={classes.Button}
                    variant={'contained'}
                    color={'secondary'}
                    startIcon={<ArrowBackIos />}
                    fullWidth>
                    Change Request Option
                  </Button>
                  <span
                    style={{
                      width: '96%',
                      margin: '2vh 2%',
                      fontSize: '1.8vh',
                      fontWeight: 'bold',
                    }}>
                    {`select product to ${finalOrder.return_type}`}
                  </span>
                  {finalOrder.items.map(
                    (
                      {
                        name,
                        price,
                        qty,
                        quantity,
                        sku,
                        reason,
                        selected,
                        img,
                        size,
                      },
                      index
                    ) => (
                      <div key={'ITEMS' + index} className={'itemContainer'}>
                        <img src={img} className={'itemImg'} />
                        <div className={'itemInfo'}>
                          <span
                            style={{
                              width: '100%',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}>
                            {name}
                          </span>
                          <span
                            style={{
                              width: '100%',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}>{`Rs ${price}`}</span>
                          <span
                            style={{
                              width: '100%',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}>{`size : ${size}`}</span>
                          <div
                            style={{
                              width: '95%',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}>
                            <TextField
                              disabled={!selected}
                              select
                              label="Select Quantity"
                              value={quantity}
                              fullWidth
                              onChange={({ target: { value } }) => {
                                selectQTY(value, index)
                              }}
                              className={classes.qtySelector}>
                              <MenuItem value={''}>
                                {'select quantity'}
                              </MenuItem>
                              {QtyLooper(parseInt(qty))}
                            </TextField>

                            {selected ? (
                              <RadioButtonChecked
                                onClick={() => {
                                  selectItem(index)
                                }}
                              />
                            ) : (
                              <RadioButtonUnchecked
                                onClick={() => {
                                  selectItem(index)
                                }}
                              />
                            )}
                          </div>
                          {quantity && (
                            <TextField
                              select
                              label="Select Reason"
                              value={reason}
                              fullWidth
                              onChange={({ target: { value } }) => {
                                selectReason(value, index)
                              }}
                              className={classes.qtySelector}>
                              <MenuItem value={''}>{'Select Reason'}</MenuItem>
                              <MenuItem value="Can't make it work">
                                Can't make it work
                              </MenuItem>
                              <MenuItem value="Dead on arrival">
                                Dead on arrival
                              </MenuItem>
                              <MenuItem value="Damaged during shipping">
                                Damaged during shipping
                              </MenuItem>
                              <MenuItem value="Manufacturer defect">
                                Manufacturer defect
                              </MenuItem>
                              <MenuItem value="Out of warranty">
                                Out of warranty
                              </MenuItem>
                              <MenuItem value="Wrong item delivered">
                                Wrong item delivered
                              </MenuItem>
                              <MenuItem value="Wrong item ordered">
                                Wrong item ordered
                              </MenuItem>
                              <MenuItem value="Wrong size delivered">
                                Wrong Size Delivered
                              </MenuItem>
                              <MenuItem value="Wrong size ordered">
                                Wrong Size Ordered
                              </MenuItem>
                              <MenuItem value="Wrong color delivered">
                                Wrong Color Delivered
                              </MenuItem>
                              <MenuItem value="Wrong color ordered">
                                Wrong Color Ordered
                              </MenuItem>
                              <MenuItem value="Not satisfied with Quality">
                                Not Satisfied with Quality
                              </MenuItem>
                              <MenuItem value="Wrong description online">
                                Wrong description online
                              </MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                            </TextField>
                          )}
                        </div>
                      </div>
                    )
                  )}
                  <TextField
                    value={comment}
                    onChange={({ target }) => {
                      setComment(target.value)
                    }}
                    id="outlined-basic"
                    label="Comment"
                    variant="outlined"
                    multiline
                    rows="4"
                    className={classes.commenter}
                  />
                  <Button
                    onClick={SubmitComplaint}
                    className={classes.Button}
                    variant={'contained'}
                    color={'primary'}
                    fullWidth>
                    save
                  </Button>
                </div>
              ) : (
                <div className={'choiceSelector'}>
                  <Button
                    onClick={() => {
                      changeType('replace')
                    }}
                    className={classes.Button}
                    variant={'contained'}
                    color={'secondary'}
                    endIcon={<ArrowForwardIos />}
                    fullWidth>
                    replace
                  </Button>
                  <Button
                    onClick={() => {
                      changeType('refund')
                    }}
                    className={classes.Button}
                    variant={'contained'}
                    color={'secondary'}
                    endIcon={<ArrowForwardIos />}
                    fullWidth>
                    refund
                  </Button>
                </div>
              )}
            </div>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <div className={'responseContainer'}>
            <p>{response}</p>
          </div>
        </Fragment>
      )}

      <style jsx>{`
        .itemContainer {
          width: 96%;
          margin: 2vh 2%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .itemInfo {
          width: 60%;
          display: flex;
          flex-direction: column;
        }
        .bodyContainer {
          display: flex;
          justify-content: center;
        }
        .responseContainer {
          border-radius: 0.5vh;
          margin: 2%;
          padding: 1vh;
          background-color: #ffffff;
          justify-content: center;
        }
        .itemImg {
          width: 35%;
        }
        .orderDetail {
          height: 100%;
          width: 95%;
          overflow-y: scroll;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .orderDetail::-webkit-scrollbar {
          display: none;
        }
        .choiceSelector {
          height: 20vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        @media (min-width: 769px) and (orientation: landscape) {
          .itemImg {
            width: 20%;
          }
          .pageContainer {
            padding: 2vh 18vw;
          }
          .bodyContainer {
            width: 70vw;
            margin: 0;
          }
        }
        @media (max-width: 768px) and (orientation: portrait) {
          .pageContainer {
            width: 100%;
          }
          .bodyContainer {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default disputesPage
