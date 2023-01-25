import { Link } from 'react-router-dom'
import styles from './card.module.css'
import { connect } from 'react-redux'
import { useState, useEffect } from "react";
import {addFavorite,deleteFavorite} from '../redux/action/action'

export function Card(props) {
   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }else {
         setIsFav(true)
         props.addFavorite(props)
      }
   }
   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }, [props.myFavorites]);

   return <div className={`${styles.card}`} >
               <div style={{display:"flex",justifyContent:"flex-start",position:"absolute"}}>
            {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}
         </div>
         <button onClick={props.onClose} className={`${styles.close}`}>
            <span className={`${styles.x}`}>x</span>
         </button>
         <img  src={props.image} alt={props.name} />
         <Link to={`/detail/${props.id}`}>
         <h5>{props.name}</h5>
         </Link>
         <span>{props.species}</span>
         <span>{props.gender}</span>
         
      </div>
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },

      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps (state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);