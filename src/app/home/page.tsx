"use client"

import Banner from './components/banner'
import Exemplo  from './components/exemplo'
import { UserContext } from '../hooks/useUser'
import { useContext } from 'react'

export default function Home() {
  const user = useContext(UserContext)
    return (
      <>
        <Banner>
          <h1>Simplified Finaces</h1>
          <button className="confirm"><a href="/register">Join</a></button>
        </Banner>
        <Exemplo/>
      </>
    )
}