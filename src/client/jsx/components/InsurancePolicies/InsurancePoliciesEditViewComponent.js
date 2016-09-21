import {Link} from 'react-router';
import React from 'react';

const InsurancePoliciesEditViewComponent = (props) => {
    const { fields: {policy_name, policy_value, terms, coverage, not_covered}, handleSubmit } = props
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Insurance Policies</h1>
                </div>
            </div>
            <p>
                <button type="button" className="btn btn-primary">Save</button>
                {" "}
                <Link className="btn btn-default" to="/admin/insurance-policies">Back</Link>
            </p>
            <div className="row">
                <div className="col col-lg-6">
                    <form>
                        <div className="form-group">
                            <label>Policy name</label>
                            <input type="text" className="form-control" {...policy_name}/>
                        </div>
                        <div className="form-group">
                            <label>Policy value</label>
                            <input type="text" className="form-control" {...policy_value}/>
                        </div>
                        <div className="form-group">
                            <label>Terms</label>
                            <textarea className="form-control" rows="3" {...terms}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Coverage</label>
                            <textarea className="form-control" rows="3" {...coverage}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Not covered</label>
                            <textarea className="form-control" rows="3" {...not_covered}></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default InsurancePoliciesEditViewComponent;