import {useState,useEffect} from 'react'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import { Routes,Route,useLocation, useNavigate, } from 'react-router-dom'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import Form from './components/form/Form.jsx'
import  Favorites from './components/favorites/Favorites.jsx'
import Error from "./components/error/Error.jsx"


function App () {

const location=useLocation()
const [characters,setCharacters]=useState([]);

//esto es la seguridad del fromulario
const [access,setAccsess]=useState(true);
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

//este use efect no nos dejara navegar por la aplicacion a menos que la info sea correcta
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
         /////
         setCharacters(characters.filter(char=>char.id!==character))
         /////
}

//edit del back
// function onSearch(character) {
//   fetch(`http://localhost:3001/rickandmorty/character/${character}`)
//      .then((response) => response.json())
//      .then((data) => {
//         if (data.name) {
//            setCharacters((oldChars) => [...oldChars, data]);
//         } else {
//            window.alert('No hay personajes con ese ID');
//         }
//      });
//          /////
//          setCharacters(characters.filter(char=>char.id!=character))
//          /////
// }

function random() {
  const num=Math.round(Math.random()*826)
  const number=num
  fetch(`https://rickandmortyapi.com/api/character/${number}`)
  .then((response) => response.json())
  .then((data) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]); 
      }})
      setCharacters(characters.filter(char=>char.id!==number))
}

const onClose=(id)=>{
  setCharacters(characters.filter(cur=>cur.id!==id))

}

  return (
    <div className='App' >
      {location.pathname!=="/"?
      <Nav onSearch={onSearch} random={random}/>:null}
      <Routes>
        <Route path='/' element={<Form login={login} />}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
