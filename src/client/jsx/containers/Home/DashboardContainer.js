import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import WorkInProgressComponent from '../../components/Shared/WorkInProgressComponent'
class DashboardContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {

	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<div>
				<div className="row">
		            <div className="col-lg-12">
		                <h1 className="page-header">Dashboard</h1>
		            </div>
		        </div>
		        <WorkInProgressComponent />
		    </div>
		)
	}
}

export default DashboardContainer 