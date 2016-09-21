import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, BrowserHistory } from 'react-router'
import PortalSignInComponent from '../../components/Users/PortalSignInComponent'

class PortalSignInContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<PortalSignInComponent />
		)
	}
}

export default PortalSignInContainer