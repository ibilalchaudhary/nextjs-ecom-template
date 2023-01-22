/* eslint-disable react/jsx-fragments */
import React, { useState, useEffect, Fragment } from 'react'
import Router, { useRouter } from 'next/router'
import { FilterMaker } from '@utilts/utilties'
import { useDispatch, useSelector } from 'react-redux'
import { APIFuncs } from '@utilts/APIs'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'

const SearchMobile = () => {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [, setLoading] = useState(false)
  const { push } = useRouter()
  const { variants } = useSelector(({ MEGAMENU }) => ({
    variants: MEGAMENU.WholeMegaMenu,
  }))
  // console.log('Varient', variants)

  const filter = `&${FilterMaker({
    sizes: undefined,
    brands: undefined,
    Color: undefined,
    price: undefined,
    sort: undefined,
  })}`

  useEffect(() => {
    getListings()
  }, [])
  const getListings = () => {
    APIFuncs.GetSubCategoryContent('women', 1, filter)
      .then(response => {
        if (
          (isEmpty(listings) || !isEqual(listings, response.data)) &&
          !isEmpty(response)
        ) {
          setListings(response.data)
          setLoading(false)
        }
        // console.log('response', response);
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
      })
  }

  return (
    <div className="page-wrapper search-view">
      <div id="searchView" className="search" data-client-render>
        <div>
        <div className="search-view-wrapper is-visible">
            <div className="search-text">
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={search}
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    if (!!search) {
                      push('/mobile/search/' + search)
                    }
                  }
                }}
                onChange={({ target: { value } }) => {
                  setSearch(value)
                }}
              />
            </div>
            <i
              className="icon-search"
              onClick={() => {
                if (!!search) {
                  push('/mobile/search/' + search)
                }
              }}
            />
          </div>
          <div className="search-overlay">
            <div className="search-header">
              <div className="search-header-wrapper">
                <div className="search-close">
                  <i className="icon-back" />
                </div>
              </div>
            </div>
            <div className="search-content">
              <div>
                <ul className="search-suggestions" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {!!variants.length && (
        <Fragment>
          <div className="search-trending">
            <h4 className="search-trending-title">Trending Searches</h4>
            <div
              style={{ marginTop: 10, textAlign: 'center' }}
              className="trending">
              {variants[0].children.slice(0, 4).map(({ name, slug }) => {
                const lName = name.toLowerCase()
                const properName =
                  lName.charAt(0).toUpperCase() + lName.slice(1)
                return (
                  <span
                    key={properName}
                    onClick={() => {
                      push(`/mobile/women/${slug}`)
                    }}
                    style={{
                      padding: '10px 20px',
                      borderRadius: 3,
                      backgroundColor: '#f2f2f2',
                      marginRight: 20,
                      height: 30,
                      marginBottom: 15,
                      display: 'inline-block',
                    }}>
                    {properName}
                  </span>
                )
              })}
              {!!variants[1] && (
                <Fragment>
                  {variants[1].children
                    .slice(0, 4)
                    .map(({ name, slug }) => {
                      const lName = name.toLowerCase()
                      const properName =
                        lName.charAt(0).toUpperCase() + lName.slice(1)
                      return (
                        <span
                          key={properName}
                          onClick={() => {
                            push(`/mobile/men/${slug}`)
                          }}
                          style={{
                            padding: '10px 20px',
                            borderRadius: 3,
                            backgroundColor: '#f2f2f2',
                            marginRight: 20,
                            height: 30,
                            marginBottom: 15,
                            display: 'inline-block',
                          }}>
                          {properName}
                        </span>
                      )
                    })}
                </Fragment>
              )}
            </div>
          </div>
        </Fragment>
      )}
      <div className="search-trending">
        <h4 className="search-trending-title">Popular products</h4>
        <div
          style={{ marginTop: 10, textAlign: 'center' }}
          className="trending">
          <div style={{ height: 200 }} className="carousel-module-wrapper">
            <div className="carousel-module-scrollable">
              <div className="carousel-module-products">
                {listings
                  .slice(0, 10)
                  .map(({ imgA, name, slug, variants, _id }) => (
                    <div key={_id} className="carousel-module-product">
                      <a
                        href={`/listing/${slug}`}
                        onClick={e => {
                          e.preventDefault()
                          Router.push({
                            pathname: `/listing/${slug}`,
                            query: { id: _id },
                          })
                        }}
                        className="is-shadow-product carousel-module-product-link">
                        <div>
                          <img
                            className="list-product-image carousel-module-product-image lazyloaded"
                            alt="Button Detail Wrap Skirt"
                            width="100px"
                            height="100px"
                            src={imgA[0].small}
                          />
                        </div>
                        <div className="carousel-module-product-info">
                          <h3 className="list-product-brand carousel-module-product-brand">
                            {name}
                          </h3>
                          <span className="list-product-price has-special">
                            <span
                              style={{ color: '#999' }}
                              className="price-regular line-through">
                              {`Rs ${variants[0].mrp.toLocaleString()}`}
                            </span>
                            <span className="price-special">{`Rs ${variants[0].price.toLocaleString()}`}</span>
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMobile
