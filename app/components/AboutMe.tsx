import React from 'react';
import Section from './section/Section';
import SectionTitle from './section/SectionTitle';
import SectionSubTitle from './section/SectionSubTitle';

export default function AboutMe() {
	return (
		<Section id='aboutMe' classes='bg-white'>
			<div className='wrapper'>
				<SectionTitle text='About Me' />
				<SectionSubTitle text='Shortcut of my life' />
			</div>
		</Section>
	);
}
