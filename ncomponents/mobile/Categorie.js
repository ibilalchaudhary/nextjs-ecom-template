// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { APIFuncs } from '@utilts/APIs'
import { FilterMaker } from '@utilts/utilties'
import Catalog from '@components/mobile/Catalog'
import Head from 'next/head'
import Whatsapp from '@components/whatsapp'
// import FBChat from 'react-messenger-customer-chat'
const Categorie = ({ variants, vIndex, title }) => {
  const dispatch = useDispatch()
  const { query, pathname, push, replace } = useRouter()
  const variant = variants[vIndex]
  const [loading, setLoading] = useState(false)
  const [listings, setListings] = useState({})
  const [loadData, setLoadData] = useState(false)

  const {
    page,
    price,
    sort,
    vSlug,
    slug,
    childSlug,
    brands,
    sizes,
    Color,
    search,
  } = query

  const pageX = page || 1

  const filter = `&${FilterMaker({
    sizes,
    brands,
    Color,
    price,
    sort,
  })}`

  const categorie =
    slug === vSlug
      ? variant
      : variant.children.find(found => found.slug === slug)
  // console.log('categorie', categorie)
  const subCategorie =
    slug === vSlug
      ? {}
      : categorie.children.find(found => found.slug === childSlug) || {}
      const loadMore = value => {
        setLoadData(true);
        APIFuncs.GetSubCategoryContent(childSlug || slug, value, filter)
          .then(response => {
           if(listings.data){
            response.data.unshift(...listings.data)
           }
            setListings(response)
            setLoadData(false);
          })
          .catch(error => console.log('error', error))
      }
  useEffect(() => {
    loadMore(pageX)
    setLoading(true)
    // console.log('Filter', filter)
    APIFuncs.GetSubCategoryContent(childSlug || slug, pageX, filter)
      .then(response => {
        setListings(response)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.log('error', error)
      })
  }, [])

  return loading ? (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  ) : (
    <div id="page-wrapper grid view">
      <Head>
        <title>{`${subCategorie.q || categorie.q} | ${title}`}</title>
      </Head>
      {/* <h2
        style={{ padding: 20 }}
        className="cartSlider-header-title">{`${subCategorie.q ||
        categorie.q} | ${variant.q}`}</h2>  */}
      <Catalog
        title={subCategorie.q || categorie.q}
        listings={listings}
        categories={[]}
        setLoading={setLoading}
        loading={loading}
        variant={variant}
        variants={variants}
        loadData={loadData}
        onLoadMore={loadMore}
      />

      {/* <FBChat
        pageId="107252286033498"
        themeColor="#f53397"
        htmlRef={window.location.pathname}
      /> */}
    </div>
  )
}

export default Categorie;
