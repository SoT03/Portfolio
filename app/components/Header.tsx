'use client';

import React from 'react';
import Navbar from './Navbar';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from 'next/link';

export default function Header() {
	const [text] = useTypewriter({
		words: ['Front-end Developer', 'JavaScript Developer', 'React Developer'],
		loop: false,
	});

	return (
		<header className='relative bg-gradient-radial from-fuchsia-900 to-fuchsia-950 h-screen z-0'>
			<Navbar />
			<div className='wrapper text-white px-10'>
				<div className='text-4xl font-semibold mb-8'>
					<p className='[text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] text-amber-300'>
						Hello, my name is Bogdan Żygadło{' '}
						<span className='relative inline-block wave-animation -z-10'>
							✋
						</span>
					</p>
				</div>
				<div className='relative -z-10 mb-6'>
					<h1 className='inline-block  font-semibold'>
						I'm{' '}
						<span className='bg-gradient-to-tr bg-clip-text text-transparent text-xl from-amber-200 to-amber-400 font-bold'>
							{text}
						</span>
					</h1>
					<Cursor />
					<p>
						I specialize in crafting engaging user experiences with JavaScript
						using React. Let's bring your ideas to life!
					</p>
				</div>
				<div>
					<Link href='' className='btn'>
						Let's work togheter
					</Link>
				</div>
				<div></div>
			</div>
		</header>
	);
}
