import styles from './search.module.css'
import {useState} from 'react'

export default function SearchBar(props) {
   const {onSearch}=props;
   const [character,setCharacter]=useState("")


   const handleChange=(e)=>{
      setCharacter(e.target.value)
   }

   return (
      <div className={`${styles.content_buscador}`}>
         <input className={`${styles.buscador}`} type='search' value={character} onChange={handleChange} />
      <button onClick={()=>{onSearch(character)}} id='boton'>Agregar</button>
      </div>
   );
}
