import React from 'react'; // todo el poder de react en el componente
import '../hojas-de-estilo/Testimonio.css' //se incluye css sino react cree que es js

function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} 
        alt='Foto de Emma'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
          <p className='cargo-testimonio'>{props.cargo}en {props.empresa}</p>
          <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
    </div>
  );
}

export default Testimonio;// Esto exporta el archivo para que lo podamos usar
//por defecto es el unico que se exportara

//la exportacion nombrada podemos exportar varios arhcivos de un componente, se eligen

//"Siempre he tenido problemas para aprender Javascript. He tomado muchos cursos, pero el curso de FreeCodeCamp fue el que se quedó. Estudiar Javascript, así como estructuras de datos y algoritmos en FreeCodeCamp me dio las habilidades y al confianza que necesitaba para conseguir el trabajp de mis sueños como ingeniero de software en Spotify."</p>