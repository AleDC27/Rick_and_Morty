import {useState} from 'react'
import styles from './App.module.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'


function App () {
const [characters,setCharacters]=useState([]);

function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

const onClose=(id)=>{
  setCharacters(characters.filter(cur=>cur.id!==id))

}

  return (
    <div className='App' >
      <div><Nav onSearch={onSearch}/></div>
      <div className={`${styles.content_cards}`}>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
    </div>
  )
}

export default App
