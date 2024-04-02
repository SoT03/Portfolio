import Image from 'next/image';
import React from 'react';

import Link from 'next/link';

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
	desc,
	tech,
	live,
	repo,
	img,
}: ProjectCardProps) {
	return (
		<div className='flex flex-col shadow-md rounded-lg overflow-hidden bg-white'>
			<div className=''>
				<img
					loading='lazy'
					src={img}
					alt={`${title} website`}
					height={900}
					width={1600}
				/>
			</div>

			<div className='flex flex-col justify-between  py-4 px-6 h-[300px] md:px-12 lg:h-[260px] '>
				<div>
					<h4 className='mb-2 font-bold text-xl md:text-2xl md:my-3'>
						{title}
					</h4>
					<p className='mb-2 text-sm md:text-base'>{desc}</p>
				</div>
				<div className=' flex justify-between py-3 md:py-4 '>
					<div className=''>
						<img
							loading='lazy'
							width={32}
							height={32}
							src={`https://skillicons.dev/icons?i=${tech}`}
							alt={`icon`}
							className='w-20 md:w-24 xl:w-28'
						/>
					</div>
					<div className='relative flex items-center gap-2 md:gap-6 md:text-xl lg:mr-6 '>
						<Link
							href={live}
							className=' hover:text-blue-500 transition-colors duration-300 '>
							Live
						</Link>
						<Link
							href={repo}
							className='hover:text-blue-500 transition-colors duration-300'>
							Repository
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
