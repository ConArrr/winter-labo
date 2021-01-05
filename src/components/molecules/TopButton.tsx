import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const TopButton: FC = () => (
  <>
    <Link to="/" replace>
      トップへ
    </Link>
  </>
)

export default TopButton
