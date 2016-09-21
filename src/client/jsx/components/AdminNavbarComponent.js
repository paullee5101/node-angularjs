import React from 'react'
import { Link } from 'react-router'

const AdminNavbarComponent = (props) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/admin">Lets Compare</Link>
            </div>
            <ul className="nav navbar-right top-nav">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> John Smith <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav side-nav">
                    <li className="">
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    <li className="">
                        <Link to="/admin/products">Product Management</Link>
                    </li>
                    <li className="">
                        <Link to="/admin/insurance-policies">Insurance Policies</Link>
                    </li>
                    <li className="">
                        <Link to="/admin/quotes">Quotes</Link>
                    </li>
                    <li className="">
                        <Link to="/admin/report-builder">Report Builder</Link> 
                    </li>
                </ul>
            </div>
        </nav> 
    )
}

export default AdminNavbarComponent
