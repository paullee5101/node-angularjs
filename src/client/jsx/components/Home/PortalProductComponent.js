import {Link} from 'react-router'
import React from 'react'
import _ from 'lodash'

const PortalProductComponent = (props) => {
    let bannerList = props.productBannerList
    let travelBanner = _.get(_.find(bannerList, ['post_title','travel']), "banner")
    let personalAccidentsBanner = _.get(_.find(bannerList, ['post_title','personal-accidents']), "banner")
    let lifeInsuranceBanner = _.get(_.find(bannerList, ['post_title','life-insurance']), "banner")
    
    return (
        <div className="row" id="product-grids">
            <Link to="/products/travel">
        		<div className="col col-xs-12 col-md-4 grid" style={{backgroundImage:"url("+travelBanner+")"}}>
        			<label>
                        <i className="fa fa-plane fa-5x" aria-hidden="true"></i>
                        <h1>Travel</h1>
                    </label>
        		</div>
            </Link>
            <Link to="/products/personal-accidents">
        		<div className="col col-xs-12 col-md-4 grid" style={{backgroundImage:"url("+personalAccidentsBanner+")"}}>
                    <label>
                        <i className="fa fa-plus-square fa-5x" aria-hidden="true"></i>
                        <h1>Personal Accidents</h1>
                    </label>
        		</div>
            </Link>
            <Link to="/products/life-insurance">
        		<div className="col col-xs-12 col-md-4 grid" style={{backgroundImage:"url("+lifeInsuranceBanner+")"}}>
                    <label>
                        <i className="fa fa-heartbeat fa-5x" aria-hidden="true"></i>
                        <h1>Life Insurance</h1>
                    </label>
        		</div>
            </Link>
    	</div>
    )
}

export default PortalProductComponent;