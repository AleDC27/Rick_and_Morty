import styles from './card.module.css'

export default function Card(props) {
   return <div className={`${styles.card}`} >
         <button onClick={props.onClose} className={`${styles.close}`}>
            <span className={`${styles.x}`}>x</span>
         </button>
         <img  src={props.image} alt={props.name} />
         <h2>{props.name}</h2>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
      </div>
}
