import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoriesEditFormComponent from '../../components/categories/CategoriesEditFormComponent' 
import { reduxForm } from 'redux-form'
import { createCategoryRequest, updateCategoryRequest, fetchCategoryInfoRequest, fetchCategoriesRequest} from '../../api/categories'
import { resetCategoryForm, categoryFormSubmitSuccess } from '../../actions/CategoriesActions'
import { Router, browserHistory } from 'react-router'

class CategoriesEditViewContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {visibility: 'hide'}
    }
    
    componentWillMount() {
        this.props.dispatch(resetCategoryForm())
        
    }
    
    componentDidMount() {
        if(this.props.params.category_id) {
            this.props.dispatch(fetchCategoryInfoRequest(this.props.params.category_id)); 
        }
        this.props.dispatch(fetchCategoriesRequest());
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.category.isAction==true) {
            this.setState({visibility:''})
            setTimeout(() => { 
                this.hideStatus()
                this.props.dispatch(categoryFormSubmitSuccess())
            }, 3000)
            
        }
    }
    
    hideStatus() {
        this.setState({visibility:'hide'})
    }
    
    render() {
        let pageHeader 
        
        if(this.props.fields.title.value) {
            pageHeader =  <h1 className="page-header">{ this.props.fields.title.value }</h1>
        }
        else {
            
            if(this.props.params.category_id) {
                pageHeader =  <h1 className="page-header"></h1>
            } else {
                pageHeader =  <h1 className="page-header">Add new category</h1>
            }
        }
        
        return (
            <div className="container-fluid">
                {pageHeader}
                <CategoriesEditFormComponent fields={this.props.fields} handleSubmit={this.props.handleSubmit} dispatchCategory={this.props.dispatchCategory} {...this.props} visibility={this.state.visibility}/>
            </div>
        )
    }
}

CategoriesEditViewContainer.fetchData = ({ store, params }) => store.dispatch(fetchCategoryInfoRequest(params.category_id))

const mapStateToProps = (state) => ({
    categories: state.categories.categoriesList,
    category: state.categories.categoryInfo,
    initialValues: state.categories.categoryInfo.payload
    
})

const mapDispatchToProps = (dispatch, props) => ({
    dispatchCategory: (values) => {
        !props.params.category_id ? dispatch(createCategoryRequest(values)) : dispatch(updateCategoryRequest(values, props.params.category_id))
        //browserHistory.push('/categories')
    }
})

CategoriesEditViewContainer = reduxForm({
    form: 'CategoryEditForm',
    fields: ['title', 'parent_id', 'taxonomy']
})(CategoriesEditViewContainer)



export default connect(mapStateToProps, mapDispatchToProps)(CategoriesEditViewContainer)