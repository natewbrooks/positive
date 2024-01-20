import React, { useState, useRef } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useEffect } from 'react';

export default function NavDropdownItem({
	index,
	items,
	title,
	hash,
	isHashActive,
	isBurgerNavShown,
	setActiveHash,
	hasScrolled,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const closeTimer = useRef(null);

	const startCloseTimer = () => {
		closeTimer.current = setTimeout(() => {
			setIsOpen(false);
		}, 3000);
	};

	const stopCloseTimer = () => {
		clearTimeout(closeTimer.current);
	};

	const toggleDropdown = (bool) => {
		setIsOpen(bool);
		if (bool) {
			stopCloseTimer();
		} else {
			startCloseTimer();
		}

		console.log(bool);
	};

	return (
		<>
			<div
				onMouseEnter={stopCloseTimer}
				onMouseLeave={startCloseTimer}
				className='hidden lg:block w-full relative overflow-visible'>
				<AnchorLink
					onAnchorLinkClick={() => toggleDropdown(!isOpen)}
					to={hash}
					className={`transition-all duration-[300ms] flex w-full h-full items-center sans text-dark text-md px-2 ${
						hasScrolled ? 'py-5' : 'py-8'
					}  border-b-2 text-nowrap ${
						isHashActive(hash)
							? ' border-four hover:border-four'
							: 'border-light hover:border-four/50'
					}`}>
					{title}
					<MdOutlineKeyboardArrowDown
						className={`relative left-1 top-0 ${
							isOpen ? 'rotate-0' : 'rotate-180'
						}  transition-all duration-300`}
					/>
				</AnchorLink>
				{isOpen && (
					<div
						onMouseEnter={stopCloseTimer}
						onMouseLeave={() => toggleDropdown(false)}
						className='my-1 w-full flex flex-col absolute bg-dark border-t-2 border-light/10 rounded-md'>
						{items.map(({ label, href }, index) => (
							<AnchorLink
								key={index}
								to={href}
								title={label}
								className='text-center px-4 py-2 text-sm text-light sans border-b-2 border-light/10 hover:border-four'>
								{label}
							</AnchorLink>
						))}
					</div>
				)}
			</div>

			{/* MOBILE MENU */}

			<div
				onMouseEnter={stopCloseTimer}
				onMouseLeave={startCloseTimer}
				onClick={() => toggleDropdown(!isOpen)}
				key={'#' + hash}
				title={title}
				className={`lg:hidden relative bg-dark border-b-2 ${
					hasScrolled ? 'py-5' : 'py-8'
				} px-4 text-light border-light/10  text-sm flex w-full justify-center items-center text-center ${
					isHashActive(hash) ? 'border-b-primary hover:border-b-primary' : ''
				} `}>
				<span className={`text-center sans xbold text-nowrap`}>{title.toUpperCase()}</span>
				<MdOutlineKeyboardArrowDown
					className={`w-[18px] h-[18px] relative left-1 top-0 ${
						isOpen ? 'rotate-0' : 'rotate-180'
					}  transition-all duration-300`}
				/>
				{/* DROPDOWN MENU */}
				<div
					onMouseEnter={stopCloseTimer}
					onMouseLeave={() => toggleDropdown(false)}
					className={`w-full absolute bottom-0 ${
						isOpen ? 'translate-y-full' : ''
					} bg-dark/90 -z-50 rounded-b-md transform transition-transform duration-[600ms]`}>
					{items.map(({ label, href }, index) => (
						<AnchorLink
							key={index}
							to={href}
							title={label}
							onAnchorLinkClick={() => {
								setActiveHash('#' + label.toLowerCase());
								toggleDropdown(false);
							}}
							className='sans xbold p-4 text-sm text-light flex justify-center items-center border-b-2 border-light/10 hover:border-four'>
							{label.toUpperCase()}
						</AnchorLink>
					))}
				</div>
			</div>
		</>
	);
}
