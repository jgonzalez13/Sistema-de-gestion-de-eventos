import React, { Component } from 'react'
import { auth } from '../helpers/Auth'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './style/login-register.css'
import './style/header_video.css'


export default class Register extends Component {
  constructor(...props) {
    super(...props)

    this.state = { loginMessage: null }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.setMessage = this.setMessage.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    auth( this.email.value, this.password.value )
      .catch( err => this.setState( this.setMessage( `Error: ${err.message}` ) ) )
  }

  setMessage(err) {
    return { loginMessage: err }
  }

	render() {
		return (
			<article className="Main-container">
      <div className="Main-marco">
        <h1 className="titleForm Main-titulo">Registro de Usuarios </h1>
        <form className="pure-form Main-form " onSubmit={this.handleOnSubmit}>
          <input className="pure-input-rounded Main-input" type="email" placeholder="Correo electrónico" ref={ email => this.email = email }  />
          <input className="pure-input-rounded Main-input"  type="password" placeholder="Contraseña" ref={ password => this.password = password } />
          {
            this.state.loginMessage &&
            <div className="u-error">
              <p>
                Error:&nbsp;&nbsp;{this.state.loginMessage}
              </p>
            </div>
          }
          <input  type="submit" className="button Main-button" value="Registrar" />
        </form>
      </div>
			</article>
		)
	}
}