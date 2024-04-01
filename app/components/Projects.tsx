'use client';
import React from 'react';
import Section from './section/Section';
import SectionTitle from './section/SectionTitle';
import SectionSubTitle from './section/SectionSubTitle';
import ProjectCard from './Project/ProjectCard';
import cryptoImg from '../assets/CryptoCoin.jpg';
import tqmImg from '../assets/tqm.jpg';
import gymbroImg from '../assets/GymBro.jpg';
import darwinImg from '../assets/Darwin.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const projectData = [
	{
		id: 1,
		title: 'CryptoCoin',
		desc: 'CryptoCoin represents my initial foray into web development, focusing on API integration—a fundamental skill in modern web development. Through this project, I gained hands-on experience in fetching and displaying real-time cryptocurrency data.',
		tech: 'nextjs,react,sass',
		live: 'https://crypto-calc-two.vercel.app/',
		repo: 'https://github.com/SoT03/CryptoCalc',
		img: cryptoImg.src,
	},
	{
		id: 2,
		title: 'GymBro',
		desc: 'GymBro marked my inaugural venture into utilizing Tailwind CSS. My objective was clear: crafting a sleek and minimalist webpage that exuded both simplicity and visual appeal.',
		tech: 'nextjs,react,tailwind',
		live: 'https://gymbro-silk.vercel.app/',
		repo: 'https://github.com/SoT03/gymbro',
		img: gymbroImg.src,
	},
];

const commercialProjects = [
	{
		id: 1,
		title: 'TQM Partners',
		desc: 'The company TQM Partners is a firm providing training, implementation, and consultancy services in the scope of ISO, for which I have developed the website.',
		tech: 'nextjs,react,tailwind',
		live: 'TQMpartners.pl',
		repo: 'https://github.com/SoT03/tqm',
		img: tqmImg.src,
	},
	{
		id: 2,
		title: 'Darwin FHU',
		desc: 'Darwin FHU is a company providing services in the field of photovoltaic installations, heat pumps, air conditioning, and energy storage',
		tech: 'nextjs,react,tailwind',
		live: 'dar-win.pl/',
		repo: 'https://github.com/SoT03/darwin',
		img: darwinImg.src,
	},
];

export default function Projects() {
	return (
		<Section id='projects' classes='relative bg-slate-200'>
			<SectionTitle text='Projects' />
			<SectionSubTitle text='My personal and commercial projects' />
			<div className='wrapper '>
				<div className='my-10 lg:my-6'>
					<h3 className='text-gray-700 mb-6 text-2xl font-semibold'>
						Personal Projects
					</h3>
					<Swiper
						modules={[Pagination]}
						spaceBetween={50}
						slidesPerView={1}
						scrollbar={{ draggable: true }}
						pagination={{ type: 'bullets', clickable: true }}>
						{projectData.map((project) => (
							<SwiperSlide key={project.id}>
								<ProjectCard key={project.id} {...project} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div>
					<h3 className='text-gray-700 mb-6 text-2xl font-semibold'>
						Commercial Projects
					</h3>
					<Swiper
						className='flex'
						modules={[Pagination]}
						spaceBetween={50}
						slidesPerView={1}
						scrollbar={{ draggable: true }}
						pagination={{ type: 'bullets', clickable: true }}>
						{commercialProjects.map((project) => (
							<SwiperSlide key={project.id}>
								<ProjectCard key={project.id} {...project} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</Section>
	);
}
