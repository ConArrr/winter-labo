import React, { FC, FormEvent, useState } from 'react'
import TopButton from 'components/molecules/TopButton'
import { useNavigate } from 'react-router'

const SignUp: FC = () => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [mail, setMail] = useState('')
  const navigate = useNavigate()

  const registerUser = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    document.cookie = `userId=${userId};max-age=60*20`
    navigate('/home')
  }

  return (
    <>
      <div>SignUp Component.</div>
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
        <label htmlFor="mail">
          メールアドレス
          <input
            id="mail"
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
        <button type="submit" onClick={(e) => registerUser(e)}>
          新規登録
        </button>
      </form>
      <TopButton />
    </>
  )
}

export default SignUp
