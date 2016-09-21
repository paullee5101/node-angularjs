import {Link} from 'react-router';
import React from 'react';

const PortalSignInComponent = (props) => (
    <form>
        <div className="form-group">
        	<label>Email</label>
        	<input type="text" className="form-control"/>
        </div>
        <div className="form-group">
        	<label>Password</label>
        	<input type="password" className="form-control"/>
        </div>
        <div className="form-gorup">
        	<button type="submit" className="btn btn-primary btn-block">Sign in</button>
        </div>
    </form>
)

export default PortalSignInComponent;