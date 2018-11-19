import React, { Component } from 'react'
import HeaderVideo from './Header_video'
import './style/header_video.css'
import './style/styles.css'

export default class Home extends Component {
	render() {
		return (
			<div>
				<HeaderVideo
					url='./people.jpg'
					title='Comunica'
					subtitle="Ayuda a la comunidad"
				/>
			</div>
		)
	}
}