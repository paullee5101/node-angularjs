import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PortalMenuComponent from '../../components/Home/PortalMenuComponent'

class PortalMenuContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<PortalMenuComponent />
		)
	}
}

export default PortalMenuContainer