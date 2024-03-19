import React from 'react';

type BurgerProps = {
	isNavOpen: boolean;
	isOpen: string;

};

export default function BurgerItem({
	isNavOpen,
	isOpen,
	
}: BurgerProps) {
	return (
		<div
			className={` h-1 w-10 rounded-xl  bg-white duration-700 ${
				isNavOpen ? isOpen : ''
			}`}
		/>
	);
}
