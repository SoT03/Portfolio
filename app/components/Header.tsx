'use client';

import React from 'react';
import Navbar from './Navbar';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from 'next/link';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import SocialLink from './header/socialLink';

const socialData = [
	{
		icon: faLinkedin,
		link: 'https://www.linkedin.com/in/bogdan-%C5%BCygad%C5%82o-371962272/',
	},
	{ icon: faGithub, link: 'https://github.com/SoT03' },
];

export default function Header() {
	const [text] = useTypewriter({
		words: ['Front-end Developer', 'JavaScript Developer', 'React Developer'],
		loop: false,
	});

	return (
		<header className='relative bg-gradient-radial from-fuchsia-900 to-fuchsia-950 h-screen z-0'>
			<div className='wrapper text-white h-full  flex flex-col  justify-between  gap-6'>
				<Navbar />
				<div className='relative -z-10 px-10 md:px-16'>
					<p className='[text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] text-4xl font-semibold text-amber-300 mb-6 md:text-5xl md:w-3/4 md:mb-12 '>
						Hello, my name is Bogdan Żygadło{' '}
						<span className='relative inline-block wave-animation -z-10'>
							✋
						</span>
					</p>
					<h1 className='inline-block  font-semibold text-xl'>
						I'm{' '}
						<span className='bg-gradient-to-tr bg-clip-text text-transparent text-xl from-amber-200 to-amber-400 font-bold md:text-2xl'>
							{text}
						</span>
					</h1>
					<Cursor />
					<p className='mb-4 md:text-lg md:w-1/2 md:mb-10'>
						I specialize in crafting engaging user experiences with JavaScript
						using React. Let's bring your ideas to life!
					</p>
					<Link href='' className='btn block md:inline-block md:text-xl'>
						Let's work together
					</Link>
				</div>

				<div className='text-center pb-6 md:pb-10'>
					<h2 className='mb-2'>You can also find me at:</h2>
					<div className='flex justify-center gap-10'>
						{socialData.map((item) => (
							<SocialLink key={item.link} {...item} />
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
