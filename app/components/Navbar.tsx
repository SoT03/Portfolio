'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import BurgerItem from './nav/burgerItem';

const navItems = [
	{
		text: 'About Me',
		link: '#aboutme',
	},
	{
		text: 'Education',
		link: '#education',
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
		<nav className='fixed top-0 flex justify-end w-full   bg-transparent   xl:w-1/2 lg:justify-center  z-50'>
			<div
				className='relative flex flex-col z-30 gap-1.5 p-4 mt-2 mr-4 self-end cursor-pointer md:p-10 md:gap-2 lg:hidden '
				onClick={() => setIsNavOpen(!isNavOpen)}>
				{burgerItems.map((item) => (
					<BurgerItem key={item.isOpen} {...item} isNavOpen={isNavOpen} />
				))}
			</div>

			<ul
				className={`absolute  h-screen w-screen top-0 left-0 flex flex-col items-center justify-center  bg-black transition-all duration-700 z-20  lg:opacity-100 lg:-translate-y-0 lg:relative lg:h-auto lg:flex-row    ${
					isNavOpen ? 'opacity-100' : 'opacity-0 -translate-y-full'
				} `}>
				{navItems.map((item) => (
					<li
						key={item.text}
						className='text-2xl text-white my-2 text-center w-1/2 border-b-2 md:my-6 md:text-3xl md:pb-2 md:w-1/4 lg:border-none lg:pb-0 lg:text-2xl  '>
						<Link href={item.link} className='py-2 px-4 lg:relative link'>
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
