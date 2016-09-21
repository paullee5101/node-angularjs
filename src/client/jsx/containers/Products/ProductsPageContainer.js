import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ProductsPageComponent from '../../components/Products/ProductsPageComponent'

class ProductsPageContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<ProductsPageComponent />
		)
	}
}

export default ProductsPageContainer