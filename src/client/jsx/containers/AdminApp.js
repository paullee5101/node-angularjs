import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Login from './LoginCard'
import AdminNavbarComponent from '../components/AdminNavbarComponent'

class AdminApp extends Component {
    
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div id="wrapper">
                <AdminNavbarComponent />
                <div id="page-wrapper">
                    <div className="container-fluid">
                        { this.props.children }
                    </div>
                </div>
            </div>
            
        )
    }
}

export default connect()(AdminApp);