import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchHeroBannerRequest} from '../../api/portalContents'
import PortalBannerComponent from '../../components/Home/PortalBannerComponent'

class PortalBannerContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {
		
	}

	componentWillMount() {
		this.props.dispatchGetBanners();
	}

	render() {
		return(
			<PortalBannerComponent heroBannerList={this.props.heroBannerList}/>
		)
	}
}

const mapStateToProps = (state) => ({
	heroBannerList: state.portalContents.heroBannerList.payload
})

const mapDispatchToProps = (dispatch, props) => ({
	dispatchGetBanners: ()=> {
		dispatch(fetchHeroBannerRequest());
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(PortalBannerContainer)