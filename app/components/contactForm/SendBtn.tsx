import React from 'react';
import { useFormStatus } from 'react-dom';

export default function SendBtn() {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending}
			className='btn  border-blue-800 text-blue-800  border-2 w-full my-8 text-lg block mx-auto md:mt-10 md:max-w-[40%] hover:bg-blue-950 hover:text-neutral-400'>
			{pending ? 'Sending...' : 'Send'}
		</button>
	);
}
