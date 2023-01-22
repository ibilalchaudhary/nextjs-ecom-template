import React from 'react'
import { useSelector } from 'react-redux'
import Categorie from '@components/desktop/Categorie'
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

  return variants[0] ? (
    <Categorie title={title} variants={variants} vIndex={vIndex} />
  ) : (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  )
}

CatSlug.getInitialProps = InitialProps

export default CatSlug
