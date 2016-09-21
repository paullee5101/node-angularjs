import {Link} from 'react-router';
import React from 'react';

const QuotesListViewComponent = (props) => (
    <div>
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">Quotes</h1>
            </div>
        </div>
        <table className="table table-stripped">
            <thead>
                <tr>
                    <th width="3%"></th>
                    <th width="57%">Policy name</th>
                    <th width="40%">Price</th>
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

export default QuotesListViewComponent;