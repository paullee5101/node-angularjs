import React from 'react'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'  

// Import components
import AdminApp from './containers/AdminApp'
import DashboardContainer from './containers/Home/DashboardContainer'
import InsurancePoliciesListViewContainer from './containers/InsurancePolicies/InsurancePoliciesListViewContainer'
import InsurancePoliciesEditViewContainer from './containers/InsurancePolicies/InsurancePoliciesEditViewContainer'
import QuotesListViewContainer from './containers/Quotes/QuotesListViewContainer'
import ProductsListViewContainer from './containers/Products/ProductsListViewContainer'
import ProductsEditViewContainer from './containers/Products/ProductsEditViewContainer'
import PageNotFoundContainer from './containers/Shared/PageNotFoundContainer'

import PortalHomeContainer from './containers/Home/PortalHomeContainer'
import ProductsPageContainer from './containers/Products/ProductsPageContainer'

import App from './containers/App'

const routes = (props = {}) => {
  
  let history = browserHistory
  
  if(props.store) {
    history = syncHistoryWithStore(browserHistory, props.store)
  }
  
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/admin" component={AdminApp}>
        <IndexRoute component={DashboardContainer} />
        <Route path="/admin/insurance-policies" component={InsurancePoliciesListViewContainer} />
        <Route path="/admin/insurance-policies/edit(/:item_id)" component={InsurancePoliciesEditViewContainer} />
        <Route path="/admin/quotes" component={QuotesListViewContainer} />
        <Route path="/admin/products" component={ProductsListViewContainer} />
        <Route path="/admin/products/edit(/:policy_id)" component={ProductsEditViewContainer}/>
        <Route path="*" component={PageNotFoundContainer} />
      </Route> 
      <Route path="/"  component={App}>
        <IndexRoute component={PortalHomeContainer} />
        <Route path="/products/:product_name" component={ProductsPageContainer}/>
        <Route path="*" component={PageNotFoundContainer} />
      </Route>
    </Router>
  )
}

export default routes