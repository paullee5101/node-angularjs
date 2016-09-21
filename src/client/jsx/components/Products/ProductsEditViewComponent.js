import {Link} from 'react-router';
import React from 'react';

const ProductsEditViewComponent = (props) => {
    const { fields: {active, category_id, policy_details, legal_details, terms}, handleSubmit } = props
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Products management</h1>
                </div>
            </div>
            <p>
                <button type="button" className="btn btn-primary">Save</button>
                {" "}
                <Link className="btn btn-default" to="/admin/products">Back</Link>
            </p>
            <div className="row">
                <div className="col col-lg-6">
                    <form>
                        <div className="form-group">
                            <label>Published</label>
                            <select className="form-control" {...active}>
                                <option value="y">Yes</option>
                                <option value="n">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select className="form-control" {...category_id}>
                                <option value="">Choose one...</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Policy details</label>
                            <textarea className="form-control" rows="3" {...policy_details}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Legal details</label>
                            <textarea className="form-control" rows="3" {...legal_details}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Terms</label>
                            <textarea className="form-control" rows="3" {...terms}></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ProductsEditViewComponent;