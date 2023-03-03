import Card from '../card/Card';
import styles from './CreateChart'
import Create from './Create';
import { useState } from 'react';

export default function CreateChar({onClose}) {
   let id=0;
   const char =[];
const create={}


const [popupOpen, setPopupOpen] = useState(false);

const handleOnclick=()=>{
    setPopupOpen(true);
}

   return <div className={styles.container}>
    <h1>char</h1>
       <div className={`${styles.content_cards}`} >
        <button onClick={handleOnclick}>create Chart</button>
        {popupOpen && (
        <div className={styles.popup} >
          <Create/>
        </div>
      )}
      {
         char.map(cur=>
            <Card 
            styles={styles.card}
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
   </div>
   </div>

}