'use client';
import { useRef } from 'react';
import FormRow from './FormRow';
import emailjs from '@emailjs/browser';
import SendBtn from './SendBtn';
import { redirect } from 'next/navigation';

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
	const form = useRef(null);

	const handleSubmit = (e: any) => {
		console.log(form.current);
		e.preventDefault();
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_ID!,
				process.env.NEXT_PUBLIC_template!,
				form.current!,
				{
					publicKey: process.env.NEXT_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					redirect('/');
				},
				(error) => {
					alert(error);
				}
			);
	};

	return (
		<form
			ref={form}
			className='relative md:mt-10 xl:mt-20'
			onSubmit={handleSubmit}>
			<div className='flex-wrap  lg:max-w-[600px]  lg:m-auto'>
				{formRows.map((row) => (
					<FormRow {...row} key={row.labelId} errMessage={row.errMessage} />
				))}
			</div>

			<div>
				<SendBtn />
			</div>
		</form>
	);
};

export default Form;
