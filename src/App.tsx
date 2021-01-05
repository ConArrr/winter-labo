import React, { FC } from 'react'
import { Route, Routes } from 'react-router'
import Top from 'components/pages/Top'
import SignIn from 'components/pages/user/SignIn'
import SignUp from 'components/pages/user/SignUp'

import './App.css'
import Home from 'components/pages/user/Home'

const App: FC = () => (
  <div className="container">
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
)

export default App
