import React from 'react'
import { useSelector } from 'react-redux'
import Categorie from '@components/desktop/Categorie'
import InitialProps from '@components/InitialProps'
import { useRouter } from 'next/router'

const Cat = ({ title }) => {
  const {
    query: { vSlug },
  } = useRouter()

  const { variants } = useSelector(({ MEGAMENU }) => ({
    variants: MEGAMENU.WholeMegaMenu,
  }))
  const vIndex = variants.findIndex(found => found.slug === vSlug)

  if (variants[0])
    return <Categorie variants={variants} title={title} vIndex={vIndex} />
  return (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  )
}

Cat.getInitialProps = InitialProps

export default Cat
