import React, { Component } from 'react';
import './Main.css'


const Form = (props) => (

	<form className="form__container" onSubmit={props.submitForm}>

		<input 
		type="email" 
		className="form__input" 
		placeholder="dissatisfied-pair-programmer@github.com" 
		onChange={props.setEmail}
		/>

		<input 
		type="submit" 
		className="form__input--submit" 
		value="Stay in the loop"
		/>

	</form>

)

class Main extends Component {

	constructor() {
		super();
		this.state = {
			email: null
		}
	}

	render() {

		return(

		<main className="main__container">

			<header className="main__header">

				<img src={'https://tuple.app/img/logo.svg'} alt="logo" width={140} />

				<h1 className="main__title color-dark">
				
				Remember when Slack <em>stole</em> Screenhero from us?
				
				</h1>

				<h2 className="main__subtitle color-dark">

					We do too, and it <em>sucked</em>.

					<br />

					That's why we're on a mission to replace it.

				</h2>

			</header>

			<p className="main__paragraph main__first-letter color-dark">

				<span className="main__paragraph--first-line">When slack bought Screenhero</span>, we were sure someone 
				new would come along to make a tool specifically for pair programming.

			</p>

			<p className="main__paragraph color-dark">

				But <em>four</em> years later, no one has.

			</p>

			<p className="main__paragraph color-dark">

				That sucks, because the remaining tools 
				like <em>Skype</em> and <em>Hangouts</em> don't give both 
				people full keyboard and mouse control.

			</p>

			<p className="main__paragraph color-dark">

				Have you ever tried to dictate some code for your pair to write? 
				Or narrated a set of vim commands? <em>Not fun</em>.

			</p>

			<p className="main__paragraph color-dark">

				Another problem: if you're going to type on a remote machine, 
				the connection has to be super low-latency. This is 
				the sort of thing that videoconferencing tools just don't care 
				much about.

			</p>

			<p className="main__paragraph color-dark">

				Since no one has built anything as close to as good 
				as <em>Screenhero</em> was, we're building its 
				spiritual successor.

			</p>

			<p className="main__paragraph color-dark">

				<strong>

					If you're sick of pairing over Skype or Hangouts 
					give us your email and we'll let you know 
					when Tuple is ready.

				</strong>

			</p>

			<Form 
			setEmail={e => this.setState({email: e.target.value})}
			submitForm={e => alert('email is: ' + this.state.email)}
			/>

		</main>

		)
	
	}

}

export default Main