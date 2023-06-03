import React from 'react'
import style from './Home.module.css'

export default function Home() {
  return (
    <div id='home' className={style.homeContainer}>
      <img className={style.imageLink} src='./images/wall1.jpg' alt="homepage image" />
      <div className={style.contentContainer}>
        <h1>"Take Care of Your <span>Brain</span></h1>
        <h1>give this vast and curated content</h1>
        <h1>from old books To <span>modern books</span>."</h1>
      </div>        

    </div>
  )
}