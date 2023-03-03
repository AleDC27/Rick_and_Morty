import React from 'react'
import styles from './error.module.css'
import imgError from '../../assets/Captura de pantalla (371).png'

export default function Error() {
  return (
    <div className={styles.container} >
      <img src={imgError} alt="" />
    </div>
  )
}
