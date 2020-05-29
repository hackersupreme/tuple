import React from 'react';
import './Details.css'
import Touch from './touch.png'
import CommandLine from './command-line.png'
import Plugin from './plugin.png'
import Graph from './graph.png'

const Details = () => (

	<aside className="details__outer-container">

		<section className="details__inner-container">

			<h3 className="details__header color-light-h"> 

				Details we're sweating

			</h3>

			<section className="details__item">

				<img src={Touch} alt="full time control icon" width={40} className="details__icon" />

				<h4 className="details__item-header color-light-h">
					
					Full-time control for two
				
				</h4>

				<p className="details__item-paragraph color-light-p">
					
					Seamless mouse and keyboard control for both parties 
					(not easy, but essential).
				
				</p>

			</section>

			<section className="details__item">

				<img src={Graph} alt="snappy interactions icon" width={40} className="details__icon" />

				<h4 className="details__item-header color-light-h">

					Snappy Interactions

				</h4>

				<p className="details__item-paragraph color-light-p">

					An obsession with ridiculously low latency 
					(extra not easy, extra-extra essential).

				</p>

			</section>

			<section className="details__item">

				<img src={CommandLine} alt="command line friendly icon" width={40} className="details__icon" />

				<h4 className="details__item-header color-light-h">

					Command-line friendly

				</h4>

				<p className="details__item-paragraph color-light-p">

					A proper command-line interface (lol if your 
					pairing tool isn't command-line driven).

				</p>

			</section>

			<section className="details__item">

				<img src={Plugin} alt="Pluginability icon" width={40} className="details__icon" />

				<h4 className="details__item-header color-light-h">

					Pluginability

				</h4>

				<p className="details__item-paragraph color-light-p">

					A plugin system to let you customize your experience.

				</p>

			</section>

		</section>

	</aside>

)

export default Details