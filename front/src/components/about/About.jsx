import React from "react";
import styles from "./about.module.css";
import yo from '../../assets/yo.png';
import about from '../../assets/about2.png';
import aboutt from '../../assets/copiaabout2.png';
import github from '../../assets/logo-GitHub.png'


export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Rick and Morty</h1>

        <div className={styles.container_content}>
        <div className={styles.container_rym}>
        <img src={about} alt="" className={styles.yo} />
        </div>
        <span>
        Esta aplicacion creada por Walter Alejandro Gordillo con tematica de Rick y morty cuenta varias opciones para el usuario 
        en un principio el formulario para que pueda logearse o registrarse en caso de no estarlo,
        y mensajes de error para el area donde se pueda haber equivocado al momento de ingresar sus datos.
        al enviar los datos con exito la app nos dirije al componente home donde tenemos a vista el navbar, que cuenta
        botones ah otros componentes en home podemos usar el searchbar para buscar personajes segun su id,
        tambien contamos con un boton llamado random para hacer peticiones de personajes aleatorios a la api  a traves de nuestro
        back,estos personajes vienen en coponentes card los cuales cuentan con boton de eliminado,agregrar o eliminarlo de favoritos.
        cada card tiene nombre specie genero y una imagen si clikeamos en su nombre podremos ir a la carta de detalles del personaje,
        Si nos dirijimos al componete Favorites con la opcion en el navbar, podremos ver a los que agregemos o un cartel
        estilisado diciendonos que sigamos buscando en el universo, tambien podemos filtrar los personajes que tengamos
        por genero o acomodarlos de manera asendente o desendente.Esta app tambein cuenta con una imagen editada en caso de que el usuario 
        cometa el error 404.
          para el desarrolo de la app creamos el fron y el back haciendo peticiones a la api de <a href="https://rickandmortyapi.com/api">Rick and Morty</a>.
          <br /> 
          Las tecnologias utilizadas para el desarrollo de la app fueron html,css,java script,react,redux,nodejs.
        </span>
        <div className={styles.container_yo}>
        <img src={aboutt} alt="" className={styles.yo} />
        </div>
        </div>

      <div className={styles.container_content2}>
        <div className={styles.content_img}><img src={yo} alt="" className={styles.yoo} /></div>
        <div className={styles.data_spam_icon}>
        <span className={styles.data}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae vero deleniti libero quo iusto inventore dolores sapiente porro quaerat, iure vitae suscipit, distinctio ducimus ipsam voluptatibus laborum autem blanditiis necessitatibus!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit molestiae illo facilis voluptas, illum vero deserunt sapiente adipisci ipsa libero corrupti omnis sequi nostrum officia ad? Quibusdam accusamus quam nobis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero quisquam voluptatem
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae vero deleniti libero quo iusto inventore dolores sapiente porro quaerat, iure vitae suscipit, distinctio ducimus ipsam voluptatibus laborum autem blanditiis necessitatibus!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit molestiae illo facilis voluptas, illum vero deserunt sapiente adipisci ipsa libero corrupti omnis sequi nostrum officia ad? Quibusdam accusamus quam nobis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero quisquam voluptatem
      </span>
      <div className={styles.content_icons} >
      <a href="https://www.linkedin.com/in/walter-alejandro-gordillo-487293258/" target="_blank"><img loading="lazy" alt=" Sígueme en Twitter"src="https://1.bp.blogspot.com/-dxbuRx93Gcw/YP9u1JIFR5I/AAAAAAAAA10/2naDwGFmbeMLAGlZu7kEydnkY7ndur4jwCPcBGAYYCw/s64/linkedIn.icono.png" title="Sígueme en Twitter"/></a>
      <a href="URL DE LA RED SOCIAL" target="_blank"><img loading="lazy" alt=" Sígueme en Twitter"src="https://1.bp.blogspot.com/-gpbaWNY7g70/YP9u0qBCrfI/AAAAAAAAA1s/UiI6aec1kuMjUuwECp_Tpv9vbNj3eszwgCPcBGAYYCw/s64/discord.icono.png" title="Sígueme en Twitter"/></a>
      <a href="https://github.com/AleDC27" target="_blank"><img loading="lazy" alt=" Sígueme en Twitter"src={github} title="Sígueme en Twitter" style={{background:"white"}} /></a>
      </div>

      </div>
      </div>

      <footer>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae vero deleniti libero quo iusto inventore dolores sapiente porro quaerat, iure vitae suscipit, distinctio ducimus ipsam voluptatibus laborum autem blanditiis necessitatibus!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit molestiae illo facilis voluptas, illum vero deserunt sapiente adipisci ipsa libero corrupti omnis sequi nostrum officia ad? Quibusdam accusamus quam nobis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero quisquam voluptatem? Exercitationem impedit eos dolor ratione dolore soluta non, labore delectus illo qui asperiores, quam beatae voluptates reiciendis amet!
        </span>
      </footer>
      </div>

    </div>
  );
}
