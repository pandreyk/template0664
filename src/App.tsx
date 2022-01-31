import React, { useState, useEffect } from 'react'
import Navigation from 'navigation/routes'
import { useCurrentUser } from 'contexts/CurrentUser'
import { getUser } from 'helpers/user'

const App = () => {
  const { setUserData, authed, setAuthed } = useCurrentUser()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const user = await getUser()

      if (user) {
        setAuthed(Boolean(user))
        setUserData({
          Username: 'Pepega',
          Email: 'pepega@gmail.com',
        })
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  return <Navigation loading={loading} authed={authed} />
}

export default App
