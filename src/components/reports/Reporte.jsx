import React, {Component} from 'react'
import './Reports-list.css'

const Report = ({ reportTitle, reportCategoria, reportDate, reportDescripcion, reportLugar }) => {
  return (
    <li className='ReportsList-item'>
      <a className='ReportsList-link'>
        <figure>
            <img src='https://contexto.udlap.mx/wp-content/uploads/2016/06/EX_SG_140815.jpg'/>
          <figcaption>
            <h2>{reportTitle}</h2>
          </figcaption>
        </figure>
      </a>
      <section>
        <p>
          <i className='fa fa-book'></i>
          {reportCategoria}
        </p>
        <p>
          <i className='fa fa-edit'></i>
          {reportDescripcion}
        </p>
        <p>
          <b>
            <i className='fa fa-calendar-o'></i>
            {reportDate}
          </b>
          <b>
            <i className='fa fa-compass'></i>
            {reportLugar}
          </b>
        </p>
    </section>
    </li>
  ) 
}

export default Report
