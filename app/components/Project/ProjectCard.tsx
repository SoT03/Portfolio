import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import { Github, Radio, WifiIcon } from 'lucide-react';

type ProjectCardProps = {
	title: string;
	desc: string;
	tech: string;
	live: string;
	repo: string;
	img: string;
};

export default function ProjectCard({
	title,
	tech,
	live,
	repo,
	img,
}: ProjectCardProps) {
	return (
		<div className='mb-14 bg-neutral-100 rounded-lg'>
			<div>
				<div className='relative p-3 '>
					<img
						alt={`${title} project screenshot`}
						className='rounded-lg '
						src={img}
					/>
				</div>
			</div>
			<div className='p-2 '>
				<div className='flex flex-col justify-center items-center md:py-2'>
					<div className='text-lg font-semibold mb-2 md:mb-4 md:text-2xl'>
						{title}
					</div>
					<div className='  '>
						<img
							loading='lazy'
							src={`https://skillicons.dev/icons?i=${tech}`}
							alt={`icon`}
							className='relative '
						/>
					</div>
				</div>
				<div className='py-4 '>
					<div className=' relative flex items-center justify-around   md:text-xl md:py-4 '>
						<Link
							target='_blank'
							href={live}
							className='flex gap-2 items-center justify-center border py-2 px-4 md:w-1/4 hover:text-blue-500 transition-colors duration-300 '>
							Live <Radio />
						</Link>
						<Link
							target='_blank'
							href={repo}
							className='flex gap-2 items-center justify-center border py-2 px-4 md:w-1/4 hover:text-blue-500 transition-colors duration-300'>
							Repository <Github />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
