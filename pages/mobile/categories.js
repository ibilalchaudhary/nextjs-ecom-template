/* eslint-disable indent */
import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router, { useRouter } from 'next/router'
import { APIFuncs } from '@utilts/APIs'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import chunk from 'lodash/chunk'
import { FilterMaker } from '@utilts/utilties'
import Catalog from '@components/mobile/Catalog'
import Head from 'next/head'
import { Grid } from '@material-ui/core'

const Variant = props => {
  const dispatch = useDispatch()
  const [variant, setVariant] = useState(0)
  const [catSelected, setCatSelected] = useState(0)

  const { variants } = useSelector(({ MEGAMENU }) => ({
    variants: MEGAMENU.WholeMegaMenu,
  }))

  const {
    query: { page, price, sort, brands, sizes, Color, search },
    pathname,
  } = useRouter()
  const [listings, setListings] = useState({})
  const [loading, setLoading] = useState(false)

  const pathnames = pathname.split('/')
  const dumbSlug = pathnames[pathnames.length - 1]

  const pageX = page || 1

  const filter = `&${FilterMaker({
    sizes,
    brands,
    Color,
    price,
    sort,
  })}`

  useEffect(() => {
    setLoading(true)
    APIFuncs.GetSubCategoryContent(dumbSlug, pageX, filter)
      .then(response => {
        if (
          (isEmpty(listings) || !isEqual(listings.data, response.data)) &&
          !isEmpty(response)
        ) {
          setListings(response)
          setLoading(false)
        }
      })
      .catch(error => {
        setLoading(false)
      })
  }, [])

  return loading ? (
    <div id="content">
      <div className="loading is-double is-center" />
    </div>
  ) : (
    <div style={{ paddingBottom: 20 }} id="page-wrapper grid view">
      <Head>
        <title>{variants[`${variant}`].q}</title>
      </Head>
      <div className="navigation">
        <ul className="navigation-tabs">
          {!isEmpty(variants) &&
            variants.map(({ name, slug }, index) => (
              <li
                key={slug}
                className={`navigation-tab ${
                  slug === variants[variant].slug ? ' is-selected' : ''
                }`}>
                <a
                  className="navigation-link"
                  onClick={e => {
                    e.preventDefault()
                    setVariant(index)
                    setCatSelected(0)
                  }}
                  href={`/${slug}`}>
                  {name}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="split-categories navigation-tab__content is-selected">
        <div
          className="split-section split-section--grey-bg"
          style={{ flex: '0.33' }}>
          {!isEmpty(variants) && (
            <div
              onClick={() =>
                Router.push(
                  `/mobile/${variants[`${variant}`].slug}/${
                    variants[`${variant}`].slug
                  }`
                )
              }
              
              className={`women-tab categories-item js-tab ${
                catSelected === -1 ? 'is-selected' : ''
              }`}>
              View all
            </div>
          )}
          {!isEmpty(variants) &&
            variants[`${variant}`].children.map(
              ({ name, children, slug }, index) => {
                const lName = name.toLowerCase()
                const properName =
                  lName.charAt(0).toUpperCase() + lName.slice(1)
                return (
                  <div
                    key={'item' + index}
                    onClick={() => {
                      if (!!children) {
                        if (!!children.length) {
                          setCatSelected(index)
                        } else {
                          Router.push(
                            `/mobile/${variants[`${variant}`].slug}/${slug}`
                          )
                        }
                      } else {
                        Router.push(
                          `/mobile/${variants[`${variant}`].slug}/${slug}`
                        )
                      }
                    }}
                    className={`women-tab categories-item js-tab ${
                      catSelected === index ? 'is-selected' : ''} ${properName == "Sale" || properName =="New arrivals"? 'animation-text':''}`}>
                    {properName}
                  </div>
                )
              }
            )}
        </div>
        <div className="split-section">
          <div className="women-tab__content categories-item__content  is-selected">
            {!isEmpty(variants) && !isEmpty(variants[`${variant}`].children) && (
              <Fragment>
                <div
                  className="wrapper"
                  style={{
                    maxWidth: '100%',
                    paddingBottom: 60,
                  }}>
                  {variants[`${variant}`].children.map(
                    ({ name, hc_header_img_url, slug: slugX, children }) => {
                      const lName = name.toLowerCase()
                      const properName =
                        lName.charAt(0).toUpperCase() + lName.slice(1)
                      return (
                        <div
                          key={slugX}
                          onClick={e => {
                            Router.push(
                              `/mobile/${variants[`${variant}`].slug}/${slugX}`
                            )
                          }}
                          className="carousel-module-product box"
                          style={{
                            width: '118px',
                            height: '118px',
                            margin: '10px',
                          }}>
                          <div
                            style={{
                              position: 'relative',
                            }}
                            className="viewable">
                            <a
                              href={`${pathname}/${slugX}`}
                              onClick={e => {
                                e.preventDefault()
                              }}
                              style={{
                                backgroundColor: '#afafaf',
                                borderRadius: 10,
                              }}
                              className="is-shadow-product carousel-module-product-link">
                              <img
                                src={
                                  hc_header_img_url ||
                                  (children[0]
                                    ? children[0].hc_header_img_url
                                    : '/images/placeholder.png')
                                }
                                width={118}
                                height={118}
                                className=" lazyloaded"
                              />
                            </a>
                            <h2
                              style={{
                                position: 'absolute',
                                bottom: '40%',
                                textAlign: 'center',
                                width: '100%',
                                color: '#fff',
                                fontWeight: 'bold',
                                textShadow: '0px 2px 3px #555',
                              }}>
                              {properName}
                            </h2>
                          </div>
                        </div>
                      )
                    }
                  )}
                </div>
                {/* {chunk(
                  variants[`${variant}`].children[catSelected].children.slice(
                    2
                  ),
                  3
                ).map((element, index) => (
                  <div className="row grid " key={'item' + index}>
                    {element.map(
                      ({ name, hc_img_url, slug, children }, index) => {
                        const lName = name.toLowerCase()
                        const properName = lName
                        return (
                          <a
                            key={'Inneritem' + index}
                            href=""
                            onClick={e => {
                              e.preventDefault()
                              Router.push(
                                `/${variants[`${variant}`].slug}/${
                                  variants[`${variant}`].children[catSelected]
                                    .slug
                                }/${slug}`
                              )
                            }}
                            className=" half ">
                            <div
                              className="full viewable"
                              style={{ textAlign: 'center' }}>
                              <img
                                src={
                                  hc_img_url ||
                                  (children[0]
                                    ? children[0].hc_img_url
                                    : '/images/placeholder.png')
                                }
                                width={142}
                                className=" lazyloaded"
                              />
                              <span
                                style={{
                                  color: 'black',
                                  fontSize: 14,
                                  display: 'block',
                                  margin: '5 auto',
                                }}>
                                {properName}
                              </span>
                            </div>
                          </a>
                        )
                      }
                    )}
                  </div>
                ))} */}
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
          grid-column-gap: calc(100% - 276px);
          grid-row-gap: 6px;
        }
      `}</style>
    </div>
  )
}

export default Variant
