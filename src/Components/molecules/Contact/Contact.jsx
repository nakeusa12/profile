import React from 'react';
import emailjs from 'emailjs-com';
import { Gap, Input, TextArea, Button } from '../../atoms';
import SideInfo from './SideInfo';
import swal from 'sweetalert';

const Contact = () => {
	const sendEmail = (e) => {
		e.preventDefault();
		const form = e.target;

		emailjs
			.sendForm(
				'service_nakeusa',
				'template_cushsce',
				e.target,
				'user_yQe3YEsofKPqu2ibaXCN8'
			)
			.then(
				(result) => {
					console.log(result.text);
					swal({
						title: 'Good job!',
						text: 'Your message was sent successfully',
						icon: 'success',
						button: false,
						timer: 1000,
					});

					form.reset();
				},
				(error) => {
					console.log(error.text);
					swal({
						title: 'Failed',
						text: 'Your message is Failed ',
						icon: 'error',
						button: false,
						timer: 1000,
					});
				}
			);
	};

	return (
		<section id='contactus'>
			<div className='container px-12 py-32 mx-auto'>
				<div className='flex flex-wrap w-full mb-10 flex-col items-center text-center'>
					<h2 className='text-xl text-third font-primary font-bold mb-1'>
						My Contact
					</h2>
					<h1 className='text-4xl font-primary text-primary font-bold mb-4'>
						Get In Touch
					</h1>
				</div>
				<div className='flex flex-wrap  mx-auto'>
					<form
						method='POST'
						onSubmit={sendEmail}
						className='lg:w-7/12 bg-white flex flex-col w-full md:py-8 mt-4 md:mt-0 '>
						<Input placeholder='Name' type='text' name='from_name' />
						<Gap height='1rem' />
						<Input placeholder='Email' type='email' name='reply_to' />
						<Gap height='1rem' />
						<TextArea placeholder='Message' name='message' />
						<Gap height='1rem' />
						<Button type='submit' value='send' title='Send Message' />
					</form>
					<SideInfo />
				</div>
			</div>
		</section>
	);
};

export default Contact;
