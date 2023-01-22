import { useState } from 'react'

export default () => {
  const [input, setInput] = useState({})

  const handleInputChange = e => {
    if (e === 'wipe') {
      setInput({})
    } else if (e.currentTarget) {
      setInput({
        ...input,
        [e.currentTarget.name || e.target.name]:
          e.currentTarget.value || e.target.value,
      })
    } else {
      setInput({
        ...input,
        ...e,
      })
    }
  }

  return [input, handleInputChange]
}
