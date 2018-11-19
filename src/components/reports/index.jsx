import React, { Component } from 'react'
import ReportAddForm from './ReportAddForm'
// import ReportsSearch from './ReportsSearch'
import Report from './Reporte'
import {firebaseApp} from '../../data/config'
import 'firebase/database'

class Reports extends Component {
  constructor (...props) {
    super(...props)

    this.state = {
      reports: [],
      reportsItems: {}
    }

    this.app = firebaseApp
    this.db = this.app.database().ref().child('reports')
    this.addReport = this.addReport.bind(this)

    this.db.on('value', (snapshot) => {
      this.setState({reportsItems: snapshot.val()})
    }, function (errorObject) {
      console.log('The read failed: ' + errorObject.code)
    })
  }

  addReport (report) {
    if (report.title !== '' && report.descripcion !== '' && report.categoria !== '' && report.lugar !== '' && report.date !== '') {
      this.db.push().set({
        id: report.id,
        title: report.title,
        descripcion: report.descripcion,
        categoria: report.categoria,
        lugar: report.lugar,
        date: report.date
      })
    }
  }

  componentDidMount () {
    const {reports} = this.state
    this.db.on('child_added', snap => {
      reports.push({
        reportId: snap.reportId,
        reportTitle: snap.val().reportTitle,
        reportDescripcion: snap.val().reportDescripcion,
        reportCategoria: snap.val().reportCategoria,
        reportLugar: snap.val().reportLugar,
        reportDate: snap.val().reporreportDatetDate
      })
    })
  }

  render () {
    return (
      <article className='Main-container'>
        <ReportAddForm addReport={this.addReport} />
        {
          Object.values(this.state.reportsItems).map((report, index) => {
            return (
              <Report
                key={index}
                reportId={report.id}
                reportTitle={report.title}
                reportDescripcion={report.descripcion}
                reportCategoria={report.categoria}
                reportLugar={report.lugar}
                reportDate={report.date}
              />
            )
          })
        }
      </article>
    )
  }
}

export default Reports
