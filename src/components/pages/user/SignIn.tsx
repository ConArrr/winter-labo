import React, { FC, FormEvent, useState } from 'react'
import TopButton from 'components/molecules/TopButton'
import { useNavigate } from 'react-router'

const SignIn: FC = () => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signin: (e: FormEvent<HTMLButtonElement>) => void = (e) => {
    e.preventDefault()
    document.cookie = `userId=${userId};max-age=60*20`
    navigate('/home')
  }

  return (
    <>
      <div>SignIn Component.</div>
      <form>
        <label htmlFor="userId">
          ユーザID
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          パスワード
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={(e) => signin(e)}>
          ログイン
        </button>
      </form>
      <TopButton />
    </>
  )
}

export default SignIn
