import React from 'react'
import { UserManager } from 'contexts/CurrentUser'
import App from './App'
import './i18n/config'

const Index = () => {
  return (
    <UserManager>
      <App />
    </UserManager>
  )
}

export default Index
