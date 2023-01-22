// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { APIFuncs } from '@utilts/APIs'
import { FilterMaker } from '@utilts/utilties'
import Catalog from '@components/desktop/Catalog'
import Head from 'next/head'
import Whatsapp from '@components/whatsapp'
import FBChat from 'react-messenger-customer-chat'

const Categorie = ({ vIndex, variants, title }) => {
  //console.log('Varients', variants)
  //console.log('vIndex', vIndex)
  const { query, pathname } = useRouter()
  const variant = variants[vIndex]
  const [loading, setLoading] = useState(false)
  const [loadData, setLoadData] = useState(false)
  const [listings, setListings] = useState({})

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
  const loadMore = value => {
    setLoadData(true)
    APIFuncs.GetSubCategoryContent(childSlug || slug, value, filter)
      .then(response => {
        if (listings.data) {
          response.data.unshift(...listings.data)
        }
        setListings(response)
        setLoadData(false)
      })
      .catch(error => console.log('error', error))
  }
  const categorie =
    slug === vSlug
      ? variant
      : variant.children.find(found => found.slug === slug)

  const subCategorie =
    slug === vSlug
      ? {}
      : categorie.children.find(found => found.slug === childSlug) || {}

  useEffect(() => {
    loadMore(pageX)
    // APIFuncs.GetSubCategoryContent(childSlug || slug, pageX, filter)
    //   .then(response => {
    //     console.log(response)
    //     setListings(response)
    //   })
    //   .catch(error => console.log('error', error))
  }, [])
  return (
    <div id="content">
      <Head>
        <title>{`${subCategorie.q || categorie.q} | ${title}`}</title>
      </Head>
      <div
        style={{ width: '98%' }}
        className="site_width_container responsive-layout__container-wrapper">
        {!childSlug && (
          <section style={{ marginTop: 60 }} className="brand-banner">
            <div className="row">
              <div className="column full_width">
                <div className="catalog_banner_top tb_three">
                  <h2 className="tb_title">{categorie.name}</h2>
                  <p className="cat_description">
                    We’ve got exactly what you want to wear, right here, right
                    now. From of-the-moment pieces to classic style staples, our
                    selection of brands will give your wardrobe the upgrade it
                    needs.
                  </p>
                  <div className="children">
                    {categorie.children.map(({ name, slug: slugX }) => {
                      return (
                        <a
                          key={slugX + 'd'}
                          href={`${pathname.replace('[slug]', slug)}/${slugX}`}
                          onClick={e => {
                            e.preventDefault()

                            Router.push('/' + vSlug + '/' + slug + '/' + slugX)
                          }}>
                          <span className="button">{name}</span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <Catalog
          title={subCategorie.q || categorie.q}
          listings={listings}
          categories={[]}
          variant={variant}
          setLoading={setLoading}
          loading={loading}
          loadData={loadData}
          onLoadMore={loadMore}
        />
      </div>
      {/* <Whatsapp />  */}
      <FBChat
        pageId="107252286033498"
        themeColor="#f53397"
        htmlRef={window.location.pathname}
      />
    </div>
  )
}

export default Categorie
