import React from 'react';
import Section from './components/section/Section';
import SectionTitle from './components/section/SectionTitle';
import SectionSubTitle from './components/section/SectionSubTitle';
import ProjectCard from './components/Project/ProjectCard';

export default function Projects() {
	return (
		<Section id='projects' classes='sticky  bg-slate-200 '>
			<SectionTitle text='Projects' />
			<SectionSubTitle text='My personal and commercial projects' />
			<div className='wrapper '>
				<div className='my-10'>
					<h3 className='text-gray-700 mb-6 text-2xl font-semibold'>
						Personal Projects
					</h3>
					<div>
						<ProjectCard />
					</div>
				</div>
				<div>
					<h3>Commercial Projects</h3>
				</div>
			</div>
		</Section>
	);
}
