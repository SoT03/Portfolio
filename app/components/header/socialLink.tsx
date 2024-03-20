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
			<FontAwesomeIcon icon={icon} className='text-3xl' />
		</Link>
	);
}
