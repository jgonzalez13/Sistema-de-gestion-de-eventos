import React from 'react'
import Report from './Reporte'
import './Reports-list.css'

const ReportsList = (props) => (
  <ul className='ReportsList'>
    {
    props.reportsItems.map(report => (
      <Report
        id={report.id}
        title={report.title}
        descripcion={report.descripcion}
        categoria={report.categoria}
        lugar={report.lugar}
        date={report.date}
      /> 
    )).reverse()
    }
  </ul>
)

export default ReportsList