import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import auth from './AuthReducer'
import categories from './CategoriesReducer'
import portalContents from './PortalContentsReducer'

const rootReducer = combineReducers({auth, categories, portalContents, form: formReducer, routing:routerReducer})

export default rootReducer