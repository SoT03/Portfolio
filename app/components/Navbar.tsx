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

const burgerItems = [{
	
	isOpen:'rotate-[135deg] top-3',
	isClosed:'top-0'
},{
	
	isOpen:'-translate-x-7 opacity-0',
	isClosed:'top-3'
},{
	
	isOpen:'rotate-45 top-3',
	isClosed:'top-6'
},]

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(true);

	return (
		<nav className='fixed flex justify-end w-full top-0 bg-transparent'>
			<div
				className='relative z-10 m-6 p-6 self-end cursor-pointer'
				onClick={() => setIsNavOpen(!isNavOpen)}>
				{burgerItems.map(item => <BurgerItem key={item.isClosed} {...item} isNavOpen={isNavOpen} />)}
			</div>

			<ul className={`absolute  h-screen w-screen top-0 left-0 flex flex-col items-center justify-center  bg-pink-600 transition-all duration-700 ${isNavOpen? 'opacity-100': 'opacity-0 -translate-y-full'}`}>
				{navItems.map((item) => (
					<li key={item.text} className='text-2xl text-white my-2 text-center border-b-2  '>
						<Link href={item.link} className='py-2 px-4 '>{item.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
