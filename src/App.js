import {useState,useEffect} from 'react'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import { Routes,Route,useLocation, useNavigate, } from 'react-router-dom'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import Form from './components/form/Form.jsx'
import { getDefaultNormalizer } from '@testing-library/react'
import  Favorites from './components/favorites/Favorites.jsx'


function App () {

const location=useLocation()
const [characters,setCharacters]=useState([]);

const [access,setAccsess]=useState(false);
const username="waltergordilloaliaspily@gmail.com";
const password="123456qa";
const navigate=useNavigate()

const login=(userdata)=>{
if(userdata.username===username&&userdata.password===password){
  setAccsess(true)
  navigate("/home");
}else{
  alert("no kapo")
}
}

//este use efect no nos dejara navegar por la plicacion a menos que la info sea correcta
useEffect(() => {
  !access && navigate('/');
}, [access]);

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
      {location.pathname!=="/"?
      <Nav onSearch={onSearch}/>:null}
      <Routes>
        <Route path='/' element={<Form login={login} />}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
