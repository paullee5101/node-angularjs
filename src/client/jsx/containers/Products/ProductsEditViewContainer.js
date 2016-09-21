import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'
import ProductsEditViewComponent from '../../components/Products/ProductsEditViewComponent'

class ProductsEditViewContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<ProductsEditViewComponent fields={this.props.fields} handleSubmit={this.props.handleSubmit}/>
		)
	}
}

ProductsEditViewContainer = reduxForm({
	form: "ProductsEditViewComponent",
	fields: [
		"active",
		"category_id",
		"policy_details",
		"legal_details",
		"terms"
	]
})(ProductsEditViewContainer)

export default connect()(ProductsEditViewContainer)