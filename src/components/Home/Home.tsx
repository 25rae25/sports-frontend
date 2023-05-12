import React from 'react';
import Sidebar from '../Siderbar';
import HomeImage from './HomeImg';
import HomeDetail from './HomeDetail';

const Home = () => {
	return (
		<Sidebar>
			<HomeImage />
			<HomeDetail />
		</Sidebar>
	)
}

export default Home;