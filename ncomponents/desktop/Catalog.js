/* eslint-disable prefer-template */
// @ts-nocheck
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import React, { createRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { APIFuncs } from '@utilts/APIs'
import { addorRemoveFromCart, addOrRemoveFromWishlist, setAuthModal } from '@redux/action'

const Catalog = ({ title, listings, categories, onLoadMore, loadData }) => {
  const dispatch = useDispatch()
  const scrollRef = createRef()

  const [hControls, setHControls] = useState(false)
  const [filterSizes, setFilterSizes] = useState([])
  const [filterPrice, setFilterPrice] = useState([0, 0])
  const [noMoreData, setNoMoreData] = useState(0)
  const [selectedItem, setSelectedItem] = useState({})
  const [isQuickViewPopup, setQuickViewPopup] = useState(false)
  const [selectedViewData, setSelectedViewData] = useState({})
  const [sizeSelected, setSelectedSize] = useState('')
  const [notif, setNotif] = useState(false)
  const [loading, setLoading] = useState(false)
  const { cart, wishlist, token } = useSelector(({ USER }) => ({
    cart: USER.cart,
    wishlist: USER.wishlist,
    token: USER.token,
  }))
  const { query, pathname, push, back } = useRouter()
  const { vSlug, slug, childSlug, searchSlug, page, price, sort, sizes } = query
  const pageX = page || 1
  const sizesArr = sizes ? sizes.split(',') : []
  const priceArr = price ? price.split(',') : []
  const sortList = [
    {
      title: 'Best Selling',
      value: '-popularity',
    },
    {
      title: 'Price, Low To High',
      value: 'variants.price',
    },
    {
      title: 'Price, High To Low',
      value: '-variants.price',
    },
    {
      title: 'Date, Old to New',
      value: 'createdAt',
    },
    {
      title: 'Date, New to Old',
      value: '-createdAt',
    },
    {
      title: 'Featured',
      value: 'popularity',
    },
  ]

  const priceList = [
    {
      title: 'Under Rs 1,500',
      start: 0,
      end: 1500,
    },
    {
      title: 'Rs 1,500 to Rs 2,500',
      start: 1500,
      end: 2500,
    },
    {
      title: 'Rs 2,500 to Rs 5,000',
      start: 2500,
      end: 5000,
    },
    {
      title: 'Above Rs 5,000',
      start: 5000,
      end: 1000000,
    },
  ]
  const pages = listings.data
    ? Math.ceil(listings.count / listings.pageSize) || 1
    : 1

  const pagesArray = []

  if (pages > 1) {
    for (let i = 0; i < pages; i++) {
      pagesArray.push(i + 1)
    }
  }
  useEffect(() => {
    APIFuncs.getFilters(
      !!searchSlug ? searchSlug : '',
      !!slug ? slug : '',
    ).then(Res => {
      if (Res) {
        const { sizes, price, brands, features } = Res
        setFilterSizes(sizes)
        setFilterPrice(price)
      }
    })
  }, [])
  const sortName = sortList.find(found => found.value === sort)
  const changeWishList = product => {
    addOrRemoveFromWishlist(
      {
        product,
        variant: product.variants[0],
      },
      wishlist,
      token,
    )(dispatch)
  }
  const handleChange = () => {
    var url = new URL(window.location.href)
    var search_params = url.searchParams
    var current_page = search_params.get('page')

    var morePage = parseInt(current_page)
    const urlCheck = pageNum => {
      search_params.set('page', pageNum.toString())
      url.search = search_params.toString()

      var new_url = url.toString()
      window.history.pushState({}, null, new_url)
      onLoadMore(pageNum)
    }

    if (current_page == null) {
      urlCheck(2)
    }
    if (morePage < pages) {
      morePage += 1
      setNoMoreData(morePage)
      urlCheck(morePage)
    }
  }
  const changeCart = (pid, vid) => {
    if (token) {
      setLoading(true)
      addorRemoveFromCart(
        {
          pid,
          vid,
          qty: 1,
        },
        token,
      )(dispatch).then(() => {
        setNotif(true)
        setLoading(false)
      })
    } else {
      setAuthModal(true)(dispatch)
    }
  }

  let Discount = 0
  let Off = 0
  if (selectedViewData.variants) {
    Discount =
      selectedViewData.variants[0].mrp.toFixed(0) -
      selectedViewData.variants[0].price.toFixed(0)
    Off = (Discount / selectedViewData.variants[0].mrp.toFixed(0)) * 100
  }

  const validateId = (a, b) => {
    setSelectedSize(a)
    if (cart && cart.items != '') {
      var x = cart.items.filter(e => {
        return e.product._id == selectedViewData._id
      })
      if (x != '' && b == x[0].variant.size) {
        setNotif(true)
      } else {
        setNotif(false)
      }
    }
  }
  const inCart = cart
    ? cart.items.find(
      found =>
        (found.product ? found.product._id : found.product) ===
        selectedViewData._id && found.variant.size === sizeSelected,
    )
    : null

  const loginCheck = () => {
    push('/checkout')
  }

  return (
    <div className='site_width_container'>
      <div id='catalog_container' ref={scrollRef}>
        <header className='below_special_banner'>
          <div className='column_grid'>
            <div className='row'>
              <div className='column one_quarter'>
                <h1>{`${title}`}</h1>
              </div>
              <div className='column one_quarter'>
                <p className='items'>{`${listings.count} styles`}</p>
              </div>
              <div className='column one_quarter'>
                <div className='controls'>
                  <div
                    className={`option_container ${
                      hControls ? 'active' : 'closed'
                    }`}
                    onMouseEnter={() => setHControls(true)}
                    onMouseLeave={() => setHControls(false)}
                    data-nm-hover-toggle>
                    <a
                      href=''
                      onClick={e => e.preventDefault()}
                      className='option_header'>
                      {sortName ? sortName.title : 'New'}
                    </a>
                    <ul id='catalog_sort_option' className='hoverToggled'>
                      {sortList.map(({ title: titleX, value }) => (
                        <li key={value + 'c'}>
                          <a
                            href={`${pathname
                              .replace('[slug]', slug)
                              .replace('[vSlug]', vSlug)
                              .replace(
                                '[childSlug]',
                                childSlug,
                              )}?sort=${value}`}
                            onClick={e => {
                              // e.preventDefault()
                              const newQuery = Object.assign(query)
                              if (!!searchSlug) {
                                delete newQuery['searchSlug']
                                push({
                                  pathname: '/search/' + searchSlug,
                                  query: {
                                    ...newQuery,
                                    sort: value,
                                    page: 1,
                                  },
                                })
                              } else {
                                delete newQuery['vSlug']
                                delete newQuery['slug']
                                delete newQuery['childSlug']
                                push({
                                  pathname: childSlug
                                    ? '/' + vSlug + '/' + slug + '/' + childSlug
                                    : '/' + vSlug + '/' + slug,
                                  query: {
                                    ...newQuery,
                                    sort: value,
                                    page: 1,
                                  },
                                })
                              }
                            }}
                            className='filter_popularity_'>
                            {titleX}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className='column_grid small_gutter'>
          <div className='row'>
            <div className='column one_sixth'>
              {/* <div id="catalog_category_option">
                 <h2>{`${title} 2020`}</h2>
                <ul>
                  {categories.map(({ name, slug: slugXX }) => {
                    const lName = name.toLowerCase()
                    const properName =
                      lName.charAt(0).toUpperCase() + lName.slice(1)
                    return (
                      <li key={slug}>
                        <a
                          href={`${pathname}/${slugXX}`}
                          onClick={e => {
                            e.preventDefault()
                            push(`${pathname}/${slugXX}`)
                          }}>
                          {properName}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div> */}
              <ul style={{ border: 'none' }} id='catalog_filter_options'>
                <li>
                  <div className='refine_by'>Refine By</div>
                </li>
                <li className='filter_block brand'>
                  <a
                    id='clear-all-btn'
                    data-label='clear_all'
                    href={pathname
                      .replace('[slug]', slug)
                      .replace('[vSlug]', vSlug)
                      .replace('[childSlug]', childSlug)}
                    onClick={e => {
                      e.preventDefault()
                      const newQuery = Object.assign(query)
                      delete newQuery['sizes']
                      if (!!searchSlug) {
                        delete newQuery['searchSlug']
                        push({
                          pathname: '/search/' + searchSlug,
                          query: {
                            ...newQuery,
                            page: 1,
                          },
                        })
                      } else {
                        delete newQuery['vSlug']
                        delete newQuery['slug']
                        delete newQuery['childSlug']

                        push({
                          pathname: childSlug
                            ? '/' + vSlug + '/' + slug + '/' + childSlug
                            : '/' + vSlug + '/' + slug,
                          query: {
                            ...newQuery,
                            page: 1,
                          },
                        })
                      }
                    }}
                    className='filter_reset filter--clear-all'
                    title='Clear All'>
                    Clear All
                  </a>
                  <div className='toggle_section'>
                    <div className='toggle_link_container'>
                      <a
                        href=''
                        onClick={e => e.preventDefault()}
                        className='open'
                        title='Size'>
                        Size
                      </a>
                    </div>
                    <div className='toggle_content_container'>
                      <div
                        id='catalog_filter_size'
                        className='catalog_filter_section'>
                        <ul className='catalog_filter_size_list'>
                          {filterSizes.map(({ _id, name }, index) => (
                            <li key={_id}>
                              <a
                                href={`${pathname
                                  .replace('[slug]', slug)
                                  .replace('[vSlug]', vSlug)
                                  .replace(
                                    '[childSlug]',
                                    childSlug,
                                  )}?sizes=${name}`}
                                onClick={e => {
                                  // e.preventDefault();
                                  const newQuery = Object.assign(query)
                                  const FindAt = sizesArr.findIndex(
                                    item => name === item,
                                  )
                                  const copyofSizesArr = sizesArr
                                  if (FindAt > -1) {
                                    copyofSizesArr.splice(FindAt, 1)
                                  }
                                  if (!!searchSlug) {
                                    delete newQuery['searchSlug']
                                    FindAt === -1
                                      ? push({
                                        pathname: '/search/' + searchSlug,
                                        query: {
                                          ...newQuery,
                                          sizes:
                                            sizesArr.length !== 0
                                              ? `${sizesArr},${name}`
                                              : [name],
                                          page: 1,
                                        },
                                      })
                                      : push({
                                        pathname: '/search/' + searchSlug,
                                        query:
                                          copyofSizesArr.length !== 0
                                            ? {
                                              ...newQuery,
                                              sizes: copyofSizesArr + '',
                                              page: 1,
                                            }
                                            : (delete newQuery['sizes'],
                                              {
                                                ...newQuery,
                                                page: 1,
                                              }),
                                      })
                                  } else {
                                    delete newQuery['vSlug']
                                    delete newQuery['slug']
                                    delete newQuery['childSlug']
                                    FindAt === -1
                                      ? push({
                                        pathname: childSlug
                                          ? '/' +
                                          vSlug +
                                          '/' +
                                          slug +
                                          '/' +
                                          childSlug
                                          : '/' + vSlug + '/' + slug,
                                        query: {
                                          ...newQuery,
                                          sizes:
                                            sizesArr.length !== 0
                                              ? `${sizesArr},${name}`
                                              : [name],
                                          page: 1,
                                        },
                                      })
                                      : push({
                                        pathname: childSlug
                                          ? '/' +
                                          vSlug +
                                          '/' +
                                          slug +
                                          '/' +
                                          childSlug
                                          : '/' + vSlug + '/' + slug,
                                        query:
                                          copyofSizesArr.length !== 0
                                            ? {
                                              ...newQuery,
                                              sizes: copyofSizesArr + '',
                                              page: 1,
                                            }
                                            : (delete newQuery['sizes'],
                                              {
                                                ...newQuery,
                                                page: 1,
                                              }),
                                      })
                                  }
                                }}>
                                <span
                                  className={`label ${
                                    sizesArr.includes(name) ? 'selected' : ''
                                  }`}>
                                  <input type='checkbox' name='filter_size' />
                                  {name}
                                </span>
                              </a>
                            </li>
                          ))}
                          {/*<li key='all'>*/}
                          {/*  <a*/}
                          {/*    href={`${pathname*/}
                          {/*      .replace('[slug]', slug)*/}
                          {/*      .replace('[vSlug]', vSlug)*/}
                          {/*      .replace('[childSlug]', childSlug)}`}*/}
                          {/*    onClick={e => {*/}
                          {/*      e.preventDefault();*/}

                          {/*      const newQuery = Object.assign(query);*/}
                          {/*      if (!!searchSlug) {*/}
                          {/*        delete newQuery['searchSlug'];*/}
                          {/*        push({*/}
                          {/*          pathname: childSlug*/}
                          {/*            ? '/' +*/}
                          {/*            vSlug +*/}
                          {/*            '/' +*/}
                          {/*            slug +*/}
                          {/*            '/' +*/}
                          {/*            childSlug*/}
                          {/*            : '/' + vSlug + '/' + slug,*/}
                          {/*          query: {*/}
                          {/*            ...newQuery,*/}
                          {/*            sizes: '',*/}
                          {/*            page: 1,*/}
                          {/*          },*/}
                          {/*        });*/}
                          {/*      } else {*/}
                          {/*        delete newQuery['vSlug'];*/}
                          {/*        delete newQuery['slug'];*/}
                          {/*        delete newQuery['childSlug'];*/}

                          {/*        push({*/}
                          {/*          pathname: '/search/' + searchSlug,*/}
                          {/*          query: {*/}
                          {/*            ...newQuery,*/}
                          {/*            sizes: '',*/}
                          {/*            page: 1,*/}
                          {/*          },*/}
                          {/*        });*/}
                          {/*      }*/}
                          {/*    }}>*/}
                          {/*    <span*/}
                          {/*      className={`label ${*/}
                          {/*        sizes === '' ? 'selected' : ''*/}
                          {/*      }`}>*/}
                          {/*      <input type='checkbox' name='filter_size' />*/}
                          {/*      All*/}
                          {/*    </span>*/}
                          {/*  </a>*/}
                          {/*</li>*/}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='filter_block price'>
                  <a
                    id='clear-all-btn'
                    data-label='clear_all'
                    href={pathname
                      .replace('[slug]', slug)
                      .replace('[vSlug]', vSlug)
                      .replace('[childSlug]', childSlug)}
                    onClick={e => {
                      // e.preventDefault();
                      const newQuery = Object.assign(query)
                      if (!!searchSlug) {
                        delete newQuery['searchSlug']
                        push({
                          pathname: '/search/' + searchSlug,
                          query: {
                            ...newQuery,
                            page: 1,
                          },
                        })
                      } else {
                        delete newQuery['vSlug']
                        delete newQuery['slug']
                        delete newQuery['childSlug']
                        delete newQuery['price']
                        push({
                          pathname: childSlug
                            ? '/' + vSlug + '/' + slug + '/' + childSlug
                            : '/' + vSlug + '/' + slug,
                          query: {
                            ...newQuery,
                            page: 1,
                          },
                        })
                      }
                    }}
                    className='filter_reset filter--clear-all'
                    title='Clear All'>
                    Clear All
                  </a>
                  <div className='toggle_section'>
                    <div className='toggle_link_container'>
                      <a
                        href=''
                        onClick={e => e.preventDefault()}
                        className='open'
                        title='Price'>
                        Price
                      </a>
                    </div>
                    <div className='toggle_content_container'>
                      <div
                        id='catalog_filter_price_labels'
                        className='catalog_filter_section'>
                        <ul
                          id='catalog_filter_price_list'
                          className='scroll_container'>
                          {priceList.map(({ title: titleX, start, end }) => {
                            const selected =
                              price === `${start}%2C${end}` ||
                              price === `${start},${end}`
                            return (
                              <li key={start}>
                                <a
                                  href={`${pathname
                                    .replace('[slug]', slug)
                                    .replace('[vSlug]', vSlug)
                                    .replace(
                                      '[childSlug]',
                                      childSlug,
                                    )}?price=${start},${end}`}
                                  onClick={e => {
                                    // e.preventDefault();
                                    const newQuery = Object.assign(query)
                                    if (!!searchSlug) {
                                      delete newQuery['searchSlug']
                                      push({
                                        pathname: '/search/' + searchSlug,
                                        query: {
                                          ...newQuery,
                                          price: `${start},${end}`,
                                          page: 1,
                                        },
                                      })
                                    } else {
                                      delete newQuery['vSlug']
                                      delete newQuery['slug']
                                      delete newQuery['childSlug']
                                      push({
                                        pathname: childSlug
                                          ? '/' +
                                          vSlug +
                                          '/' +
                                          slug +
                                          '/' +
                                          childSlug
                                          : '/' + vSlug + '/' + slug,
                                        query: {
                                          ...newQuery,
                                          price: `${start},${end}`,
                                          page: 1,
                                        },
                                      })
                                    }
                                  }}>
                                  <span
                                    className={`label ${
                                      selected ? 'selected' : ''
                                    }`}>
                                    {selected ? (
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='feather feather-check-square'>
                                        <polyline points='9 11 12 14 22 4'></polyline>
                                        <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'></path>
                                      </svg>
                                    ) : (
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='feather feather-square'>
                                        <rect
                                          x='3'
                                          y='3'
                                          width='18'
                                          height='18'
                                          rx='2'
                                          ry='2'></rect>
                                      </svg>
                                    )}
                                    <span>{titleX}</span>
                                  </span>
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='column fifth_sixths'>
              <div className='catalog_content'>
                <div>
                  <div>
                    <div id='listAddToBag'>
                      {loading && (
                        <span className='pageLoader is-visible'>
                          <div className='loading is-center' />
                        </span>
                      )}
                    </div>
                    <ul id='catalog_listings' className='less'>
                      {!isEmpty(listings.data)
                        ? listings.data.map(
                          (
                            {
                              _id,
                              name,
                              slug: slugXXX,
                              variants,
                              imgA,
                              img,
                              description,
                              active,
                            },
                            index,
                          ) => {
                            const inWishList = !isEmpty(wishlist)
                              ? wishlist.find(
                                ({ product }) => product._id === _id,
                              )
                              : null
                            let Discount = 0
                            let Off = 0
                            if (variants[0].price) {
                              Discount =
                                variants[0].mrp.toFixed(0) -
                                variants[0].price.toFixed(0)
                              Off =
                                (Discount / variants[0].mrp.toFixed(0)) * 100
                            }
                            return (
                              <li
                                key={index + 'id'}
                                // onMouseEnter={() =>
                                //   setListingHover(_id, true)
                                // }
                                // onMouseLeave={() =>
                                //   setListingHover(_id, false)
                                // }
                                // className={`listing ${
                                //   listingHover[_id] ? 'active' : 'closed'
                                // }`}
                                className='listing active'>
                                <div className='wishlist'>
                                  <button
                                    type='button'
                                    onClick={() =>
                                      changeWishList({
                                        _id,
                                        name,
                                        imgA,
                                        keyFeatures: [],
                                        variants,
                                      })
                                    }
                                    className={`wishlist-button${
                                      inWishList ? ' active' : ''
                                    }`}>
                                    <svg
                                      className='wishlist-icon'
                                      xmlns='http://www.w3.org/2000/svg'
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'>
                                      <path
                                        d='M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z' />
                                    </svg>
                                  </button>
                                </div>
                                <a
                                  href={
                                    !!searchSlug
                                      ? `/search/${searchSlug}/${slugXXX}?id=${_id}`
                                      : `/${vSlug}/listing/${slugXXX}?id=${_id}`
                                  }
                                  onClick={e => {
                                    e.preventDefault()
                                    push({
                                      pathname: !!searchSlug
                                        ? `/search/${searchSlug}/${slugXXX}`
                                        : `/${vSlug}/listing/${slugXXX}`,
                                      query: { id: _id },
                                    })
                                  }}
                                  className='product_listing_link'
                                  title={name}>
                                  <div className='image_container'>
                                    <img
                                      alt={name}
                                      src={
                                        imgA.length !== 0
                                          ? imgA[0].large
                                          : '/images/placeholder.png'
                                      }
                                    />
                                    <div
                                      className='preloader'
                                      style={{ visibility: 'hidden' }}
                                    />
                                  </div>
                                  <div className='details_container'>
                                    <p className='brand'>{name}</p>
                                    <p className='price'>
                                      {Off !== 0 && (
                                        <span
                                          className='pre_reduction'>{`Rs ${variants[0].mrp.toLocaleString()}`}</span>
                                      )}
                                      <span className='reduction'>{`Rs ${variants[0].price
                                        .toFixed(0)
                                        .toLocaleString()}`}</span>
                                      {Off !== 0 && (
                                        <span className='reduction_tag_as_catalog'>
                                            -{Math.round(Off)}%
                                          </span>
                                      )}
                                    </p>
                                  </div>
                                </a>
                                <div className='size_options_container hoverToggled'>
                                  <div className='sizeOptions__wrapper'>
                                    <ul className='size_options'>
                                      {variants.map(
                                        ({
                                           _id: vid,
                                           size: sizeX,
                                           active: vActive,
                                           stock,
                                         }) => {
                                          return (
                                            <li
                                              key={sizeX}
                                              onClick={() => {
                                                setSelectedItem({
                                                  _id,
                                                  vid,
                                                })
                                              }}
                                              style={{
                                                backgroundColor:
                                                  selectedItem?.vid === vid
                                                    ? '#000'
                                                    : '#fff',
                                                color:
                                                  selectedItem?.vid === vid
                                                    ? '#fff'
                                                    : '#000',
                                                pointerEvents: stock === 0 ? 'none' : 'auto',
                                                opacity: stock === 0 ? 0.55 : 1,
                                              }}
                                              className='listingAddToBag size_listing simple '>
                                              {stock === 0 ? <div className='size_listing_no_stock'>
                                                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'
                                                     viewBox='0 0 24 24' fill='none' stroke='currentColor'
                                                     strokeWidth='2' strokeLinecap='round'
                                                     strokeLinejoin='round' className='feather feather-x'>
                                                  <line x1='18' y1='6' x2='6' y2='18'></line>
                                                  <line x1='6' y1='6' x2='18' y2='18'></line>
                                                </svg>
                                              </div> : null}
                                              {sizeX}
                                            </li>
                                          )
                                        },
                                      )}
                                    </ul>
                                    <div
                                      style={{
                                        width: '100%',
                                        alignItems: 'center',
                                        display: 'flex',
                                      }}>
                                      <button
                                        onClick={() => {
                                          if (selectedItem.vid) {
                                            changeCart(
                                              selectedItem._id,
                                              selectedItem.vid,
                                            )
                                          } else {
                                            alert('Please select size ')
                                          }
                                        }}
                                        className='add-to-cart'>
                                        <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          width='20'
                                          height='20'
                                          viewBox='0 0 24 24'>
                                          <path
                                            d='M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z' />
                                        </svg>
                                        ADD TO CART
                                      </button>
                                      <button
                                        onClick={() => {
                                          setSelectedViewData({
                                            _id,
                                            name,
                                            variants,
                                            imgA,
                                            img,
                                            description,
                                          })
                                          setQuickViewPopup(true)
                                        }}
                                        className='quick_view_cta'>
                                        <div className='default-btn'>
                                          <svg
                                            className='css-i6dzq1'
                                            strokeLinejoin='round'
                                            strokeLinecap='round'
                                            fill='none'
                                            strokeWidth='1.6'
                                            stroke='#000'
                                            height='20'
                                            width='20'
                                            viewBox='0 0 24 24'>
                                            <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                                            <circle
                                              r='3'
                                              cy='12'
                                              cx='12'></circle>
                                          </svg>
                                        </div>
                                        <div className='hover-btn'>
                                          <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'>
                                            <path
                                              d='M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z' />
                                          </svg>
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                          },
                        )
                        : null}
                    </ul>
                  </div>
                  {noMoreData != pages && page != pages && listings.count > 80 && (
                    <div className='pagination_container'>
                      <ul id='pagination'>
                        <li
                          className='loader-list'
                          onClick={() => {
                            handleChange()
                          }}>
                          {loadData ? (
                            <div className='loadingio-spinner-rolling-lt42rzgi1vi'>
                              <div className='ldio-1zdu0w8lql2'>
                                <div></div>
                              </div>
                            </div>
                          ) : (
                            <h1>Load More</h1>
                          )}
                        </li>
                        {/* <p className="indicator">{`Page ${pageX} of ${pages}`}</p>
                      {pagesArray.map(counter => (
                        <li key={counter}>
                          <a
                            href={`${pathname
                              .replace('[slug]', slug)
                              .replace('[vSlug]', vSlug)
                              .replace(
                                '[childSlug]',
                                childSlug
                              )}?page=${counter}`}
                            onClick={e => {
                              e.preventDefault()
                              const newQuery = Object.assign(query)
                              if (!!searchSlug) {
                                delete newQuery['searchSlug']
                                push({
                                  pathname: '/search/' + searchSlug,
                                  query: {
                                    ...newQuery,
                                    page: counter,
                                  },
                                })
                              } else {
                                delete newQuery['vSlug']
                                delete newQuery['slug']
                                delete newQuery['childSlug']
                                push({
                                  pathname: childSlug
                                    ? '/' + vSlug + '/' + slug + '/' + childSlug
                                    : '/' + vSlug + '/' + slug,
                                  query: {
                                    ...newQuery,
                                    page: counter,
                                  },
                                })
                              }
                              scrollRef.current.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                              })
                            }}
                            className={
                              counter.toString() === pageX.toString()
                                ? 'selected-page'
                                : ''
                            }>
                            {counter}
                          </a>
                        </li>
                      ))} */}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {notif && (
          <div id='continueShopping' data-client-render>
            <div className={`modal`}>
              <div
                onClick={() => {
                  setNotif(false)
                  setSelectedItem({})
                }}
                className='model-shadow'
              />
              <div
                className='modal-content modal-fadeIn is-center'
                style={{ margin: '30px 35vw' }}>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <span></span>
                  <div
                    onClick={() => {
                      setNotif(false)
                      setSelectedItem({})
                    }}
                    style={{
                      fontSize: 30,
                      height: 35,
                      width: 35,
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      paddingTop: 14,
                      paddingRight: 14,
                    }}>
                    <span>×</span>
                  </div>
                </div>
                <div className='productContinueShopping'>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '2vh 0',
                    }}>
                    <img
                      src={'/images/done.png'}
                      style={{
                        width: '5vh',
                        height: '5vh',
                        alignSelf: 'center',
                      }}
                    />
                  </div>
                  <div
                    className='productContinueShopping-subheading'
                    style={{
                      fontWeight: '600',
                      fontSize: '2.5vh',
                      color: '#111',
                    }}>
                    What do you want to do now?
                  </div>
                  <div
                    className='productContinueShopping-actions'
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <a
                      href=''
                      onClick={e => {
                        e.preventDefault()
                        setNotif(false)
                        setSelectedItem({})
                      }}
                      className='productContinueShopping-actions-link go-back'
                      style={{
                        width: '90%',
                        display: 'flex',
                        fontSize: '1.8vh',
                        justifyContent: 'center',
                        padding: '2.5vh 0',
                        fontWeight: '600',
                        color: '#111',
                        border: '1px solid #111',
                        textDecoration: 'none',
                        borderRadius: '0.5vh',
                        marginBottom: '3vh',
                      }}>
                      Continue Shopping
                    </a>
                    <a
                      href='/cart'
                      onClick={e => {
                        e.preventDefault()
                        push('/cart')
                      }}
                      style={{
                        width: '90%',
                        padding: '3vh 0',
                        borderRadius: '0.5vh',
                        textDecoration: 'none',
                      }}
                      className='productContinueShopping-actions-button  show-cart'>
                      View Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isQuickViewPopup && (
          <div key={selectedViewData._id} data-client-render>
            <div className={`modal`}>
              <div
                onClick={() => {
                  setQuickViewPopup(false)
                }}
                className='model-shadow'
              />
              <div
                className='modal-content modal-fadeIn is-center'
                style={{
                  margin: '30px auto',
                  width: 'fit-content',
                  minWidth: 950,
                }}>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <span></span>
                  <div
                    onClick={() => {
                      setQuickViewPopup(false)
                    }}
                    style={{
                      fontSize: 30,
                      height: 35,
                      width: 35,
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      paddingTop: 14,
                      paddingRight: 14,
                      cursor: 'pointer',
                    }}>
                    <span>×</span>
                  </div>
                </div>
                <div className='quick_view_container'>
                  <div className='quick_view_container_image_wrapper'>
                    <img
                      src={selectedViewData.imgA[0].large}
                      className='quick_view_container_image'
                    />
                  </div>
                  <div className='quick_view_container_content'>
                    <div className='product__brandname'>
                      {selectedViewData.name}
                    </div>
                    <div className='product_description '>
                      <div className='toggle_section'>
                        <div>
                          <a
                            href='#'
                            className='open toogle__header '
                            title='Details'>
                            Description
                          </a>
                        </div>
                        <div
                          className='info_shortdescription info_content'
                          style={{ marginBottom: 10 }}
                          dangerouslySetInnerHTML={{
                            __html: selectedViewData.description,
                          }}
                        />
                      </div>
                    </div>
                    <p style={{ fontSize: 16 }} className='product__price'>
                      {Discount !== 0 && (
                        <span
                          style={{ textDecoration: 'line-through' }}
                          className='pre-reduction'>{`Rs ${selectedViewData.variants[0].mrp.toLocaleString()}`}</span>
                      )}
                      <span
                        className='reduction'
                        style={{
                          fontSize: '1.2em',
                          margin: '0px 6px',
                        }}>
                        {`Rs ${selectedViewData.variants[0].price
                          .toFixed(0)
                          .toLocaleString()}`}
                      </span>
                      <span className='includeVAT'> (Incl. GST) </span>
                    </p>
                    {Discount !== 0 && (
                      <p
                        className='reduction_tag_wrapper'
                        style={{ marginTop: '1em' }}>
                        <span className='reduction_message'>You Save:</span>
                        <span className='reduction_message_amount'>{` Rs ${Discount}`}</span>
                        <span className='reduction_tag'>
                          -{Math.round(Off)}%
                        </span>
                      </p>
                    )}
                    <p className='product__deliveryestimation_quick'>
                      Fast Delivery
                    </p>
                    <div id='sizeSelector' className='size__selector animated'>
                      <div className='option_select' id='sizeSelector'>
                        <div className='size-selection-bar'>
                          <p className='faux_label'>Size</p>
                          <div></div>
                        </div>
                        <ul className='product_wrapper_quick'>
                          {selectedViewData.variants.map(
                            ({ _id, sku, size, stock, active }) => {
                              if (stock > 0)
                                return (
                                  <li
                                    onClick={() => validateId(_id, size)}
                                    key={_id + 'j'}>
                                    <label
                                      className={`available ${sizeSelected ===
                                      _id && 'selected'}`}>
                                      <span className='size'>{size}</span>
                                    </label>
                                  </li>
                                )
                            },
                          )}
                        </ul>
                        {/* <div id="size_mapper">
                            <div id="product_size_mapper" data-nm-size-mapping>
                              <div
                                data-ng-show="sizeMap"
                                className="select_container">
                                <span>
                                  <select
                                    value={sizeType}
                                    onChange={handleInputChange}
                                    name="sizeType">
                                    <option value="int"> International </option>
                                    <option value="UK"> UK </option>
                                    <option value="USA"> USA </option>
                                  </select>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="skywards_reward_miles">Premium</div> */}
                        <div style={{ marginTop: 20 }} className='product__cta'>
                          <div className='applepay_wrapper'>
                            <div className='cta__addtocart ' id='add_to_cart'>
                              {!notif ? (
                                <span
                                  onClick={() => {
                                    if (inCart) push('/cart')
                                    else if (sizeSelected)
                                      changeCart(
                                        selectedViewData._id,
                                        sizeSelected,
                                      )
                                    else alert('Please select size')
                                  }}
                                  //href="/cart/"
                                  className='product-Addtocart-btn'>
                                  <span className='cart-loader'>
                                    <span className='icon-loader-white' />
                                  </span>
                                  <span className='cart-button-label block_button emphasise is-visible'>
                                    <span>
                                      <i className='icon-cart' />
                                      Add To Shopping Cart
                                    </span>
                                  </span>
                                </span>
                              ) : (
                                <span
                                  onClick={loginCheck}
                                  //href="/cart/"
                                  className='product-Addtocart-btn'>
                                  <span className='cart-loader'>
                                    <span className='icon-loader-white' />
                                  </span>
                                  <span className='cart-button-label block_button emphasise is-visible'>
                                    <span>
                                      <i className='icon-cart' />
                                      CHECKOUT
                                    </span>
                                  </span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section className='product__usps__wrapper__new'>
                      <section className='product-usps'>
                        <div className='product-usp-new'>
                          <i className='icon-brands' /> 100% Genuine Brands
                        </div>
                        <div className='product-usp-new'>
                          <i className='icon-cod' /> Cash On Delivery
                        </div>
                        <div className='product-usp-new'>
                          <i className='icon-delivery' /> Fast Delivery
                        </div>
                      </section>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Catalog
