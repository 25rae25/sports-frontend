import React from 'react';
import Sidebar from '../Siderbar';
import ImagePicker from '../ImagePicker/ImagePicker';
import HomeImage from '../../commons/image/home.jpg';

const Home = () => {
	return (
		<Sidebar>
			<img src={HomeImage} alt="" />
		</Sidebar>
	)
}

export default Home;