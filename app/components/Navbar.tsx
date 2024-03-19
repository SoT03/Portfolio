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
		isOpen: ' rotate-[315deg] translate-y-2.5 top-3',
	},
	{
		isOpen: ' -translate-x-7 opacity-0',
	},
	{
		isOpen: ' rotate-[-135deg] -translate-y-2.5 ',
	},
];

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<nav className='sticky flex justify-end w-full top-0  bg-transparent'>
			<div
				className='relative flex flex-col z-30 gap-1.5 p-6 self-end cursor-pointer'
				onClick={() => setIsNavOpen(!isNavOpen)}>
				{burgerItems.map((item) => (
					<BurgerItem key={item.isOpen} {...item} isNavOpen={isNavOpen} />
				))}
			</div>

			<ul
				className={`absolute  h-screen w-screen top-0 left-0 flex flex-col items-center justify-center  bg-pink-600 transition-all duration-700 z-20 ${
					isNavOpen ? 'opacity-100' : 'opacity-0 -translate-y-full'
				}`}>
				{navItems.map((item) => (
					<li
						key={item.text}
						className='text-2xl text-white my-2 text-center w-1/2 border-b-2  '>
						<Link href={item.link} className='py-2 px-4 '>
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
