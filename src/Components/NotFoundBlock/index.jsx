import React from 'react'
import styles from "./NotFound.module.scss"

const index = () => {
  return (
    <div className={styles.root}>
    <span>😟</span>
    <br/>
    <h1 > Упс! Ничего не найдено :( </h1>
    <p className={styles.description}>Данная страница отсутствует в нашем магазине...</p>
    </div>
  )
}

export default index