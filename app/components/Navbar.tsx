'use client';
import Link from 'next/link';
import React, { useState } from 'react';

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

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<nav className='fixed  top-0 bg-transparent'>
			<div
				className='relative m-6 p-4 cursor-pointer'
				onClick={() => setIsNavOpen(!isNavOpen)}>
				<div
					className={`absolute  left-0 h-1.5 w-10 rounded-xl bg-black duration-500 ${
						isNavOpen ? ' rotate-[135deg] top-3' : 'top-0'
					}`}
				/>
				<div
					className={`absolute top-3 left-0 h-1.5 w-10 rounded-xl bg-black duration-500 ${
						isNavOpen ? ' translate-x-7 opacity-0' : ''
					}`}
				/>
				<div
					className={`absolute top-3 left-0 h-1.5 w-10 rounded-xl bg-black duration-500 ${
						isNavOpen ? 'rotate-45 ' : 'top-6'
					}`}
				/>
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
