import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Listing from '@components/mobile/Listing'
import InitialProps from '@components/InitialProps'

const ListingSlug = () => {
  const {
    query: { vSlug },
  } = useRouter()

  const { variants } = useSelector(
    ({ MEGAMENU: { WholeMegaMenu: variants } }) => ({
      variants,
    })
  )
  const vIndex = variants.findIndex(({ slug }) => slug === vSlug)

  return <Listing variants={variants} vIndex={vIndex} />
}

ListingSlug.getInitialProps = InitialProps

export default ListingSlug
