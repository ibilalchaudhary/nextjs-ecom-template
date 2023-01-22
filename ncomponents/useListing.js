import { useState } from 'react'

const useListing = () => {
  const [listingHover, setListing] = useState({})

  const setListingHover = (id, value) => {
    return setListing({
      ...listingHover,
      [id]: value,
    })
  }

  return [listingHover, setListingHover]
}

export default useListing
