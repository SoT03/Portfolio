import { stat } from 'fs';
import { ChangeEvent, use, useState } from 'react';
type FormRowProps = {
	label: string;
	labelId: string;
	required?: boolean;
	textarea?: boolean;
	type: string;
	errMessage?: string;
	pattern?: boolean;
};

const FormRow = ({
	label,
	labelId,
	required,
	textarea,
	errMessage,
	type,
	pattern,
}: FormRowProps) => {
	const [isValid, setIsValid] = useState(true);
	const [value, setValue] = useState('');

	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

	const checkHandler = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => {
		setValue(e.target.value);
		if (pattern) {
			setIsValid(emailRegex.test(value));
		} else if (e.target.validity.valid && e.target.value.trim().length > 2) {
			setIsValid(true);
		}
	};

	let content = (
		<input
			onInvalid={() => {
				setIsValid(false);
			}}
			onChange={checkHandler}
			required={required}
			
			value={value}
			id={labelId}
			name={labelId}
			type={type}
			className={`peer shadow-lg h-12 px-4 w-full border-2 rounded-lg border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-800    
			}`}
			placeholder='john@doe.com'
		/>
	);

	if (textarea) {
		content = (
			<textarea
				onChange={checkHandler}
				required={required}
				value={value}
				onInvalid={() => {
					setIsValid(false);
				}}
				id={labelId}
				name={labelId}
				className={`peer shadow-lg h-28 px-4 py-1 w-full border-2  rounded-lg border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-800 lg:h-36  ${
					!isValid ? 'border-red-600' : ''
				}`}
				placeholder='john@doe.com'
			/>
		);
	}

	return (
		<div className={`relative my-6 md:my-8 `}>
			{content}
			<label
				htmlFor={labelId}
				className='absolute left-4 duration-300 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-600 peer-focus:text-sm'>
				{label} {required && <span className='text-red-600'>*</span>}
			</label>
			{!isValid && <p className='text-red-600 p-1'>{errMessage}</p>}
		</div>
	);
};

export default FormRow;
