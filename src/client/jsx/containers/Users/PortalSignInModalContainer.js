import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, BrowserHistory } from 'react-router'

class PortalSignInModalContainer extends Component {
	constructor(props, context) {
		super(props, context)
	}

	componentDidMount() {
		$(".modal").modal({show:true})
		$(".modal").on('hide.bs.modal', ()=> {
			browserHistory.push('/');
		})
	}

	componentWillMount() {
	       
	}

	render() {
		return(
			<div className="modal fade in" id="signin-modal">
				<div className="modal-dialog modal-sm">
					<div className="modal-cell">
						<div className="modal-content">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(PortalSignInModalContainer)