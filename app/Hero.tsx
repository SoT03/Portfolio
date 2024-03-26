import React from 'react';
import Section from './components/section/Section';
import Image from 'next/image';
import img from './assets/profile.jpg';

export default function Hero() {
	return (
		<Section
			id='hero'
			bgImg={img.src}
			classes='sticky h-screen bg-center bg-cover'>
			<div className='bg-shadow'></div>
		</Section>
	);
}
