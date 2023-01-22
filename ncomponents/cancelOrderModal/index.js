import React, { useState, useEffect } from 'react'
import {
  Modal,
  Select,
  MenuItem,
  FormControlLabel,
  TextField,
  FormControl,
  InputLabel,
  FormLabel,
  Button,
} from '@material-ui/core'
import Loader from 'react-loader-spinner'
import { Close } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: `calc(100% - ${theme.spacing(2) * 2}px)`,
  },
  formButton: {
    margin: theme.spacing(2),
    width: `calc(100% - ${theme.spacing(2) * 2}px)`,
    background: 'var(--omnisell-ButtonColor)',
  },
  h2: { margin: theme.spacing(2) },
}))

export default ({
  modalOn,
  modalSwitch,
  applyFunc,
  value,
  handleChange,
  slug,
  token,
}) => {
  const [cancellationComment, setCancellationComment] = useState(null)
  const [cancellationReason, setCancellationReason] = useState(null)
  const classes = useStyles()
  useEffect(() => {
    setCancellationComment('')
    setCancellationReason('')
    return () => {
      console.log('will unmount')
    }
  }, [modalOn])
  return (
    <Modal
      className={'Modal'}
      aria-labelledby="app-loader"
      aria-describedby="app-loader-description"
      open={modalOn}
      closeAfterTransition
      hideBackdrop={true}>
      <div className={'paper'}>
        <div className={'paperInner'}>
          <div className={'paperInnerMore'}>
            <div className={'mainBody'}>
              <Close
                onClick={() => {
                  modalSwitch(false)
                }}
                fontSize="large"
                style={{
                  position: 'absolute',
                  top: `-40px`,
                  right: 0,
                  color: '#fff',
                }}
              />
              <h2 className={classes.h2}>Returns Information</h2>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Reasons for cancellation:
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={cancellationReason}
                  onChange={({ target }) => {
                    setCancellationReason(target.value)
                  }}>
                  <MenuItem value="DEFECTIVE_PRODUCT">
                    Item or part defective
                  </MenuItem>
                  <MenuItem value="DAMAGED_PRODUCT">
                    Item or part was broken/damaged on arrival
                  </MenuItem>
                  <MenuItem value="SIZE_FIT_ISSUES"> Size fit issue</MenuItem>
                  <MenuItem value="QUALITY_ISSUES"> Quality issue</MenuItem>
                  <MenuItem value="MISSHIPMENT">
                    Received a different item
                  </MenuItem>
                  <MenuItem value="COLOR_STYLE_ISSUES">
                    Color style issue
                  </MenuItem>
                  <MenuItem value="MISSING_ITEM"> Item missing</MenuItem>
                  <MenuItem value="DEAD_ON_ARRIVAL">
                    Item was dead on arrival
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                className={classes.formControl}
                id="outlined-multiline-flexible"
                label="Additional Information"
                multiline
                rowsMax="6"
                value={cancellationComment}
                onChange={({ target }) => {
                  setCancellationComment(target.value)
                }}
                variant="filled"
              />
              <Button
                className={classes.formButton}
                variant={'contained'}
                color={'primary'}
                fullWidth
                onClick={() => {
                  if (cancellationReason)
                    applyFunc({ cancellationComment, cancellationReason })
                }}>
                Cancel Order
              </Button>
            </div>
          </div>
        </div>
        <style global jsx>{`
          .mainBody {
            position: relative;
            height: 65vh;
            background-color: #fff;
            border-radius: 1vh;
          }
          h2 {
            margin: ;
          }
          .Modal {
            background-color: transparent !important;
          }
          .paper {
            -webkit-tap-highlight-color: transparent;
            background-color: #0000000;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
          }
          .paperInnerMore {
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .paperInner {
            background-color: #00000000;
            width: 100vw;
            height: 100vh;
            padding: 0;
          }
          @media (min-width: 769px) and (orientation: landscape) {
            .mainBody {
              width: 62%;
            }
          }
          @media (max-width: 768px) and (orientation: portrait) {
            .mainBody {
              width: calc(100% - 2vh);
              height: 65vh;
            }
          }
        `}</style>
      </div>
    </Modal>
  )
}
