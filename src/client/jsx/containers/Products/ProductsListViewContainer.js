import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ProductsListViewComponent from '../../components/Products/ProductsListViewComponent'

class ProductsListViewContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<ProductsListViewComponent />
		)
	}
}

export default ProductsListViewContainer