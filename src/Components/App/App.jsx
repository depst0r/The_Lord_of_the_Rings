import React from 'react'

export const App = () => {
  fetch('https://the-one-api.dev/v2/character/WXuIJzX8HU8gC4Q9O1yy')
    .then(res => res.json())
    .then(res => console.log(res))

  return <div></div>
}
