import React from 'react';

type SectionProps = {
	children: React.ReactNode;
	id?: string;
	classes?: string;
	bgImg?: string;
};

export default function Section({
	children,
	id,
	classes,
	bgImg,
}: SectionProps) {
	return (
		<section
			style={{ backgroundImage: `url(${bgImg})` }}
			id={id}
			className={` min-h-screen top-0 z-10  px-8 py-16 md:px-20 lg:py-20  xl:py-24 ${classes}`}>
			{children}
		</section>
	);
}
