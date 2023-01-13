import { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Detail() {

    const {detailId}=useParams()

    const [character,setCharacter]=useState({})
    // console.log(typeof character.origin ==="object")


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
             
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

  return (

    // <div>{character?
        <div style={{background:"red"}}>
        <h1>{character.name}</h1>
        <h5>{character.status} </h5>
        <h5>{character.species} </h5>
        <h5>{character.gender} </h5>
        <h5>{character.origin?.name} </h5>
        <img src={character.image} alt="" />
        <Link to="/home">
        <button >
            <h3>Home</h3>
        </button>
        </Link>

        {/* </div>:""}   */}
        </div>


  )
}
