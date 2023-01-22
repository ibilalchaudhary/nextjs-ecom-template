import React from 'react'
import Link from 'next/link'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyle = makeStyles(theme => ({
  button: {
    background: 'var(--omnisell-ButtonColor)',
    borderRadius: '0.5vh !important',
    width: '95%',
    height: '6.5vh',
    marginTop: '2.4vh',
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
  },
  text1: {
    width: '100%',
    overflowWrap: 'break-word',
    [theme.breakpoints.up('md')]: {
      fontSize: '3vh',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '5.5vw',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '4vw',
    },
  },
  Container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    letterSpacing: '0.02857em',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      width: '95%',
      height: '95%',
      borderRadius: '0.5vh',
    },
    [theme.breakpoints.only('md')]: {
      width: '95%',
      height: '95%',
      borderRadius: '0.5vh',
    },
  },
  imageContainer: {
    width: '95%',
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: '35%',
      height: '30%',
    },
  },
}))
export default ({ backToPath, displayText, image, buttonText }) => {
  const Classes = useStyle()
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div className={Classes.Container}>
        <div className={Classes.imageContainer}>
          {image && <img src={image} style={{ width: '100%' }} />}
        </div>
        <div
          style={{
            margin: [['1vh', 0]],
            width: '95%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            display: 'inline-block',
          }}>
          {displayText && <p className={Classes.text1}>{displayText}</p>}
        </div>
        {buttonText && (
          <Link href={backToPath}>
            <Button
              variant={'contained'}
              color={'primary'}
              className={Classes.button}>
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
