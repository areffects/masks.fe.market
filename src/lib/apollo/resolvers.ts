import { QueryResolvers } from './viewer.graphql'
import { ResolverContext } from './index'

const Query: Required<QueryResolvers<ResolverContext>> = {
	viewer(_parent, _args, _context, _info) {
		return { id: String(1), name: 'John Smith', status: 'cached' }
	},
}

export default { Query }
