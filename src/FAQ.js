import React from 'react';
import './FAQ.css'


const FAQ = () => (

	<aside className="faq__outer-container">

		<section className="faq__inner-container">

			<h3 className="faq__header color-light-h">

				Frequently asked questions

			</h3>

			<section className="faq__item">

				<h4 className="faq__item-header color-light-h">

					What exactly are you making?

				</h4>

				<p className="faq__item-paragraph color-light-p">

					A tool for programmers to pair on the same 
					machine regardless of how far apart 
					they are. Both people will have full control 
					of the machine with their own mouse and 
					keyboard. We also plan to spend a ridiculous 
					amount of effor on making things super low-
					latency. That's the sort of thing Skype 
					will never care about, but makes an 
					enormous difference when trying to type on 
					a remote machine.

				</p>

			</section>

			<section className="faq__item">

				<h4 className="faq__item-header color-light-h">

					And who are you guys?

				</h4>

				<p className="faq__item-paragraph color-light-p">

					Ben, Joel, and Spencer; three programmers who 
					aren't happy with the options for remote pairing 
					out there.

				</p>

			</section>

			<section className="faq__item">

				<h4 className="faq__item-header color-light-h">

					What's next?

				</h4>

				<p className="faq__item-paragraph color-light-p">

					Shipping a v1 to a limited alpha group.

				</p>

			</section>

			<section className="faq__item">

				<h4 className="faq__item-header color-light-h">

					Can I get in the alpha?

				</h4>

				<p className="faq__item-paragraph color-light-p">

					Sorry, it's invite-only for now. But if you drop 
					your email in the box above, we'll put you on 
					the list for a future invite.
					
				</p>

			</section>

		</section>

	</aside>

)

export default FAQ