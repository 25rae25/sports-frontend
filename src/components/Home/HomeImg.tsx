import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components'
import Img1 from '../../commons/image/home.jpg'
import Img2 from '../../commons/image/home2.jpg'
import Img3 from '../../commons/image/home3.jpg'
import Img4 from '../../commons/image/home4.jpg'


const Image = styled.img `
	width: 80% !important;
	display: block !important;
	margin: 0 auto !important;
` 

const HomeImg = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	  };
	
	return(
		<Slider {...settings}>
			<Image src={Img1} alt="Image 1" />
			<Image src={Img2} alt="Image 2" />
			<Image src={Img3} alt="Image 3" />
			<Image src={Img4} alt="Image 4" />
		</Slider>
	)
}

export default HomeImg;