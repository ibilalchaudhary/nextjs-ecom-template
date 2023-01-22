import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Variant from '@components/desktop/Variant'
import InitialProps from '@components/InitialProps'

const Index = () => {
  const {
    query: { vSlug },
  } = useRouter()
  const { variants, settings } = useSelector(({ MEGAMENU, SETTINGS }) => ({
    variants: MEGAMENU.WholeMegaMenu,
    settings: SETTINGS.settings,
  }))

  const vIndex = variants.findIndex(({ slug }) => slug === vSlug)

  return variants[0] ? (
    <Variant settings={settings} variants={variants} vIndex={vIndex} />
  ) : (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  )
}

Index.getInitialProps = InitialProps

export default Index
