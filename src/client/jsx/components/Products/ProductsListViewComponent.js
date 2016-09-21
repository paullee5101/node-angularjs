import {Link} from 'react-router';
import React from 'react';

const ProductsListViewComponent = (props) => (
    <div>
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">Products management</h1>
            </div>
        </div>
        <p>
            <Link className="btn btn-primary" to="/admin/products/edit">Add Product</Link>
            {" "}
            <button type="button" className="btn btn-danger">Remove Product</button>
        </p>
        <table className="table table-stripped">
            <thead>
                <tr>
                    <th width="3%"></th>
                    <th width="97%">Product name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td><Link to="/admin/products/edit">Awesome Policy A</Link></td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default ProductsListViewComponent;