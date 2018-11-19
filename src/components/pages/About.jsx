import React from 'react'
import './style/about_style.css'
 
export const About = (props) => (
    <div>
        <article className="About u-firstContent" >
      <div className="About--opacity">
                <span className="Contenedor">
                    <h2 className="About-title">
                        <span>Bienvenido</span>
                    </h2>
                    <p className="About-subtitle">
                        Creemos que todos merecen tener libertad de expresión y ser escuchada.
                        La innovación y la simplicidad nos hacen felices: nuestro objetivo es eliminar cualquier barrera  que pueda impedir poder mostrar incoformidad sobre problematicas en tu localidad.
                        ¡Estamos emocionados en ayudarte!
                    </p>
                </span>
      </div>
    </article>
 
        <section className="About-informacion">
            <p className="About-parrafo">
                Nosotros
            </p>
            <p className="About-parrafo">
            Comunica Comenzó como una idea en el 2017. Después de analizar la problematica de los Colimenses.
            Creamos a Comunica: con la perspectiva del usuario en mente. Ofrecemo una plataforma que ayude a la población de Colima a reportar impunidades y necesidades que tienen y no son escuchadas por las personas indicadas      </p>
            <p className="About-parrafo">
            Después de ver una mayor necesidad de soluciones de comercio electrónico, desarrollamos uno de los únicos manejadores de reportes en línea con las minimas funciones necesarias, lo que permite a los usuarios en línea hacer sus reportes.            </p>
        </section>
    </div>
)
 
export default About