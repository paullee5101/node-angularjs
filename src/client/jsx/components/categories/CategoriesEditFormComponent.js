import React, { Component } from 'react'
import {Link} from 'react-router'


const CategoriesEditFormComponent = (props) => {
    
    const { fields: { title, parent_id, taxonomy }, handleSubmit } = props;
        
    return (
            <form onSubmit={handleSubmit(props.dispatchCategory)}>
            <input type="submit" value="Save" className="btn btn-primary mr8"/>
            <Link to="/categories" className="btn btn-secondary">Back</Link>
            <span className={ `form-status ${props.visibility}` }>Saved...</span>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb24">Category details</h2>
                        <div className="form-group">
                            <label>Title </label>
                            <input type="text" className="col-xs-12" {...title} />
                        </div>
                        <div className="form-group">
                            <label>Parent </label>
                            <select className="col-xs-12" {...parent_id}>
                                <option value=" "></option>
                                {
                                    props.categories.payload.map(category => {
                                       return <option value={category.category_id} key={category.category_id}>{category.title}</option>  
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                        <label>Taxonomy</label>
                            <select className="col-xs-12" {...taxonomy}>
                                <option value="Product Series">Product Series</option>
                                <option value="Supplier Type">Supplier Type</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
    )
        
    
}



export default CategoriesEditFormComponent;