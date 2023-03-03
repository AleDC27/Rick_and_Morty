import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./detail.module.css";
//import { Link } from 'react-router-dom'

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  const handleClick = () => navigate("/home");

  useEffect(() => {
    //front
    //fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    //back promesas
    //fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
    //Express
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
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
    <div className={`${styles.container}`}>
      <div className={styles.contain}>
        <div className={styles.contain_img}>
          <img src={character.image} alt="" />
        </div>
        <div className={`${styles.card}`}>
          <h1>{character.name}</h1>
          <div className={styles.h5}>
            <h2>Status : {character.status}</h2>
            <h2>Species : {character.species} </h2>
            <h2>Gender : {character.gender} </h2>
            <h2>Origin : {character.origin?.name} </h2>
          </div>

          {/* <Link to="/home">
        <button >
            <h3>Home</h3>
        </button>
        </Link> */}

          {/* </div>:""}   */}

          <button onClick={handleClick}>HOME</button>
        </div>
      </div>
    </div>
  );
}
