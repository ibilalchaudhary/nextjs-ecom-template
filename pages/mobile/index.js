import React from 'react'
import Variant from '@components/mobile/Variant'
import { useSelector } from 'react-redux'
import InitialProps from '@components/InitialProps'

const Index = () => {
  const { variants, settings } = useSelector(({ MEGAMENU, SETTINGS }) => ({
    variants: MEGAMENU.WholeMegaMenu,
    settings: SETTINGS.settings,
  }))
  const vIndex = variants.findIndex(found => found.slug === 'women')
  return <Variant settings={settings} variants={variants} vIndex={vIndex} />
}
Index.getInitialProps = InitialProps
export default Index
// import React, { useEffect, useState } from 'react'
// import Router, { useRouter } from 'next/router'
// import { APIFuncs } from '@utilts/APIs'
// import isEmpty from 'lodash/isEmpty'
// import { FilterMaker } from '@utilts/utilties'
// import { useSelector } from 'react-redux'

// const Home = () => {
//   const { push, replace } = useRouter()
// const [listings, setListings] = useState({})
// const [loading, setLoading] = useState(true)

// const { settings } = useSelector(({ SETTINGS }) => ({
//   settings: SETTINGS.settings,
// }))

// const filter = `&${FilterMaker({
//   sizes: undefined,
//   brands: undefined,
//   Color: undefined,
//   price: undefined,
//   sort: undefined,
// })}`

// useEffect(() => {
//   APIFuncs.GetSubCategoryContent('women', 1, filter)
//     .then(response => {
//       setListings(response)
//       setLoading(false)
//     })
//     .catch(error => {
//       console.log('error', error)
//       setLoading(false)
//     })
// }, [])

// replace(`/mobile/women`)
// if (loading) {
//   return (
//     <div id="content">
//       <div className="loading is-double is-center" />
//     </div>
//   )
// }
// else{
//   replace(`/mobile/women`)
// }

//push(`/mobile/women`)
//return (
//  <div id="content">
//    <div className="loading is-double is-center" />
//  </div>
//)
// return (
//   <div className="page-wrapper grid view">
//     <section className="home">
//       <div className="home-wrapper">
//         <div className="row">
//           <div className="full viewable" contentmoduletype="image_2">
//             <div>
//               <img
//                 src="/images/banner/jump.gif"
//                 width={640}
//                 height={247}
//                 className="lazyloaded"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="full viewable">
//             <div>
//               <img
//                 src="/images/banner/no-1.gif"
//                 width={640}
//                 height={173}
//                 className=" lazyloaded"
//               />
//             </div>
//           </div>
//         </div>
//         <div key="men" className="row">
//           <div style={{ position: 'relative' }} className="full viewable">
//             <a
//               href={'/men'}
//               onClick={e => {
//                 e.preventDefault()
//                 Router.push('/men')
//               }}
//               className="full shopnow"
//               title="men">
//               <img
//                 src={'/images/banner/men.gif'}
//                 width={640}
//                 height={292}
//                 className="lazyloaded"
//               />
//             </a>
//           </div>
//         </div>
//         <div key="women" className="row">
//           <div style={{ position: 'relative' }} className="full viewable">
//             <a
//               href={'/men'}
//               onClick={e => {
//                 e.preventDefault()
//                 Router.push('/women')
//               }}
//               className="full shopnow"
//               title="men">
//               <img
//                 src={'/images/banner/women.gif'}
//                 width={640}
//                 height={292}
//                 className="lazyloaded"
//               />
//             </a>
//           </div>
//         </div>
//         <div key="women" className="row">
//           <div style={{ position: 'relative' }} className="full viewable">
//             <a
//               href={'/men'}
//               onClick={e => {
//                 e.preventDefault()
//                 Router.push('/women')
//               }}
//               className="full shopnow"
//               title="men">
//               <img
//                 src={'/images/banner/rider.png'}
//                 width={640}
//                 height={292}
//                 className="lazyloaded"
//               />
//             </a>
//           </div>
//         </div>
//         {/* {variants.length
//           ? variants.map(({name, slug}) => (
//             <div key={slug} className="row">
//               <div
//                 style={{position: 'relative'}}
//                 className="full viewable">
//                 <a
//                   href={`/${slug}`}
//                   onClick={(e) => { e.preventDefault(); Router.push(`/${slug}`); }}
//                   className="full shopnow"
//                   title={name}>
//                   <img
//                     src={`/images/banner/${slug}.gif`}
//                     width={640}
//                     height={292}
//                     className="lazyloaded"
//                   />
//                 </a>
//                 <h1
//                   style={{
//                     position: 'absolute',
//                     bottom: '30%',
//                     [slug === 'men'
//                       ? 'right'
//                       : slug === 'women'
//                         ? 'left'
//                         : 'right']: '10%',
//                     textTransform: 'uppercase',
//                     color: 'black',
//                     fontWeight: 'bold',
//                     padding: '10px',
//                     backgroundColor: '#51c0a9',
//                   }}>
//                   {`Shop for ${name}`}
//                 </h1>
//               </div>
//             </div>
//           ))
//           : null} */}
//         <section className="carousel-module-container multi">
//           <div className="carousel-module">
//             <div className="carousel-module-header">
//               <h1 className="carousel-module-title">Brands you love</h1>
//             </div>
//             <div className="carousel-module-wrapper">
//               <div className="carousel-module-scrollable">
//                 <div className="carousel-module-products triple">
//                   {settings.bannersA.offers.map(({ link, img }) => (
//                     <div
//                       className="carousel-module-product"
//                       style={{ maxWidth: 182, maxHeight: 182 }}>
//                       <div className="viewable">
//                         <a
//                           href=""
//                           className="is-shadow-product carousel-module-product-link">
//                           <img src={img} className=" lazyloaded" />
//                         </a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section style={{ marginTop: 20 }} className="product-recos">
//           <div className="carousel-module">
//             <div>
//               <div className="carousel-module-title">Today's Best Deals</div>
//               <div
//                 style={{ height: 200 }}
//                 className="carousel-module-wrapper">
//                 <div className="carousel-module-scrollable">
//                   <div className="carousel-module-products">
//                     {!isEmpty(listings.data)
//                       ? listings.data
//                           .slice(0, 10)
//                           .map(({ imgA, name, slug, variants, _id }) => (
//                             <div
//                               key={_id}
//                               className="carousel-module-product">
//                               <a
//                                 href={`/listing/${slug}?id=${_id}`}
//                                 onClick={e => {
//                                   e.preventDefault()
//                                   Router.push({
//                                     pathname: `/listing/${slug}`,
//                                     query: { id: _id },
//                                   })
//                                 }}
//                                 className="is-shadow-product carousel-module-product-link">
//                                 <div>
//                                   <img
//                                     className="list-product-image carousel-module-product-image lazyloaded"
//                                     alt="Button Detail Wrap Skirt"
//                                     width="100px"
//                                     height="100px"
//                                     src={imgA[0].small}
//                                   />
//                                 </div>
//                                 <div className="carousel-module-product-info">
//                                   <h3 className="list-product-brand carousel-module-product-brand">
//                                     {name}
//                                   </h3>
//                                   <span className="list-product-price has-special">
//                                     <span
//                                       style={{ color: '#999' }}
//                                       className="price-regular line-through">
//                                       Rs 9,370
//                                     </span>
//                                     <span className="price-special">{`Rs ${variants[0].price.toLocaleString()}`}</span>
//                                   </span>
//                                 </div>
//                               </a>
//                             </div>
//                           ))
//                       : null}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div style={{ marginBottom: 50 }} className="home-seo-content">
//           <p>
//             Bringing you the latest looks for men, women and Accessories,
//             Namshi is your leading online shopping website for fast, reliable,
//             and simple online shopping in the World.
//           </p>
//         </div>
//       </div>
//     </section>
//   </div>
// )
//}

//export default Home
