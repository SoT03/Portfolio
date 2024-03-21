import React from 'react';

export default function SectionTitle({ text }: { text: string }) {
	return <h2 className='text-3xl font-semibold'>{text}</h2>;
}
