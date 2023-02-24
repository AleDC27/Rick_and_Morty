import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import  Card  from '../card/Card'
import { filterCards, getFavorites, orderCards } from "../redux/action/action"
import styles from './Favorites.module.css'

export function Favorites ({ myFavorites }){
    console.log(myFavorites)

    useEffect(()=>{
        console.log("useEffect")
        dispatch(getFavorites())
    },[])
    const dispatch = useDispatch();
    const handleDispatch = (e) => {
        const { name, value } = e.target;
        if(name === 'order'){
            return dispatch(orderCards(value))
        }
        if(name === 'filter'){
            return dispatch(filterCards(value))
        }
    }

    return(
        <div className={styles.contain}>
            <div>
                <select name='order' onChange={handleDispatch}>
                    <option value="Ascendente" >Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select name='filter' onChange={handleDispatch}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div >
            <div className={styles.content_cards}>
            {myFavorites.length?myFavorites.map(fav => 
                <Card
                key={fav.id}
                name={fav.name}
                id={fav.id}
                gender={fav.gender}
                image={fav.image}
                />
            ):<h1>no hay personajes favoritos</h1>}
            </div>
        </div>
    )
}


export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)