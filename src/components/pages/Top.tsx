import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Top: FC = () => (
  <>
    <div>Top Component.</div>
    <Link to="/signin">ログイン</Link>
    <Link to="/signup">新規登録</Link>
  </>
)

export default Top
