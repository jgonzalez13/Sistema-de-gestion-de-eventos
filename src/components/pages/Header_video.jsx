import React from 'react'
import {
  Link
} from 'react-router-dom'

const HeaderVideo = (props) => (
    <article className="Poster u-firstContent" >
      <div className="Poster--opacity">
        <h2 className="Poster-title">
          <span>{props.title}</span>
        </h2>
        <h3 className="Poster-subtitle">
          <span>{props.subtitle}</span>
        </h3>
        <span>
          <Link className="button" to="/Login">Iniciar Aplicación</Link>
        </span>
      </div>
    </article>
)

export default HeaderVideo