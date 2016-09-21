import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Login extends Component {
    render() {
        return (
            <div className="card login-card centralize">
                <input type="email" className="col-xs-12" placeholder="Email"/>
                <input type="password" className="col-xs-12" placeholder="password"/>
                <Link to="/dashboard" onClick={(event) => this.handleSubmit(event)} className="btn btn-primary col-xs-12" >Login</Link>
            </div>
            
        )
    }
    
    handleSubmit(event) {
        //this.history.pushState(null, 'login');
    }
}

export default Login