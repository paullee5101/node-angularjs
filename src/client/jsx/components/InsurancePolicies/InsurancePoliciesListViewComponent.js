import {Link} from 'react-router';
import React from 'react';

const InsurancePoliciesListViewComponent = (props) => (
    <div>
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">Insurance Policies</h1>
            </div>
        </div>
        <p>
            <Link className="btn btn-primary" to="/admin/insurance-policies/edit">Add Policy</Link>
            {" "}
            <button type="button" className="btn btn-danger">Remove Policy</button>
        </p>
        <table className="table table-stripped">
            <thead>
                <tr>
                    <th width="3%"></th>
                    <th width="57%">Policy name</th>
                    <th width="40%">Policy value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td><Link to="/admin/insurance-policies/edit">Awesome Policy A</Link></td>
                    <td>RM 100</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default InsurancePoliciesListViewComponent;