import { Link } from 'react-router-dom'
import styles from './card.module.css'

export default function Card(props) {
   return <div className={`${styles.card}`} >
         <button onClick={props.onClose} className={`${styles.close}`}>
            <span className={`${styles.x}`}>x</span>
         </button>
         <img  src={props.image} alt={props.name} />
         <Link to={`/detail/${props.id}`}>
         <h3>{props.name}</h3>
         </Link>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
      </div>
}
