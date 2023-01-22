import React, { useState, useEffect, createRef } from 'react'
import Router, { useRouter } from 'next/router'
import { APIFuncs } from '@utilts/APIs'
import { FilterMaker } from '@utilts/utilties'
import InitialProps from '@components/InitialProps'
import Catalog from '@components/desktop/Catalog'
import { isEmpty } from 'lodash'
import useListing from '@components/useListing'
import Head from 'next/head'
import Whatsapp from '@components/whatsapp'
import {
  addorRemoveFromCart,
  addOrRemoveFromWishlist,
  setAuthModal,
} from '@redux/action'
const Categorie = ({}) => {
  const { query, pathname } = useRouter()
  const [loading, setLoading] = useState(false)
  const [listings, setListings] = useState({})

  const { page, price, sort, brands, sizes, Color, searchSlug } = query

  const pageX = page || 1

  const filter = `&${FilterMaker({
    sizes,
    brands,
    Color,
    price,
    sort,
  })}`

  useEffect(() => {
    APIFuncs.GetContentForSearch(searchSlug, pageX, filter)
      .then(response => {
        setListings(response)
      })
      .catch(error => console.log('error', error))
  }, [])

  return (
    <div id="content">
      {/* <Head>
        <title>{`${subCategorie.q || categorie.q} | ${title}`}</title>
      </Head> */}
      <div
        style={{ width: '98%' }}
        className="site_width_container responsive-layout__container-wrapper">
        <Catalog
          title={searchSlug}
          listings={listings}
          categories={[]}
          setLoading={setLoading}
          loading={loading}
        />
      </div>
      {/* <Whatsapp /> */}
    </div>
  )
}
Categorie.getInitialProps = InitialProps
export default Categorie
