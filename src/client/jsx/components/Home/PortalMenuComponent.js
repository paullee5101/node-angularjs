import {Link} from 'react-router';
import React from 'react';

const PortalMenuComponent = (props) => {
    return (
        <div className="col col-sm-12" id="insurance-categories-menu">
            <div className="row">
                <ul className="nav navbar-nav">
                    <li><Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                    <li><Link to="/"><i className="fa fa-plane" aria-hidden="true"></i> Travel</Link></li>
                    <li><Link to="/"><i className="fa fa-plus-square" aria-hidden="true"></i> Personal Accidents</Link></li>
                    <li><Link to="/"><i className="fa fa-heartbeat" aria-hidden="true"></i> Term Life</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default PortalMenuComponent;