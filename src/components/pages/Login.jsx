import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/Auth'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './style/login-register.css'
import './style/header_video.css'

export default class Login extends Component {
  constructor(...props) {
    super(...props)

    this.state = { loginMessage: null }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    login( this.email.value, this.password.value )
      .catch( err => this.setState( this.setMessage(`Usuario o Password incorrectos: ${err.message}`) ) )
  }

  setMessage(err) {
    return { loginMessage: err }
  }

  resetPassword() {
    resetPassword( this.email.value )
      .then( () => this.setState( this.setMessage(`Se ha enviado un correo electronico a  <b>${this.email.value}</b> para reestablecer tu contraseña.`) )  )
      .catch( err => this.setState( this.setMessage(`El email ${this.email.value} no se encuentra registrado`) ) )
  }

	render() {
		return (
			<article className="Main-container ">
        <div className="Main-marco">
          <h1 className="titleForm Main-titulo">Iniciar sesión</h1>
          <form className="pure-form Main-form" onSubmit={this.handleOnSubmit}>
            <input className="pure-input-rounded Main-input" type="email" placeholder="Correo electrónico" ref={ email => this.email = email }  />
            <input className="pure-input-rounded Main-input"  type="password" placeholder="Contraseña" ref={ password => this.password = password } />
            {
              this.state.loginMessage &&
              <div className="u-error">
                <p>
                  Error:&nbsp;&nbsp;{this.state.loginMessage}&nbsp;
                  <a href="#" onClick={this.resetPassword} className="alert-link">¿Olvidaste tu contraseña?</a>
                </p>
              </div>
            }
            <input  type="submit" className="button Main-button" value="Login" />
          </form>
        </div>
			</article>
		)
	}
}