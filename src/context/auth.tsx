import React from 'react';
import { createContext, useContext } from 'react'

const initialState = {
  isAuth: false,
  setAuth: () => {},
  logout: () => {},
}

type AuthContextType = {
  isAuth: boolean
  setAuth: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>(initialState)

export interface AuthContextProps {
  children: React.ReactElement
}

export default ({ children }: AuthContextProps) => {
  const [isAuth, setIsAuth] = React.useState(false)
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth: () => setIsAuth(true),
        logout: () => {
          setIsAuth(false)
          localStorage.setItem('token', '')
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
