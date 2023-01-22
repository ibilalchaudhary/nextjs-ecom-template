import React from 'react'
import { useSelector } from 'react-redux'
import InitialProps from '@components/InitialProps'
import { useRouter } from 'next/router'

const Index = () => {
  const { variants, brand } = useSelector(
    ({ MEGAMENU: { WholeMegaMenu: variants }, APPSTATE: { brand } }) => ({
      variants,
      brand,
    })
  )
  const { push, replace } = useRouter()
  variants[0] && brand !== '' && replace(`/${variants[0].slug}`)
  return (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  )
}

Index.getInitialProps = InitialProps

export default Index
