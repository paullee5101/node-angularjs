import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserHistory } from 'react-router';

class PageNotFoundContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<div className="jumbotron">
				<h1>404</h1>
				<p>Page Not Found</p>
				<p><Link to="/admin" className="btn btn-primary btn-lg">Back to home</Link></p>
			</div>
		)
	}
}

export default PageNotFoundContainer