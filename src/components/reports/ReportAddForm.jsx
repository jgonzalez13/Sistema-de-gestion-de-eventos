import React, {Component} from 'react'
import uid from 'uid'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './report-add-form.css'

class ReportAddForm extends Component {
  constructor (...props) {
    super(...props)

    this.addReport = this.addReport.bind(this)
  }

  addReport (event) {
    event.preventDefault()
    this.props.addReport({
      id: this.id.value,
      title: this.title.value,
      descripcion: this.descripcion.value,
      categoria: this.categoria.value,
      lugar: this.lugar.value,
      date: this.date.value
    })
    this.title.value = '';
    this.descripcion.value ='';
    this.categoria.value = '';
    this.lugar.value = '';
    this.date.value = '';
  }
 
  render () {
    return (
      <form className='pure-form  AddForm' >
        <h1 className='reporte-titulo'>Agregar Reporte</h1>
        <input type='hidden' ref={id => { this.id = id }} id='id' value={uid(10)} />
        <input type='text' ref={title => { this.title = title }} placeholder='Titulo del Reporte...' id='title' />
        <textarea placeholder='Descripcion...' id='descripcion' ref={descripcion => { this.descripcion = descripcion }} >
        </textarea>
        <select id='categoria' ref={categoria => { this.categoria = categoria }} >
          <option value='' disabled selected>Categoria</option>
          <option value='Robo'>Robo</option>
          <option value='Basura'>Basura</option>
          <option value='Delincuencia'>Delincuencia</option>
        </select>
        <select id='lugar' ref={lugar => { this.lugar = lugar }} >
          <option value='' disabled selected>Lugar</option>
          <option value='Villa de Alvarez'>Villa de Alvarez</option>
          <option value='Colima Centro'>Colima Centro</option>
          <option value='Colima Norte'>Colima Norte</option>
        </select>
        <input type='date' id='date' ref={date => { this.date = date }} />
        <input className='pure-button pure-button-primary AddForm-button' type='submit' value='Enviar Reporte' onClick={this.addReport} />
      </form>
    )
  }
}

export default ReportAddForm
