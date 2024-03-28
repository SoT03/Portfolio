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
		<div className='shadow-md rounded-lg overflow-hidden bg-white '>
			<div>
				<Image src={img} alt={`${title} website`} height={900} width={1600} />
			</div>
			<div>
				<div className='py-4 px-6'>
					<h4 className='mb-2 font-bold text-xl'>{title}</h4>
					<p className='mb-2 text-sm'>{desc}</p>
					<div className=' flex justify-between '>
						<div className=''>
							<Image
								loading='lazy'
								width={32}
								height={32}
								src={`https://skillicons.dev/icons?i=${tech}`}
								alt={`icon`}
								className='w-20 '
							/>
						</div>
						<div className='flex gap-2 '>
							<Link href={live}>Live</Link>
							<Link href={repo}>Repository</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
