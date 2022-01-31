import React, { useState, useContext, Dispatch, SetStateAction } from 'react'
import { CurrentUser } from 'types/models'

type ContextProps = {
  userData?: CurrentUser
  setUserData: Dispatch<SetStateAction<CurrentUser | undefined>>
  authed: boolean
  setAuthed: Dispatch<SetStateAction<boolean>>
}

const UserContext = React.createContext<ContextProps>({
  userData: undefined,
  setUserData: () => {},
  authed: false,
  setAuthed: () => {},
})

export const useCurrentUser = () => useContext(UserContext)

export const UserManager: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<CurrentUser>()
  const [authed, setAuthed] = useState<boolean>(false)

  const contextValue: ContextProps = {
    userData,
    setUserData,
    authed,
    setAuthed,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
