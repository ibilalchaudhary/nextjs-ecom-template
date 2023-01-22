import React from 'react'
import Variant from '@components/mobile/Variant'
import { useSelector } from 'react-redux'
import InitialProps from '@components/InitialProps'
import Router from 'next/router'

const Index = () => {
  const {
    query: { vSlug },
  } = Router
  const { variants, settings } = useSelector(({ MEGAMENU, SETTINGS }) => ({
    variants: MEGAMENU.WholeMegaMenu,
    settings: SETTINGS.settings,
  }))
  const vIndex = variants.findIndex(found => found.slug === vSlug)

  return <Variant settings={settings} variants={variants} vIndex={vIndex} />
}
Index.getInitialProps = InitialProps
export default Index
