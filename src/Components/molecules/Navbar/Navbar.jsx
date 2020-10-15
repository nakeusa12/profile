import React, { useState } from 'react';
import { NavItems } from './NavItems';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<header
			className={`${
				navbar ? 'bg-third shadow-md' : 'lg:bg-transparent bg-third'
			} fixed z-10 w-full lg:py-2 py-6 lg:px-20 px-6 flex flex-wrap items-center`}>
			<div className='flex-1 flex justify-between items-center'>
				<a
					href='!#'
					className={`text-2xl font-bold tracking-tight ${
						navbar ? 'text-second' : 'lg:text-primary text-second'
					}`}
					onClick={toggleHome}>
					<h1>Nakeusa</h1>
				</a>
			</div>

			<div className='lg:hidden block' onClick={toggle}>
				<svg
					className='fill-current text-second cursor-pointer '
					xmlns='http://www.w3.org/2000/svg'
					width='30'
					height='30'
					viewBox='0 0 20 20'>
					<title>menu</title>
					<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
				</svg>
			</div>

			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} lg:flex lg:items-center lg:w-auto w-full`}
				id='menu'>
				<nav>
					<ul className='lg:flex items-center justify-between text-base text-gray-700 pt-3'>
						{NavItems.map((item, index) => (
							<li key={item.title}>
								<a
									className={item.className}
									href={item.url}
									duration={500}
									exact='true'
									offset={-100}
									onClick={toggle}>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
