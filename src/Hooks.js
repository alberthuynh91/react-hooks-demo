import React, { useState, useEffect } from 'react'

function WithHooks() {
  const [photo, setValue] = useState(null)

  useEffect(() => {
    fetch('https://random.dog/woof.json')
    .then((data) => data.json())
    .then(({url}) => {
      setValue(url)
    })
  }, [])

  return (
    <div>
      here's a photo of a dog, yo. implemented WITH h00kz
      {photo && <div><img src={photo} alt='dawgz' width='500px'/></div>}
    </div>
  )
}

export default WithHooks