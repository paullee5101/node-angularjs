import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PortalBannerContainer from './PortalBannerContainer'
import PortalArticleComponent from '../../components/Home/PortalArticleComponent'
import PortalProductContainer from '../../containers/Home/PortalProductContainer'
import FaqContainer from '../Pages/FaqContainer'

class PortalHomeContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<div>
		        <PortalBannerContainer />
		        <PortalProductContainer />
		        <PortalArticleComponent />
		        <FaqContainer />
		    </div>
		)
	}
}

export default PortalHomeContainer