import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, getFavorites, orderCards } from "../redux/action/action";
import styles from "./Favorites.module.css";
import univers from "../../assets/universo.png";

export function Favorites({ myFavorites }) {
  useEffect(() => {
    console.log("useEffect");
    dispatch(getFavorites());
  }, []);
  const dispatch = useDispatch();
  const handleDispatch = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      return dispatch(orderCards(value));
    }
    if (name === "filter") {
      return dispatch(filterCards(value));
    }
  };

  return (
    <div className={styles.contain}>
      <div className={styles.filtros}>
        <select name="order" onChange={handleDispatch}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select name="filter" onChange={handleDispatch}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.content_cards}>
        {myFavorites.length ? (
          myFavorites.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              id={fav.id}
              gender={fav.gender}
              image={fav.image}
            />
          ))
        ) : (
          <div className={styles.contain_sinFavorites}>
            <h1 className={styles.sinFavorites}>
              The universe is huge, keep looking until <br /> you find your favorite
              characters.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
