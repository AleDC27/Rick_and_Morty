import React from 'react'
import styles from './create.module.css'

export default function Create() {
  return (
    <form action="" className={styles.form} >
        <label htmlFor="">name</label>
        <input type="text" />

        <label htmlFor="">gender</label>
        <input type="text" />

        <label htmlFor="">species</label>
        <input type="text" />

        <label htmlFor="">origin</label>
        <input type="text" />

        <label htmlFor="">imagen</label>
        <input type="file" />

        <input type="submit" />

    </form>
  )
}
