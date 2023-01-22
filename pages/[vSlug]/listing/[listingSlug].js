import React from 'react'
import { useSelector } from 'react-redux'
import Listing from '@components/desktop/Listing'
import InitialProps from '@components/InitialProps'
import { useRouter } from 'next/router'
const ListingSlug = () => {
  const {
    query: { vSlug },
  } = useRouter()

  const variants = useSelector(
    ({ MEGAMENU: { WholeMegaMenu } }) => WholeMegaMenu
  )
  const vIndex = variants.findIndex(({ slug }) => slug === vSlug)
  return variants.length !== 0 ? (
    <Listing variants={variants} vIndex={vIndex} />
  ) : (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  )
}

ListingSlug.getInitialProps = InitialProps

export default ListingSlug
