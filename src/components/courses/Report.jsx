import React, {Component} from 'react'

class Report extends Component {
  constructor (...props) {
    super(...props)
    this.reportTitle = props.reportTitle
    this.reportDescripcion = props.reportDescripcion
    this.reportCategoria = props.reportCategoria
    this.reportLugar = props.reportLugar
    this.reportDate = props.reportDate
  }
  render () {
    return (
      <li className="CoursesList-item">
    <a className="CoursesList-link" href={this.url} target="_blank">
      <figure>
        <img src={this.poster} alt={this.title} />
        <figcaption>
          <h2>{this.title}</h2>
        </figcaption>
      </figure>
    </a>
    <section>
      <p>
        <i className="fa fa-graduation-cap"></i>
        {this.categoria}
      </p>
      <p>
        <i className="fa fa-calendar-o"></i>
        {this.descripcion}
      </p>
      <p>
        <b>
          <i className="fa fa-dollar"></i>
          {this.date}
        </b>
        <b>
          <i className="fa fa-key"></i>
          {this.lugar}
        </b>
      </p>
    </section>
  </li>
    )
  }
}

export default Report
