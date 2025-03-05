'use client';
import React, { useState } from 'react';
import Section from './section/Section';
import SectionTitle from './section/SectionTitle';
import SectionSubTitle from './section/SectionSubTitle';
import ProjectCard from './Project/ProjectCard';
import cryptoImg from '../assets/CryptoCoin.jpg';
import tqmImg from '../assets/tqm.jpg';
import gymbroImg from '../assets/GymBro.jpg';
import darwinImg from '../assets/Darwin.jpg';
import dashboard from '../assets/dashboard.png';
import shop from '../assets/shop.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const projectData = [
	{
		id: 1,
		title: 'Store Admin Dashboard',
		desc: '',
		tech: 'nextjs,prisma,tailwind,supabase',
		live: 'https://e-shop-admin-lac.vercel.app',
		repo: 'https://github.com/SoT03/e-shoes',
		img: dashboard.src,
	},
	{
		id: 2,
		title: 'Store Client',
		desc: '',
		tech: 'nextjs,prisma,supabase',
		live: 'https://e-shop-client-mocha.vercel.app/',
		repo: 'https://github.com/SoT03/e-shoes',
		img: shop.src,
	},
	{
		id: 3,
		title: 'CryptoCoin',
		desc: '',
		tech: 'nextjs,react,sass',
		live: 'https://crypto-calc-two.vercel.app/',
		repo: 'https://github.com/SoT03/CryptoCalc',
		img: cryptoImg.src,
	},
	{
		id: 4,
		title: 'GymBro',
		desc: '',
		tech: 'nextjs,react,tailwind',
		live: 'https://gymbro-silk.vercel.app/',
		repo: 'https://github.com/SoT03/gymbro',
		img: gymbroImg.src,
	},
	{
		id: 5,
		title: 'TQM Partners',
		desc: '',
		tech: 'nextjs,react,tailwind',
		live: 'https://tqmpartners.pl/',
		repo: 'https://github.com/SoT03/tqm',
		img: tqmImg.src,
	},
	{
		id: 6,
		title: 'Darwin FHU',
		desc: '',
		tech: 'nextjs,react,tailwind',
		live: 'https://dar-win.pl/',
		repo: 'https://github.com/SoT03/darwin',
		img: darwinImg.src,
	},
];

export default function Projects() {
	const [numberOfSlides, setNumberOfSlides] = useState(1);

	return (
		<Section id='projects' classes='relative bg-slate-200 '>
			<SectionTitle text='Projects' />
			<SectionSubTitle text='My personal and commercial projects' />
			<div className='wrapper'>
				<div className='my-12  lg:my-12'>
					<Swiper
						modules={[Pagination]}
						spaceBetween={40}
						slidesPerView={numberOfSlides}
						scrollbar={{ draggable: true }}
						pagination={{ type: 'bullets', clickable: true }}>
						{projectData.map((project) => (
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
