'use strict'

import AuthRoute from './auth.routes'
import CategoriesRoute from './categories.routes'
import CompaniesRoute from './companies.routes'
import FilesRoute from './files.routes'
import PoliciesRoute from './policies.routes'
import PolicyItemsRoute from './policy_items.routes'
import QuotesRoute from './quotes.routes'
import RolesRoute from './roles.routes'
import UsersRoute from './users.routes'
import ContentsRoute from './contents.routes'

export default function(app) {
	app.use('/api/', AuthRoute)
    app.use('/api/categories', CategoriesRoute)
	app.use('/api/companies', CompaniesRoute)
	app.use('/api/files', FilesRoute)
    app.use('/api/policies', PoliciesRoute)
    app.use('/api/policy-items', PolicyItemsRoute)
    app.use('/api/quotes', QuotesRoute)
    app.use('/api/roles', RolesRoute)
    app.use('/api/users', UsersRoute)
    app.use('/api/contents', ContentsRoute)
}   