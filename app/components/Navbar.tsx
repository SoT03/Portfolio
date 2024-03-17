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
	
	isOpen:'translate-x-7 opacity-0',
	isClosed:'top-3'
},{
	
	isOpen:'rotate-45 top-3',
	isClosed:'top-6'
},]

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<nav className='fixed  top-0 bg-transparent'>
			<div
				className='relative m-6 p-4 cursor-pointer'
				onClick={() => setIsNavOpen(!isNavOpen)}>
				{burgerItems.map(item => <BurgerItem key={item.isClosed} {...item} isNavOpen={isNavOpen} />)}
			</div>

			<ul className='hidden'>
				{navItems.map((item) => (
					<li key={item.text}>
						<Link href={item.link}>{item.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
