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
	'ts',
	'gulp',
	'react',
	'nextjs',

	'mongodb',
];

export default function AboutMe() {
	return (
		<Section classes='relative bg-white h-full  ' id='aboutme'>
			<div className='wrapper '>
				<div className='mb-10'>
					<SectionTitle text='About Me' />
					<SectionSubTitle text='Shortcut of my life' />
					<p className='mt-4 lg:text-lg'>
						Hello! I&apos;m Bogdan Żygadło, a passionate Front-End Developer who
						loves to develop his knowledge. My journey to this point has been
						filled with exciting challenges and inspiring experiences. For the
						past 9 months i was learning how to create websites from scratch by
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
					<div className='mt-4 mb-8 md:flex  md:items-center  md:justify-center  md:mt-6 md:gap-12 lg:mb-12  '>
						<h3 className='font-semibold text-center text-xl mb-4 md:border-r-2 md:border-black md:p-8 '>
							My Tech Stack
						</h3>
						<div className=' flex flex-wrap items-center justify-center gap-4 max-w-[400px]   md:rounded-2xl md:p-6 '>
							{techStack.map((item) => (
								<img
									fetchPriority='low'
									loading='lazy'
									width={56}
									height={56}
									src={`https://skillicons.dev/icons?i=${item}`}
									alt={`${item} icon`}
									key={item}
									className='hover:-translate-y-2 transition-transform duration-300 shadow-sm'
								/>
							))}
						</div>
					</div>
					<p className='lg:text-lg'>
						I have knowledge in UI/UX design and RWD that prioritize
						accessibility and engagement, SEO principles to optimalize
						visibility and searchability for websites and applications and
						skills in Git for collaborative coding
					</p>
				</div>
			</div>
		</Section>
	);
}
