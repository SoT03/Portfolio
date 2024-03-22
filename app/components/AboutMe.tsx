import React from 'react';
import Section from './section/Section';
import SectionTitle from './section/SectionTitle';
import SectionSubTitle from './section/SectionSubTitle';
import Image from 'next/image';

const techStack = [
	'html',
	'css',
	'sass',
	'tailwind',
	'js',
	'react',
	'nextjs',
	'mongodb',
];

export default function AboutMe() {
	return (
		<Section id='aboutMe' classes='bg-white'>
			<div className='wrapper xl:pr-20'>
				<div className='mb-10'>
					<SectionTitle text='About Me' />
					<SectionSubTitle text='Shortcut of my life' />
					<p className='mt-4 xl:text-lg'>
						Hello! I'm Bogdan Żygadło, a passionate Front-End Developer who
						loves to develop his knowledge. My journey to this point has been
						filled with exciting challenges and inspiring experiences. For the
						past 9 i was learning how to create websites from scratch by
						watching courses and making my own projects to practice what i
						learned.
					</p>
					<p className='mt-2 xl:text-lg'>
						Outside of programming I study software engineering at Wyższa Szkoła
						Informatyki Stosowanej i Zarządzania (WIT) in Warsaw, I love all
						kinds of sports, working out at the gym and playing video games all
						of them help me maintain a balance between professional and personal
						life.
					</p>
				</div>
				<div>
					<SectionTitle text='Skills' />
					<SectionSubTitle text='My technical side' />
					<div className='mt-4'>
						<h3 className='font-semibold text-center text-xl'>My Tech Stack</h3>
						<div className=' flex'>
							{techStack.map((item) => (
								<Image
									loading='lazy'
									width={64}
									height={64}
									src={`https://skillicons.dev/icons?i=${item}`}
									alt={`${item} icon`}
									key={item}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
