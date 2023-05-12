import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components'


const HomeImgSlider = () => {
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
		<div></div>
	// 	<Slider {...settings}>
    //   <div>
    //     <Image src={Img1} alt="Image 1" />
    //   </div>
    //   <div>
    //     <Image src={Img2} alt="Image 2" />
    //   </div>
    //   <div>
    //     <img src={Img1} alt="Image 3" />
    //   </div>
    // </Slider>
	)
}

export default HomeImgSlider;