import {Link} from 'react-router';
import React, {Component} from 'react';

class PortalSignUpComponent extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        const Flatpickr = require('flatpickr');       
        let issueDate = new Flatpickr(document.getElementById('birthday'), {
           dateFormat:"M d, Y"
        })     
    }

    render () {
        return (
            <form>
                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                	<label>Email</label>
                	<input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                	<label>Password</label>
                	<input type="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select className="form-control">
                        <option value="">Choose one...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Date of birth</label>
                    <input type="text" className="form-control" id="birthday"/>
                </div>
                <div className="form-gorup">
                	<button type="submit" className="btn btn-primary btn-block">Sign up</button>
                </div>
            </form>
        )
    }
}

export default PortalSignUpComponent;