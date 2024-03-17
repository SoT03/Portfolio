import React from 'react'

type BurgerProps = {
    isNavOpen: boolean,
    isOpen: string,
    isClosed:string
}

export default function BurgerItem({isNavOpen, isOpen, isClosed}: BurgerProps) {
  return (
    <div
					className={`absolute  left-0 h-1.5 w-10 rounded-xl bg-black duration-500 ${
						isNavOpen ? isOpen : isClosed
					}`}
				/>
  )
}
