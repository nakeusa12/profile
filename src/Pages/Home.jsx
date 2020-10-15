import React, { Suspense } from 'react';

import Navbar from '../Components/molecules/Navbar/Navbar';
import Footer from '../Components/molecules/Footer/Footer';
import Loading from '../Components/molecules/Loading/Loading';

const Hero = React.lazy(() => import('../Components/molecules/Hero/Hero'));
const Swipe = React.lazy(() => import('../Components/molecules/Swipe/Swipe'));
const Service = React.lazy(() =>
	import('../Components/molecules/Service/Service')
);
const Portfolio = React.lazy(() =>
	import('../Components/molecules/Portfolio/Portfolio')
);
const Contact = React.lazy(() =>
	import('../Components/molecules/Contact/Contact')
);

const Home = () => {
	return (
		<div className='max-width'>
			<Suspense fallback={<Loading />}>
				<Navbar />
				<Hero />
				<Swipe />
				<Service />
				<Portfolio />
				<Contact />
				<Footer />
			</Suspense>
		</div>
	);
};

export default Home;
