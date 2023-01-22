import React from 'react'
import { useSelector } from 'react-redux'
import Categorie from '@components/mobile/Categorie'
import InitialProps from '@components/InitialProps'
import { useRouter } from 'next/router'

const CatSlug = ({ title }) => {
  const {
    query: { vSlug },
  } = useRouter()
  const { variants } = useSelector(({ MEGAMENU }) => ({
    variants: MEGAMENU.WholeMegaMenu,
  }))
  const vIndex = variants.findIndex(found => found.slug === vSlug)

  return <Categorie title={title} variants={variants} vIndex={vIndex} />
}

CatSlug.getInitialProps = InitialProps

export default CatSlug
