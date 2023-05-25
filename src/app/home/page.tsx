"use client"

import Banner from './components/banner'
import Exemplo  from './components/exemplo'
import { UserContext } from '../hooks/useUser'
import { useContext } from 'react'



export default function Home() {
  const user = useContext(UserContext)
  if(user?.user.name !== "guest"){
    return (
      <>
        <h1>aaa</h1>
      </>
    )
  } else {
    return (
      <>
        <Banner>
          <h1>Simplified {user.user.name}</h1>
          <button className="confirm"><a href="/register">Join</a></button>
        </Banner>
        <Exemplo/>
      </>
    )
  }
}