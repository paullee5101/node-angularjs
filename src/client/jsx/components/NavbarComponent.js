import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import PortalSignInComponent from './Users/PortalSignInComponent'
import PortalSignUpComponent from './Users/PortalSignUpComponent'

class NavbarComponent extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {

    }

    openSignInModal() {
        $("#signin-modal").modal({show:true})
    }

    openSignUpModal() {
        $("#signup-modal").modal({show:true})
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation" id="portal-navbar">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span> 
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand page-scroll" to="/"><img src="/assets/images/LetsCompare_LOGO.png" className="logo"/> Let's Compare</Link>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right top-nav">
                                {/*<li className="dropdown"><Link to="/">Welcome, John Doe</Link></li>*/}
                                <li className="dropdown"><a onClick={()=>this.openSignInModal()}>Sign in</a></li>
                                <li className="dropdown"><a onClick={()=>this.openSignUpModal()}>Sign up</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="modal fade in" id="signin-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Sign in</h4>
                            </div>  
                            <div className="modal-body">
                                <PortalSignInComponent />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade in" id="signup-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Sign up</h4>
                            </div>  
                            <div className="modal-body">
                                <PortalSignUpComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavbarComponent
