import React, { useState } from 'react';
import CardPortfolio from './CardPortfolio';
import dataPortfolio from './ApiPortfolio';

// http://web-profile.free.beeceptor.com/projects

const Portfolio = () => {
	const [project, setProject] = useState(dataPortfolio);
	const [active, setActive] = useState('All');

	// useEffect(() => {
	//     axios.get("http://web-profile.free.beeceptor.com/projects")
	//         .then(res => {
	//             console.log(res.data);
	//             project(res.data)
	//         })
	// }, [])

	const handleFilterCat = (name) => {
		const new_array = dataPortfolio.filter((portProject) =>
			portProject.category.includes(name)
		);
		setProject(new_array);
		setActive(name);
	};

	return (
		<section className='bg-gray-100 body-font' id='porfolio'>
			<div className='container px-12 py-20 h-auto mx-auto'>
				<div className='flex flex-col text-center w-full mb-12'>
					<h2 className='md:text-xl text-2xl text-third font-primary font-bold mb-1'>
						My Project
					</h2>
					<h1 className='md:text-4xl text-5xl font-primary text-primary font-bold mb-4'>
						Recent Works
					</h1>
					<div className='flex w-fdivl justify-center mt-6'>
						<button
							className={`px-6 py-2 text-sans  border-2 rounded text-third border-third cursor-pointer focus:border-third hover:bg-third hover:text-second ${
								active === 'All' && 'project_active'
							}`}
							onClick={() => {
								setProject(dataPortfolio);
								setActive('All');
							}}>
							All
						</button>
						<button
							className={`px-6 py-2 text-sans  border-2 rounded text-third border-third cursor-pointer focus:border-third hover:bg-third hover:text-second ml-4 ${
								active === 'website' && 'project_active'
							}`}
							onClick={() => handleFilterCat('website')}>
							Website
						</button>
						<button
							className={`px-6 py-2 text-sans  border-2 rounded text-third border-third cursor-pointer focus:border-third hover:bg-third hover:text-second ml-4 ${
								active === 'design' && 'project_active'
							}`}
							onClick={() => handleFilterCat('design')}>
							Design
						</button>
						<button
							className={`px-6 py-2 text-sans  border-2 rounded text-third border-third cursor-pointer focus:border-third hover:bg-third hover:text-second ml-4 ${
								active === 'pwa' && 'project_active'
							}`}
							onClick={() => handleFilterCat('pwa')}>
							PWA
						</button>
					</div>
				</div>
				<div className='flex flex-wrap -m-4'>
					{project.map((project) => (
						<CardPortfolio key={project.name} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
