import React, { useState, createRef } from 'react'
import Router, { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import { Delete as DustBin, Info as InfoIcon } from '@material-ui/icons'
import { FilterMaker } from '@utilts/utilties'
import { useDispatch, useSelector } from 'react-redux'
import { addOrRemoveFromWishlist } from '@redux/action'
import useListing from '@components/useListing'
import slugify from 'slugify'
import isEmpty from 'lodash/isEmpty'
import Notification from '@components/Notification'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  gridList: {
    width: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))
const MyStyle = {
  item: { width: '15.5vw', height: '19vw', margin: '0 0.5vw 0.5vw 0.5vw' },
}
const wishlist = props => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const scrollRef = createRef()
  const [hControls, setHControls] = useState(false)
  const [notifMessage, setNotifMessage] = useState('')
  const [listingHover, setListingHover] = useListing()
  const [loading, setLoading] = useState(false)
  const [loadingId, setLoadingId] = useState(false)
  const { cart, wishlist, token, user } = useSelector(({ USER }) => ({
    cart: USER.cart,
    wishlist: USER.wishlist,
    token: USER.token,
    user: USER,
  }))
  const { query, pathname, push } = useRouter()

  const changeWishlist = (product, variant) => {
    setLoading(true)
    setLoadingId(product._id)
    addOrRemoveFromWishlist(
      {
        product,
        variant,
      },
      wishlist,
      token
    )(dispatch).then(() => setLoading(false))
  }

  return (
    <div className="wishlistPage">
      {!isEmpty(wishlist) ? (
        <div className={classes.root}>
          <GridList className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">{`Wishlist (${wishlist.length} items)`}</ListSubheader>
            </GridListTile>
            {wishlist.map(({ product, variant }) => {
              return (
                <GridListTile key={product._id} style={MyStyle.item}>
                  <img
                    src={
                      product.imgA.length !== 0
                        ? product.imgA[0].medium
                        : '/images/placeholder.png'
                    }
                    alt={product.name}
                    onClick={() => {
                      push({
                        pathname: `/[vSlug]/listing/${slugify(product.name, {
                          lower: true,
                        })}`,
                        query: { id: product._id },
                      })
                    }}
                  />
                  <GridListTileBar
                    title={
                      <span
                        onClick={() => {
                          push({
                            pathname: `/[vSlug]/listing/${slugify(
                              product.name,
                              {
                                lower: true,
                              }
                            )}`,
                            query: { id: product._id },
                          })
                        }}
                        style={{ fontSize: '1.6vh' }}>
                        {product.name}
                      </span>
                    }
                    subtitle={
                      <span>{`Rs ${variant.price.toLocaleString()}`}</span>
                    }
                    actionIcon={
                      <IconButton
                        aria-label={`delete ${product.name}`}
                        className={classes.icon}>
                        <DustBin
                          onClick={e => {
                            changeWishlist(product, variant)
                          }}
                        />
                      </IconButton>
                    }
                  />
                </GridListTile>
              )
            })}
          </GridList>
        </div>
      ) : (
        <div id="wishList" className="page-wrapper">
          <div className="wishlist-empty">
            <span className="wishlist-empty-icon" />
            <div className="wishlist-empty-text">
              <span
                style={{ marginBottom: 30 }}
                className="text_cta link return_link"
                title="Continue Shopping">
                Your wishList is empty
              </span>
            </div>
            <a
              className="wishlist-products-page wishlist-login block_button emphasise"
              href=""
              onClick={e => {
                e.preventDefault()
                push('/')
              }}
              title="Login to view your wishlist">
              Continue shopping
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .wishlistPage {
          width: 66vw;
          min-height: calc(100vh - 402px);
          margin: 0 17vw;
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  )
}

export default wishlist;
