import React from 'react';
import Section from './components/section/Section';
import SectionTitle from './components/section/SectionTitle';
import SectionSubTitle from './components/section/SectionSubTitle';
import ProjectCard from './components/Project/ProjectCard';
import cryptoImg from './assets/CryptoCoin.jpg';
import tqmImg from './assets/tqm.jpg';

const projectData = [
	{
		id: 1,
		title: 'CryptoCoin',
		desc: 'CryptoCoin represents my initial foray into web development, focusing on API integration—a fundamental skill in modern web development. Through this project, I gained hands-on experience in fetching and displaying real-time cryptocurrency data, refining my abilities in data manipulation and presentation.',
		tech: 'nextjs,react,sass',
		live: 'https://crypto-calc-two.vercel.app/',
		repo: 'https://github.com/SoT03/CryptoCalc',
		img: cryptoImg.src,
	},
];

const commercialProjects = [
	{
		id: 1,
		title: 'TQM Partners',
		desc: 'CryptoCoin represents my initial foray into web development, focusing on API integration—a fundamental skill in modern web development. Through this project, I gained hands-on experience in fetching and displaying real-time cryptocurrency data, refining my abilities in data manipulation and presentation.',
		tech: 'nextjs,react,tailwind',
		live: 'TQMpartners.pl',
		repo: 'https://github.com/SoT03/CryptoCalc',
		img: tqmImg.src,
	},
];

export default function Projects() {
	return (
		<Section id='projects' classes='relative bg-slate-200 '>
			<SectionTitle text='Projects' />
			<SectionSubTitle text='My personal and commercial projects' />
			<div className='wrapper '>
				<div className='my-10'>
					<h3 className='text-gray-700 mb-6 text-2xl font-semibold'>
						Personal Projects
					</h3>
					<div>
						{projectData.map((project) => (
							<ProjectCard key={project.id} {...project} />
						))}
					</div>
				</div>
				<div>
					<h3 className='text-gray-700 mb-6 text-2xl font-semibold'>
						Commercial Projects
					</h3>
					<div>
						{commercialProjects.map((project) => (
							<ProjectCard key={project.id} {...project} />
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
