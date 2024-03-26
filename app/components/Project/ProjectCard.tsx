import Image from 'next/image';
import React from 'react';
import img from '../../assets/GymBro.jpg';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function ProjectCard() {
	return (
		<div className='shadow-md rounded-lg overflow-hidden bg-white '>
			<div>
				<Image src={img.src} alt='gym' height={900} width={1600} />
			</div>
			<div>
				<div className='py-4 px-6'>
					<h4 className='mb-2 font-bold text-xl'>GymBro</h4>
					<p className='mb-2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
						explicabo ea? Quis delectus veritatis ipsum tenetur sunt aliquam
						veniam asperiores modi nulla? Beatae, ipsam laboriosam.
					</p>
					<div className=' flex  justify-between'>
						<div>
							<Image
								loading='lazy'
								width={56}
								height={56}
								src={`https://skillicons.dev/icons?i=react,tailwind`}
								alt={`icon`}
								className='hover:-translate-y-2 transition-transform duration-300'
							/>
						</div>
						<div className='flex gap-2'>
							<Link href=''>Live</Link>
							<Link href=''>Repository</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
