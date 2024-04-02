'use client';
import { useState } from 'react';
import FormRow from './FormRow';
import emailjs from '@emailjs/browser';
import SendBtn from './SendBtn';

const formRows = [
	{
		label: 'Name',
		labelId: 'from_name',
		required: false,
		type: 'text',
	},
	{
		label: 'Company',
		labelId: 'company',
		type: 'text',
		required: false,
	},

	{
		label: 'e-mail',
		labelId: 'email',
		required: true,
		errMessage: 'Please enter valid email address',
		type: 'text',
		pattern: true,
	},
	{
		label: 'message',
		labelId: 'message',
		required: true,
		textarea: true,
		errMessage: 'Message cannot be empty',
		type: 'text',
	},
];

const Form = () => {
	const [status, setStatus] = useState(false);

	const sendEmail = async (formData: FormData) => {
		const emailData = {
			from_name: formData.get('from_name'),
			company: formData.get('company'),
			message: formData.get('message'),
			email: formData.get('email'),
		};

		emailjs
			.send(
				process.env.NEXT_PUBLIC_ID!,
				process.env.NEXT_PUBLIC_template!,
				emailData,
				{
					publicKey: process.env.NEXT_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					setStatus(true);
				},
				(error) => {
					alert(error);
				}
			);
	};

	return (
		<form className='relative md:mt-10 xl:mt-20' action={sendEmail} id='form'>
			<div className='flex-wrap  lg:max-w-[600px]  lg:m-auto'>
				{formRows.map((row) => (
					<FormRow {...row} key={row.labelId} errMessage={row.errMessage} />
				))}
			</div>

			<div>
				<SendBtn />
			</div>
			{status && (
				<div className='fixed top-0 left-0 w-full h-screen z-40 flex items-center justify-center  '>
					<div className='bg-white relative z-50 mx-1 rounded-lg p-8 max-w-[420px] border-4 border-blue-700'>
						<p className='mb-4 text-black'>Your message has been sent.</p>
						<p>I will response as fast as possible 😁</p>
						<button
							className='btn  mt-4 border-2 border-blue-600 hover:bg-blue-600 hover:text-white'
							type='reset'
							onClick={() => {
								setStatus(false);
							}}>
							Back
						</button>
					</div>
					<div className='bg-shadow'></div>
				</div>
			)}
		</form>
	);
};

export default Form;
