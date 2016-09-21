import {Link} from 'react-router';
import React from 'react';
import Slider from 'react-slick';
import PortalMenuComponent from './PortalMenuComponent'

const NextArrow = (props)=> (
	<div {...props} style={{fontSize:"20pt", color:"#ffffff", position:"absolute", right:"20px", zIndex:"100", top:"calc(50vh - 29px)", cursor:"pointer"}}> <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i> </div>
)

const PrevArrow = (props)=> (
	<div {...props} style={{fontSize:"20pt", color:"#ffffff", position:"absolute", left:"20px", zIndex:"100", top: "calc(50vh - 29px)", cursor:"pointer"}}> <i className="fa fa-angle-left fa-lg" aria-hidden="true"></i> </div>
)

const PortalBannerComponent = (props) => {
	let settings = {
		dots: false,
		infinite: true,
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesTScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	}
	let heroBanner = props.heroBannerList
    return (
    	<div>
	    	<PortalMenuComponent />
	    	<Slider {...settings} id="hero-banner" style={{width:"100%"}}>
	    		{
	    			props.heroBannerList.map((banner, index) => 
				        <div style={{backgroundImage: 'url(' + banner.banner + ')'}} className="col col-xs-12 banner" key={index}></div>
			        )
			    }
	        </Slider>
        </div>
    )
}

export default PortalBannerComponent;