import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CategoriesListItemComponent from '../../components/categories/CategoriesListItemComponent';
import {fetchCategoriesRequest} from '../../api/categories';
import {Link} from 'react-router';
//import {getCategoriesList} from '../../actions/CategoriesActions'

//Bug finding

class CategoriesListViewContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.filterCategory = this.filterCategory.bind(this);
        this.taxonomy = this.props.location.query.taxonomy;
    }
    
    componentDidMount() {
        this.props.getCategories(this.props.location.query.taxonomy);
    }
    
    filterCategory(){
        let taxonomy = this.refs.taxonomy.value;
        
        if(taxonomy){
            this.context.router.push('/categories?taxonomy='+this.refs.taxonomy.value);
        } else {
            this.context.router.push('/categories');
        }
        this.props.getCategories(this.refs.taxonomy.value);
    }
    
    render() {
        return (
            <div className="container-fluid">
            <h1 className="page-header">Administration > Categories</h1>
                <div className="row">
                    <div className="table-responsive">
                        <div className="col-md-12">
                        <Link to="/categories/edit" className="btn btn-primary">Create Category</Link>
                        <div className="clearfix"></div>
                            <input type="text" className="col-md-6" ref="taxonomy" placeholder="Type in taxonomy..." onKeyUp={this.filterCategory} defaultValue={ this.taxonomy ? this.taxonomy : "" }/>
                        <div className="clearfix"></div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Parent</th>
                                        <th>Taxonomy</th>
                                    </tr>
                                </thead>
                                <CategoriesListItemComponent categories={this.props.categories}/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CategoriesListViewContainer.fetchData = ({ store }) => store.dispatch(fetchCategoriesRequest())

const mapStateToProps = (state) => ({
    categories: state.categories.categoriesList.payload
})

const mapDispatchToProps = (dispatch, props) => ({
    getCategories: (taxonomy) => {
        dispatch(fetchCategoriesRequest(taxonomy))
    }
})

CategoriesListViewContainer.contextTypes = {
    router: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListViewContainer);
