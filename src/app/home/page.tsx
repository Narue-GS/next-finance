import Image from 'next/image'
import styles from './page.module.css'

import Header from './components/header'
import Banner from './components/banner'
import Exemplo  from './components/exemplo'


export default function Home() {
  return (
    <>
      <Header/>
      <Banner>
        <h1>Simplified Finaces</h1>
        <button className="confirm"><a href="/register">Join</a></button>
      </Banner>
      <Exemplo/>
    </>
  )
}