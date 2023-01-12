import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import style from './nav.module.css'

export default function Nav({onSearch}) {
  return (
    <div className={style.content_search} 
    ><SearchBar onSearch={onSearch} /></div>
  )
}
