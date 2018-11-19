import React, {Component} from 'react'
import uid from 'uid'
import firebase from 'firebase'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './course-add-form.css'

class CourseAddForm extends Component {
  constructor (...props) {
    super (...props)

    this.addReport = this.addReport.bind(this)
  }

  addReport (event) {
    event.preventDefault()
    this.props.addReport({
      title: this.title.value,
      descripcion: this.descripcion.value,
      categoria: this.categoria.value,
      lugar: this.lugar.value,
      date: this.date.value
    })
  }

  render () {
    return (
      <form className='pure-form  AddForm' onSubmit={this.props.onAddCourse}>
        <input type='hidden' ref={id => { this.id = id }} id='id' value={uid(10)} />
        <input type='text' ref={title => { this.title = title }} placeholder='Titulo del Reporte...' id='title' />
        <textarea placeholder='Descripcion...' id='descripcion' ref={descripcion => { this.descripcion = descripcion }} >
        </textarea>
        <select id='categoria' ref={categoria => { this.categoria = categoria }} >
          <option value='' disabled selected>Categoria</option>
          <option value='robo'>Robo</option>
          <option value='basura'>Basura</option>
          <option value='delincuencia'>Delincuencia</option>
        </select>
        <select id='lugar' ref={lugar => { this.lugar = lugar }} >
          <option value='' disabled selected>Lugar</option>
          <option value='robo'>Villa de Alvarez</option>
          <option value='basura'>Colima Centro</option>
          <option value='delincuencia'>Colima Norte</option>
        </select>
        <input type='date' id='date' ref={date => { this.date = date }} />
        <input className='pure-button pure-button-primary' type='submit' value='Guardar' onClick={this.addReport} />
      </form>
    )
  }
}

export default CourseAddForm
