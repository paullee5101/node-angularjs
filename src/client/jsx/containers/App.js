import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Login from './LoginCard'
import NavbarComponent from '../components/NavbarComponent'
import FooterContainer from '../containers/Shared/FooterContainer'

class App extends Component {
    
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
                    <NavbarComponent />
                    <div className="clearfix"/>
                    <section className="col col-sm-12" id="portal-section">
                        <div className="row">
                            { this.props.children }
                        </div>
                    </section>
                    <div className="clearfix"/>
                </div>
                <div className="clearfix"/>
                <FooterContainer />
            </div>
        )
    }
}

export default connect()(App);