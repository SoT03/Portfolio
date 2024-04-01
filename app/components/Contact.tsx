import React from 'react';
import Form from './contactForm/Form';
import SectionTitle from './section/SectionTitle';
import SectionSubTitle from './section/SectionSubTitle';

export default function Contact() {
	return (
		<footer
			className='relative bg-neutral-300 min-h-screen top-0 z-10  px-8 py-16 md:px-20 lg:py-20 xl:ml-[50%]'
			id='contact'>
			<div className='wrapper'>
				<SectionTitle text='Contact me' />
				<SectionSubTitle text='Ask whatever you want !' />
				<Form />
			</div>
		</footer>
	);
}
