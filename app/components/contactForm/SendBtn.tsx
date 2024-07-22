import React from 'react';
import { useFormStatus } from 'react-dom';

export default function SendBtn() {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending}
			className='btn  border-blue-500 text-blue-500  border-2 w-full my-8 text-lg block mx-auto md:mt-10 md:max-w-[40%] hover:bg-blue-500 hover:text-white'>
			{pending ? 'Sending...' : 'Send'}
		</button>
	);
}
