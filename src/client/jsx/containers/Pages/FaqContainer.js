import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import FaqComponent from '../../components/Pages/FaqComponent'

class FaqContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<section className="page-section">
		        <FaqComponent />
		    </section>
		)
	}
}

export default FaqContainer