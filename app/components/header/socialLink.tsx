import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

type SocialLinkProps = {
	link: string;
	icon: IconDefinition;
};

export default function SocialLink({ link, icon }: SocialLinkProps) {
	return (
		<Link target='_blank' className='' href={link}>
			<FontAwesomeIcon
				icon={icon}
				className='text-3xl md:text-4xl hover:scale-110 hover:text-amber-300 transition-all duration-500'
			/>
		</Link>
	);
}
