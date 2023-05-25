"use client"

import React, {createContext, useState, useEffect } from 'react';
import { IUser } from '../types';
import { useRouter } from 'next/navigation';


const defaultUser:IUser = {
  name: "guest",
  email: "",
  password: "",
}

interface IUserContext {
  user:IUser,
  setUser: React.Dispatch<React.SetStateAction<IUser>>,
  switchUser:(user: IUser) => boolean,
  logOut: () => boolean
}

export const UserContext = createContext<IUserContext | null>(null)

export const UserProvider:any = ({children}:any) => {
  const [user, setUser] = useState<IUser>(defaultUser)
  const router = useRouter()


  const switchUser = (newUser:IUser):boolean => {
    setUser(newUser)
    router.push("/home")
    return true
  }

  const logOut = ():boolean => {
    setUser(defaultUser)
    router.push("/home")
    return true
  }

  useEffect(() => {
    let storage: string | null | IUser[] = localStorage.getItem("users")
    if(storage) setUser(JSON.parse(storage))
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(user))
  }, [user])
  const usersContextValue: IUserContext = {
    user,
    setUser,
    switchUser,
    logOut
  };
  return(
    <UserContext.Provider value={usersContextValue}>
      {children}
    </UserContext.Provider>
  )
}

