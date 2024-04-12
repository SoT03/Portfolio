'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import BurgerItem from './nav/burgerItem';

const navItems = [
	{
		text: 'Home',
		link: '#home',
	},
	{
		text: 'About Me',
		link: '#aboutme',
	},
	{
		text: 'Projects',
		link: '#projects',
	},
];

const burgerItems = [
	{
		isOpen: ' rotate-[315deg] translate-y-2.5 top-3 md:translate-y-3.5',
	},
	{
		isOpen: ' -translate-x-7 opacity-0',
	},
	{
		isOpen: ' rotate-[-135deg] -translate-y-2.5 md:-translate-y-3.5',
	},
];

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<nav className='fixed top-0 flex justify-end w-full   bg-transparent   xl:w-1/2 lg:justify-center   z-50'>
			<div
				className='relative flex flex-col z-30 gap-1.5 p-4 mt-2 mr-4 self-end cursor-pointer md:p-10 md:gap-2 lg:hidden '
				onClick={() => setIsNavOpen(!isNavOpen)}>
				{burgerItems.map((item) => (
					<BurgerItem key={item.isOpen} {...item} isNavOpen={isNavOpen} />
				))}
			</div>

			<ul
				className={`absolute  h-screen w-screen top-0 left-0 flex flex-col items-center justify-center  bg-black transition-all duration-700 z-20 lg:bg-slate-700     lg:opacity-100 lg:-translate-y-0 lg:relative lg:h-auto lg:flex-row lg:shadow-lg  xl:top-12   xl:rounded-e-full ${
					isNavOpen ? 'opacity-100' : 'opacity-0 -translate-y-full'
				} `}>
				{navItems.map((item) => (
					<li
						onClick={() => setIsNavOpen(!isNavOpen)}
						key={item.text}
						className='text-2xl text-white  my-2 text-center w-1/2 border-b-2 md:my-6 md:text-3xl md:pb-2 md:w-1/4 lg:border-none lg:pb-0 lg:text-lg  lg:my-4'>
						<Link href={item.link} className='py-2 px-4 lg:relative link'>
							{item.text}
						</Link>
					</li>
				))}
				<li
					onClick={() => setIsNavOpen(!isNavOpen)}
					className='text-2xl py-3 px-4 mt-8 text-yellow-300 border-2 border-yellow-300 rounded-full text-center lg:my-2 lg:text-xl lg:py-2 lg:px-3 hover:bg-yellow-300 hover:text-slate-700 transition-colors duration-300'>
					<Link
						href='/files/CV.pdf'
						target='_blank'
						className='py-2 px-4  lg:relative '>
						Download CV
					</Link>
				</li>
			</ul>
		</nav>
	);
}
