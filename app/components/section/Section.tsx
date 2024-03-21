import React from 'react';

type SectionProps = {
	children: React.ReactNode;
	id: string;
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
			className={`sticky h-screen top-0 z-10  px-8 py-12 md:px-12 lg:py-16 xl:px-0 xl:py-20 ${classes}`}>
			{children}
		</section>
	);
}
