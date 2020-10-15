import React from 'react';
import {
	Hero,
	Swipe,
	Service,
	Portfolio,
	Contact,
	Footer,
	Navbar,
	// NavbarMobile,
} from '../Components';

const Home = () => {
	return (
		<div className='max-width'>
			{/* <NavbarMobile /> */}
			<Navbar />
			<Hero />
			<Swipe />
			<Service />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
