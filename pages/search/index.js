import React, { useState, useEffect, Fragment } from 'react'
import Router, { useRouter } from 'next/router'
import { FilterMaker } from '@utilts/utilties'
import { useDispatch, useSelector } from 'react-redux'
import { APIFuncs } from '@utilts/APIs'
import isEqual from 'lodash/isEqual'
import slugify from 'slugify'
import isEmpty from 'lodash/isEmpty'

const SearchView = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [listings, setListings] = useState({})
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const { variants } = useSelector(({ MEGAMENU }) => ({
    variants: MEGAMENU.WholeMegaMenu,
  }))
  const getListings = () => {
    APIFuncs.GetSubCategoryContent('women', 1, '')
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
        console.log('error', error)
        setLoading(false)
      })
  }

  useEffect(() => {
    getListings()
  }, [])

  return (
    <div className="searchView">
      <div id="searchView" className="search" data-client-render="true">
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
                      push('/search/' + search)
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
                  push('/search/' + search)
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
              {variants[0].children.slice(0, 4).map(({ name, slug }, index) => {
                const lName = name.toLowerCase()
                const properName =
                  lName.charAt(0).toUpperCase() + lName.slice(1)
                return (
                  <span
                    key={properName}
                    onClick={() => {
                      push(`/women/${slug}/?page=1`)
                    }}
                    className="HoverAble"
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
                    .map(({ name, slug }, index) => {
                      const lName = name.toLowerCase()
                      const properName =
                        lName.charAt(0).toUpperCase() + lName.slice(1)
                      return (
                        <span
                          className="HoverAble"
                          key={properName}
                          onClick={() => {
                            push(`/men/${slug}/?page=1`)
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
                {!isEmpty(listings.data) &&
                  listings.data
                    .slice(0, 10)
                    .map(({ imgA, name, slug, variants, _id }) => {
                      let renderCut = false
                      variants[0].price < variants[0].mrp && (renderCut = true)
                      return (
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
                                {renderCut && (
                                  <span
                                    style={{ color: '#999' }}
                                    className="price-regular line-through">
                                    {`Rs ${variants[0].mrp.toLocaleString()}`}
                                  </span>
                                )}
                                <span className="price-special">{`Rs ${variants[0].price.toLocaleString()}`}</span>
                              </span>
                            </div>
                          </a>
                        </div>
                      )
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
          font-size: 12px;
        }
        .HoverAble {
          cursor: pointer;
        }
        .search-trending {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          width: 100%;
          padding: 5px;
          background: #fff;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          padding-top: 14px;
          margin-top: 15px;
        }
        .search-input {
          width: calc(100% - 32px);
          height: 45px;
          border: none;
          font-size: 17px;
          /* text-indent: 43px; */
          box-shadow: 0 3px 5px transparent;
          -webkit-transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
          transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
          background: transparent;
          padding: 0 15px;
          font-family: inherit;
        }
        .search-view-wrapper {
          -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;
          -webkit-transition: opacity 0.2s, transform 0.2s;
          transition: opacity 0.2s, transform 0.2s;
          -webkit-transform: translateY(-70px);
          -ms-transform: translateY(-70px);
          transform: translateY(-70px);
        }
        .search-view-wrapper.is-visible {
          -webkit-transform: none;
          -ms-transform: none;
          transform: none;
        }
        .search-text {
          width: 100%;
        }
        .icon-search {
          display: inline-block;
          width: 30px;
          height: 30px;
          background-size: contain;
          background-repeat: no-repeat;
          vertical-align: middle;
          text-align: center;
          background-image: url(/web-mobile/5be10c57f451ef52afb67c09621a6237.png);
        }
        .search {
          width: 100%;
          padding: 0;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.12);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
          background: #fff;
          border-radius: 3px;
        }
        search-trending .search-trending-title {
          text-indent: 6px;
          padding: 10px;
          font-weight: 500;
          font-size: 15px;
          color: #4c4c4c;
        }
        .search .icon-search {
          position: absolute;
          width: 22px;
          opacity: 0.4;
          top: 12px;
          right: 18px;
        }
        .searchView {
          width: 66vw;
          background-color: #f0f0f0;
          margin: 0 17vw;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding: 10px;
          min-height: calc(100vh - 402px);
        }

        .carousel-module-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          height: 300px;
          padding: 20px 0;
        }
        .carousel-module-scrollable {
          overflow-y: hidden;
          position: absolute;
          padding-bottom: 20px;
          height: 100%;
          width: 100%;
        }
        .carousel-module-product {
          -webkit-flex-shrink: 0;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          margin-right: 10px;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .carousel-module-product-link {
          display: block;
          background: #fff;
          width: 152px;
          -webkit-text-decoration: none;
          text-decoration: none;
        }
        .carousel-module-product-info {
          position: relative;
        }
        .carousel-module-product-image {
          width: auto !important;
          position: relative;
        }
        .list-product-brand {
          text-transform: capitalize;
          color: #333;
          margin-top: 10px;
          font-size: 14px;
        }
        .list-product-price {
          color: #2560a9;
          margin-top: 2px;
          line-height: 15px;
          display: inline-block;
          font-weight: 700;
          font-size: 12px;
        }
        .price-special {
          font-size: 12px;
          color: #e00000;
          font-weight: 900;
          margin-left: 3px;
        }
        .price-regular {
          font-size: 13px;
        }
        .price-special {
          color: #2560a9;
          font-size: 13px;
        }
        .has-special .price-regular {
          -webkit-text-decoration: line-through;
          text-decoration: line-through;
        }
        .line-through {
          -webkit-text-decoration: line-through;
          text-decoration: line-through;
        }
        .has-special {
          font-size: 12px;
        }
        .list-product-brand {
          margin-top: 5px;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 700;
          width: 100%;
          line-height: 15px;
        }
        .filter-title,
        .list-product-brand,
        .list-product-name,
        .refine-style-name {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .carousel-module-product-image,
        .list-product-image,
        .product-overview-link-image {
          max-width: 100%;
        }
        .lazyloaded {
          opacity: 1;
          -webkit-transition: opacity 0.3s;
          transition: opacity 0.3s;
          will-change: auto;
        }
        .list-product-image {
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: 0 auto;
        }
        .carousel-module-products {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          margin: 10px;
        }
        .list-product-image {
          border-radius: 5px;
        }
        .carousel-module-wrapper::after {
          content: ' ';
          position: absolute;
          right: 0;
          top: 10px;
          width: 50px;
          height: 288px;
          z-index: 1;
          background: linear-gradient(
            90deg,
            hsla(0, 0%, 100%, 0) 0,
            hsla(0, 0%, 100%, 0.5)
          );
        }
        .carousel-module-scrollable {
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: -ms-autohiding-scrollbar;
        }
      `}</style>
    </div>
  )
}

export default SearchView
