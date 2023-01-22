// @ts-nocheck
import React, { useState, createRef } from 'react'
import Router, { useRouter } from 'next/router'
import { FilterMaker } from '@utilts/utilties'
import { useDispatch, useSelector } from 'react-redux'
import Notification from '@components/Notification'
import Refine from '@components/mobile/Refine'
import isEmpty from 'lodash/isEmpty'
import Filter from '@components/mobile/Filter'
import {addorRemoveFromCart, addOrRemoveFromWishlist, setAuthModal} from '@redux/action';
import Slider from 'react-slick';

const Catalog = ({
  title,
  listings,
  categories,
  loading,
  setLoading,
  variant,
  variants,
  onLoadMore,
  loadData
}) => {
  const dispatch = useDispatch()
  const scrollRef = createRef()
  const [refineVisible, setRefineVisible] = useState(false)
  const [filterVisible, setFilterVisible] = useState(false)
  const [notifMessage, setNotifMessage] = useState('')
  const [noMoreData, setNoMoreData] = useState(0)
  const [selectedItem, setSelectedItem] = useState({})
  const [isQuickViewPopup, setQuickViewPopup] = useState(false);
  const [selectedViewData, setSelectedViewData] = useState({});
  const [sizeSelected, setSelectedSize] = useState('')
  const [notif, setNotif] = useState(false);

  const { cart, wishlist, token } = useSelector(({ USER }) => ({
    cart: USER.cart,
    wishlist: USER.wishlist,
    token: USER.token,
  }))


  const { query, pathname,back,push } = useRouter()
  const {
    slug,
    childSlug,
    vSlug,
    page,
    price,
    sizes,
    sort,
    brand,
    search,
  } = query
  const pageX = page || 1

  const pages = !isEmpty(listings)
    ? Math.ceil(listings.count / listings.pageSize) || 1
    : 1

  const changeWishList = product => {
    if (token) {
      addOrRemoveFromWishlist(
        { product, variant: product.variants[0] },
        wishlist,
        token
      )(dispatch)
    } else {
      const newQuery = Object.assign(query)
      delete newQuery['vSlug']
      delete newQuery['slug']
      delete newQuery['childSlug']
      Router.replace({
        pathname: pathname
          .replace('[slug]', slug)
          .replace('[vSlug]', vSlug)
          .replace('[childSlug]', childSlug),
        query: { ...newQuery },
      })
    }
  }
  const handleChange = () => {
    var url = new URL(window.location.href)
    var search_params = url.searchParams
    var current_page = search_params.get('page')

    var morePage = parseInt(current_page)
    const urlCheck = (pageNum) => {
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
        { pid, vid, qty: 1 },
        token
      )(dispatch).then(() => {
        setLoading(false)
      })
    } else setAuthModal(true)(dispatch)
  }

  let Discount = 0;
  let Off = 0;
  if (selectedViewData.variants) {
    Discount =
      selectedViewData.variants[0].mrp.toFixed(0) - selectedViewData.variants[0].price.toFixed(0);
    Off = (Discount / selectedViewData.variants[0].mrp.toFixed(0)) * 100;
  }
  const inCart = cart
    ? cart.items.find(
      found =>
        (found.product ? found.product._id : found.product) === selectedViewData._id &&
        found.variant.size === sizeSelected
    )
    : null

  return (
    <div className="page-wrapper list" ref={scrollRef}>
      <div className="sort-filter-bar" style={{ zIndex: 20 }}>
        <div className="sort-filter-bar__sort-button" id="sortButton">
          <a
            style={{ color: '#333', textDecoration: 'none' }}
            href=""
            onClick={e => {
              e.preventDefault()
              setRefineVisible(true)
            }}
            className="sort-filter-bar-button">
            <i className="icon-plp-sort" />
            <p className="sort-button-tag">Sort</p>
          </a>
        </div>
        <div className="sort-filter-bar__filter-button" id="filterButton">
          <a
            style={{ color: '#333', textDecoration: 'none' }}
            href=""
            onClick={e => {
              e.preventDefault()
              setFilterVisible(true)
            }}
            className="sort-filter-bar-button">
            <i className="icon-plp-filter" />
            <p className="filter-button-tag">Filter</p>
          </a>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <h1 className="product-list__title">{`${title} 2022`}</h1>
      </div>
      <h3 style={{ paddingTop: 5 }} className="product-list__title">{`${!isEmpty(listings) ? listings.count : '0'
        } listings found`}</h3>
      <div className="product-list">
        {!isEmpty(listings) &&
          listings.data.map(
            ({ _id, name, slug: slugX, variants, imgA, group,description }, index) => {
              const inWishList = !isEmpty(wishlist)
                ? wishlist.find(found => found.product._id === _id)
                : null
              let Discount = 0
              let Off = 0
              if (variants[0].price) {
                Discount =
                  variants[0].mrp.toFixed(0) - variants[0].price.toFixed(0)
                Off = (Discount / variants[0].mrp.toFixed(0)) * 100
              }
              return (
                <div key={_id + "i"} className="list-product">
                  <div className="wishlist">
                    <button
                      type="button"
                      onClick={() =>
                        changeWishList({
                          _id,
                          name,
                          imgA,
                          keyFeatures: [],
                          variants,
                        })
                      }
                      className={`wishlist-button${inWishList ? ' active' : ''
                        }`}>
                      <svg
                        className="wishlist-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="list-product-link is-shadow-product"
                  >
                    <a
                      href={`/${pathname.split('/')[1]
                    }/listing/${slugX}?id=${_id}`}
                         onClick={e => {
                           e.preventDefault()
                           Router.push({
                             pathname: `/${pathname.split('/')[1]}/listing/${slugX}`,
                             query: { id: _id },
                           })
                         }}
                         title={name} className="viewable">
                      <div
                        className="list-product-imageWrapper"
                        style={{
                          width: '184px',
                          height: '285px',
                        }}>
                        <img
                          className="list-product-image"
                          alt={name}
                          //width="160px"
                          //height="207px"
                          src={
                            imgA.length !== 0
                              ? imgA[0].medium
                              : '/images/placeholder.png'
                          }
                        />
                        {/* <div className="color-tag">
                            <div className="color-tag__tagline">
                              <div
                                className="color-tag__swatch"
                                style={{
                                  backgroundImage:
                                    'url("https://a.namshicdn.com/cms/vogue/misc/color_swatches/color_multicolor_web.png")',
                                }}
                              />
                              {group ? (
                                <p className="color-tag__options-count">
                                  2 options
                                </p>
                              ) : (
                                <p className="color-tag__options-count">
                                  1 option
                                </p>
                              )}
                            </div>
                          </div>
                        */}
                      </div>
                    </a>

                    <div className="list-product-details">
                      <h3 className="list-product-brand">{name}</h3>
                      <span className="list-product-price has-special">
                        {Off !== 0 && (
                          <span className="price-regular is-discounted">
                            {`Rs ${variants[0].mrp.toLocaleString()}`}
                          </span>
                        )}
                        <span className="price-special">{`Rs ${variants[0].price.toLocaleString()}`}</span>
                        {Off !== 0 && (
                          <span className="list-reduction_tag">
                            -{Math.round(Off)}%
                          </span>
                        )}
                      </span>
                    </div>
                    <div  className="size_options_container_mobile">
                      <div className="sizeOptions__wrapper">
                        <ul className="size_options-mobile">
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
                                      });
                                    }
                                    }
                                    style={{
                                      backgroundColor: selectedItem?.vid === vid ? "#000": '#fff',
                                      color: selectedItem?.vid === vid ? "#fff": '#000',
                                      pointerEvents: stock ===0 ?'none': 'auto',
                                      opacity: stock ===0 ? 0.55: 1,
                                    }}
                                    className="size_listing-mobile">
                                    {stock ===0 ?<div className='size_listing-mobile_no_stock'>
                                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'
                                           viewBox='0 0 24 24' fill='none' stroke='currentColor'
                                           strokeWidth='2' strokeLinecap='round'
                                           strokeLinejoin='round' className='feather feather-x'>
                                        <line x1='18' y1='6' x2='6' y2='18'></line>
                                        <line x1='6' y1='6' x2='18' y2='18'></line>
                                      </svg> </div>:null }

                                    {sizeX}
                                  </li>
                                )
                            }
                          )}
                        </ul>
                       <div style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'center',marginTop:10}}>
                         <button onClick={()=>{
                           if (selectedItem.vid){
                             changeCart(selectedItem._id, selectedItem.vid);
                           } else{
                             alert('Please select size ')
                           }

                         }} style={{marginRight:6}} className='add-to-cart-mobile'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
                           ADD TO CART
                         </button>
                         <button onClick={() => {
                           setSelectedViewData({
                             _id,
                             name,
                             variants,
                             imgA,
                             description
                           });
                           setQuickViewPopup(true);
                         }} style={{background:'transparent',border:'none'}} className='quick_view_cta'>
                           <div className='default-btn'>
                             <svg className='css-i6dzq1' strokeLinejoin='round' strokeLinecap='round' fill='none' strokeWidth='1.6' stroke='#000' height='18' width='18'
                                  viewBox='0 0 24 24'>
                               <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                               <circle r='3' cy='12' cx='12'></circle>
                             </svg>
                           </div>
                         </button>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>

              )
            }
          )}
      </div>
      <div className="pagination">
        {noMoreData != pages && Number(page) != pages && listings.count > 80 && <div >
          <ul className="pagination-list">
            <li className="loader-list"
              onClick={() => {
                handleChange()
              }}>
              {loadData ? <div className="loadingio-spinner-rolling-lt42rzgi1vi">
                <div className="ldio-1zdu0w8lql2">
                  <div></div>
                </div>
              </div> : <h1>Load More</h1>}
            </li>
          </ul>
        </div>}
      </div>
      {/* <div className="pagination">
        <ul className="pagination-list">
          {pages > 1 && pageX > 1 && pageX <= pages && (
            <li className="pagination-item pagination-item-previous">
              <a
                className="pagination-link"
                onClick={e => {
                  e.preventDefault()
                  const newQuery = Object.assign(query)
                  delete newQuery['vSlug']
                  delete newQuery['slug']
                  if (!!childSlug) delete newQuery['childSlug']
                  Router.push({
                    pathname:
                      '/mobile/' +
                      vSlug +
                      '/' +
                      (!!childSlug ? slug + '/' + childSlug : slug),
                    query: { ...newQuery, page: parseInt(pageX) - 1 },
                  })
                  scrollRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }}
                href="">
                <span className="icon-prev">
                  <svg
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </span>
              </a>
            </li>
          )}
          <li className="pagination-description">
            <span>Page</span> <span>{pageX}</span> <span>of</span>{' '}
            <span>{pages}</span>
          </li>
          {pageX < pages && (
            <li className="pagination-item pagination-item-next">
              <a
                className="pagination-link"
                href=""
                onClick={e => {
                  e.preventDefault()
                  const newQuery = Object.assign(query)
                  delete newQuery['vSlug']
                  delete newQuery['slug']
                  if (!!childSlug) delete newQuery['childSlug']

                  ///mobile/[vSlug]/[slug]/[childSlug]
                  Router.push({
                    pathname:
                      '/mobile/' +
                      vSlug +
                      '/' +
                      (!!childSlug ? slug + '/' + childSlug : slug),
                    query: { ...newQuery, page: parseInt(pageX) + 1 },
                  })
                  scrollRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }}>
                <span className="icon-next">
                  <svg
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6" />
                  </svg>
                </span>
              </a>
            </li>
          )}
        </ul>
      </div> */}
      {isQuickViewPopup && (
        <div id='continueShopping' data-client-render>
          <div className={`modal`}>
            <div onClick={() => {
              setQuickViewPopup(false);
            }} className='model-shadow' />
            <div
              className='modal-content modal-fadeIn is-center'
              style={{margin: '0px auto',width:'90%'}}>
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
                    setQuickViewPopup(false);
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
              <section style={{padding:10}} className="product">
                <div style={{ margin: '0 0 10px 0' }}>
                    {selectedViewData.imgA.map(({ medium }, index) => {
                      return (
                        <div
                          key={'Img' + index}
                        style={{width:'100%',justifyContent:'center',display:'flex',alignItems:'center'}}
                        >
                          <img
                            src={medium}
                            style={{
                              width: '50vw',
                              //height: '400px',
                            }}
                          />
                        </div>
                      )
                    })}
                </div>
                <div className="product-brief">
                  <div className="product-brief-group">
                    <h2 className="product-brand-name">{selectedViewData.name}</h2>
                    <p className="product-brief-price">
                      {Discount !== 0 && (
                        <span
                          style={{
                            marginRight: 10,
                            color: '#999',
                          }}
                          className="product-brief-regular-price line-through">
                        {`Rs ${selectedViewData.variants[0].mrp.toLocaleString()}`}
                      </span>
                      )}
                      <span
                        style={{ color: 'var(--omnisell-CartTextColor)' }}
                        className="product-brief-regular-price ">{`Rs ${selectedViewData.variants[0].price.toLocaleString()}`}</span>
                      <span className="includeVAT"> (Incl. GST) </span>
                    </p>
                    <h1 className="product-brief-name">{`SKU: ${selectedViewData.sku}`}</h1>
                    <div id="deliveryPromise">
                      <div className="deliveryPromise__wrapper">
                        Order fast <span className="counter">and get it</span>{' '}
                        soon
                      </div>
                    </div>
                  </div>
                </div>

                <ul style={{padding:10}} className="product-sizes-list">
                  {selectedViewData.variants.map(
                    ({ _id, sku, size, stock, active }) => {
                      if (stock > 0 ) {
                        return (
                          <li
                            onClick={() => {
                              setSelectedSize(_id)
                              // setNameSelectedSize(size)

                            }}
                            className={`product-sizes-size ${
                              sizeSelected === _id
                                ? 'is-selected'
                                : ''
                            }`}
                            key={_id}>
                            <span>{size}</span>
                          </li>
                        )
                      }
                    }
                  )}
                </ul>
                <div style={{margin:'20px 0px',width:'100%'}} className="product-Addtocart is-visible">
                  <div className="applepay_wrapper applepay--pdp">
                <div id="addToCartButton">
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault()
                      if (inCart) {
                        push('/cart')
                      } else if (sizeSelected) {
                        changeCart(selectedViewData._id, sizeSelected)
                      }else{
                        alert('Please select size')
                      }
                    }}
                    className="product-Addtocart-btn">
                    <div
                      className={`cart-loader ${loading ? 'is-visible' : ''}`}>
                      <div className="loading is-white" />
                    </div>
                    {!loading && (
                      <span className="cart-button-label is-visible">
                        <span>
                          <i className="icon-cart" />
                          {inCart ? 'Go to Shopping Cart' : 'Add To Cart'}
                        </span>
                      </span>
                    )}
                  </a>
                </div>
                </div>
                </div>

                <div id="continueShopping" data-client-render>
                  <div className={`modal ${notif ? '' : 'is-hidden'}`}>
                    <div
                      onClick={() => {
                        setNotif(false)
                      }}
                      className="model-shadow"
                    />

                    <div
                      className="modal-content modal-fadeIn is-center"
                      style={{ margin: '30px' }}>
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
                      <div className="productContinueShopping">
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
                          className="productContinueShopping-subheading"
                          style={{
                            fontWeight: '600',
                            fontSize: '2.5vh',
                            color: '#111',
                          }}>
                          What do you want to do now?
                        </div>
                        <div
                          className="productContinueShopping-actions"
                          style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}>
                          <a
                            href=""
                            onClick={e => {
                              e.preventDefault()
                              setNotif(false)
                            }}
                            className="productContinueShopping-actions-link go-back"
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
                            href="/cart"
                            // onClick={e => {
                            //   e.preventDefault()
                            //   push('/cart')
                            // }}
                            style={{
                              width: '90%',
                              padding: '3vh 0',
                              borderRadius: '0.5vh',
                              textDecoration: 'none',
                            }}
                            className="productContinueShopping-actions-button  show-cart">
                            View Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <section className="product product-usps-wrapper">
                  <section className="product-usps">
                    <div className="brands product-usp">100% Genuine</div>
                    <div className="cod product-usp">Cash On Delivery</div>
                    <div className="exchanges product-usp">
                      Easy 14 day exchanges
                    </div>
                  </section>
                </section>

                {/* <Whatsapp />  */}
                {/* <FBChat
                pageId="107252286033498"
                themeColor="#f53397"
                htmlRef={window.location.pathname}
              /> */}
              </section>
            </div>
          </div>
        </div>
      )}
      <Notification message={notifMessage} setMessage={setNotifMessage} />
      <Refine
        refineVisible={refineVisible}
        setRefineVisible={setRefineVisible}
        setLoading={setLoading}
      />
      <Filter
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
        setLoading={setLoading}
        variant={variant}
        variants={variants}
      />
    </div>
  )
}

export default Catalog
