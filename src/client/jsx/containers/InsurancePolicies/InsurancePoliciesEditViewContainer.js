import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'
import InsurancePoliciesEditViewComponent from '../../components/InsurancePolicies/InsurancePoliciesEditViewComponent'

class InsurancePoliciesEditViewContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<InsurancePoliciesEditViewComponent fields={this.props.fields} handleSubmit={this.props.handleSubmit}/>
		)
	}
}

InsurancePoliciesEditViewContainer = reduxForm({
	form: "InsurancePoliciesEditViewComponent",
	fields: [
		"policy_name",
		"policy_value",
		"terms",
		"coverage",
		"not_covered"
	]
})(InsurancePoliciesEditViewContainer)

export default connect()(InsurancePoliciesEditViewContainer)