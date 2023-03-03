import styles from './search.module.css'
import {useState} from 'react'

export default function SearchBar(props) {
   const {onSearch,random}=props;
   const [character,setCharacter]=useState("")

   const handleChange=(event)=>{
      setCharacter(event.target.value)
   }

   const handleSubmit=(e)=>{
      e.preventDefault()
   }

   return (
      <>
      <button className={`${styles.random_button}`} onClick={random} >Random</button>
      <form className={`${styles.content_buscador}`} onSubmit={handleSubmit} >
         <input className={`${styles.buscador}`} type='search' value={character} onChange={handleChange}/>
         <button className={`${styles.search_button}`} onClick={()=>{onSearch(character)}} id='boton'>Agregar</button>
      </form>
      </>
   );
}
