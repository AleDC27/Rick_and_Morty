import Card from '../card/Card';
import styles from './cards.module.css'

export default function Cards(props) {
   let id=0;
   const { characters,onClose} = props;
   return <div className={`${styles.content_cards}`} >
      {
         characters.map(cur=>
            <Card 
            key={id+=1}
            name={cur.name}
            species={cur.species}
            gender={cur.gender}
            image={cur.image}
            onClose={()=>onClose(cur.id)}
            id={cur.id}
            />
         )
      }
   </div>;
}
