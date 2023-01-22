import ReactPixel from 'react-facebook-pixel'

const calculatePrice = ({ mrp, price }) => {
  let priceX = 0
  priceX = price < mrp ? price : mrp
  return priceX
}
const calculateProductIds = products => {
  const array_ids = []
  products.forEach(product => {
    array_ids.push(product.pid)
  })
  return array_ids
}

const { cart, wishlist, token, settings } = useSelector(
  ({ USER: { cart, wishlist, token }, SETTINGS: { settings } }) => ({
    cart,
    wishlist,
    token,
    settings,
  })
)

if (response) {
  const { group, categories, variants, brand } = response
  if (!!settings) {
    const { analytics } = settings
    if (analytics.fbPixels_status === 'enabled') {
      ReactPixel.trackCustom('Lead', {
        content_name: response.name,
        currency: 'PKR',
        value: calculatePrice(variants[0]),
      })
    }
  }
}
