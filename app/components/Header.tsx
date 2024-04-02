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
		<header className='sticky top-0 bg-gradient-radial from-slate-700 to-black bg- h-screen  xl:w-1/2 xl:fixed'>
			<div className='relative text-white h-full flex flex-col   gap-6 z-0 '>
				<div className='wrapper h-5/6 flex items-center  lg:items-end'>
					<div className='relative -z-10 px-10 md:px-16 '>
						<p className='[text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)] text-4xl font-semibold text-amber-300 mb-6 md:text-5xl md:w-3/4 md:mb-12 xl:leading-tight'>
							Hello, my name is Bogdan Żygadło{' '}
							<span className='relative inline-block wave-animation -z-10'>
								✋
							</span>
						</p>
						<h1 className='inline-block  font-semibold text-xl'>
							I&apos;m{' '}
							<span className='bg-gradient-to-tr bg-clip-text text-transparent text-xl from-amber-200 to-amber-400 font-bold md:text-2xl'>
								{text}
							</span>
						</h1>
						<Cursor />
						<p className='mb-4 md:text-lg md:w-1/2 md:mb-10'>
							I specialize in crafting engaging user experiences with JavaScript
							using React. Let&apos;s bring your ideas to life!
						</p>
						<Link
							href='#contact'
							className='btn bg-transparent text-yellow-300 border-yellow-300 border-2 block md:inline-block md:text-xl hover:bg-yellow-300 hover:text-black'>
							Let&apos;s work together
						</Link>
					</div>
				</div>
				<div className='wrapper h-1/6 lg:flex lg:items-end'>
					<div className='text-center pb-6 md:pb-10'>
						<h2 className='mb-2 xl:mb-3'>You can also find me at:</h2>
						<div className='flex justify-center gap-10 xl:gap-12'>
							{socialData.map((item) => (
								<SocialLink key={item.link} {...item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
