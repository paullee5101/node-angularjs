import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, BrowserHistory } from 'react-router'
import FooterComponent from '../../components/Shared/FooterComponent'

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
			<FooterComponent />
		)
	}
}

export default PageNotFoundContainer