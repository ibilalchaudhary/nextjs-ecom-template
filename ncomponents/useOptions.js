import { useState } from 'react'

const useOptions = () => {
  const [optionsVisible, setOptions] = useState({})

  const setOptionsVisible = (id, value) => {
    return setOptions({
      ...optionsVisible,
      [id]: value,
    })
  }

  return [optionsVisible, setOptionsVisible]
}

export default useOptions
