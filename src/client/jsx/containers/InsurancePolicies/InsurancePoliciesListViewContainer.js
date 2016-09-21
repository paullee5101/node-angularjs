import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import InsurancePoliciesListViewComponent from '../../components/InsurancePolicies/InsurancePoliciesListViewComponent'

class InsurancePoliciesListViewContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<InsurancePoliciesListViewComponent />
		)
	}
}

export default InsurancePoliciesListViewContainer