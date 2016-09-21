import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchProductBannerRequest} from '../../api/portalContents'
import PortalProductComponent from '../../components/Home/PortalProductComponent'

class PortalHomeContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
		this.props.dispatchGetProductBanners()
	}

	render() {
		return(
			<PortalProductComponent productBannerList={this.props.productBannerList}/>
		)
	}
}

const mapStateToProps = (state) => ({
	productBannerList: state.portalContents.productBannerList.payload
})

const mapDispatchToProps = (dispatch, props) => ({
	dispatchGetProductBanners: () => {
		dispatch(fetchProductBannerRequest());
	}	
})

export default connect(mapStateToProps, mapDispatchToProps)(PortalHomeContainer)