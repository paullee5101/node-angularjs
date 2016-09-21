import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import QuotesListViewComponent from '../../components/Quotes/QuotesListViewComponent'

class QuotesListViewContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<QuotesListViewComponent />
		)
	}
}

export default QuotesListViewContainer