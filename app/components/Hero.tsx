import React from 'react';
import Section from './section/Section';

import img from '../assets/profile.jpg';

export default function Hero() {
	return (
		<Section id='hero' classes='sticky h-screen bg-gray-800'>
			<p className='absolute text-xl text-pink-600 bottom-12 right-12 -rotate-12 md:bottom-36 md:right-1/3 md:text-5xl'>
				It&apos;s me !
			</p>
			<div className='h-full flex items-center'>
				<img
					src={img.src}
					alt='My photo'
					className='rounded-full   mx-auto border-black border-4 profile-animation md:w-1/2'
					loading='eager'
				/>
			</div>
		</Section>
	);
}
