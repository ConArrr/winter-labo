import React, { FC } from 'react'

const Home: FC = () => {
  const userId = document.cookie
    .split('; ')
    .find((row) => row.startsWith('userId'))
    ?.split('=')[1]

  return (
    <>
      <div>Home Component.</div>
      <p>Hello {userId}</p>
    </>
  )
}

export default Home
