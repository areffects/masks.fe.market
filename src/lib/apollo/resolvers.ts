import { ResolverContext } from './index'
import { QueryResolvers } from './viewer.graphql'

const Query: Required<QueryResolvers<ResolverContext>> = {
	viewer(_parent: any, _args: any, _context: any, _info: any) {
		return { id: String(1), name: 'John Smith', status: 'cached' }
	},
}

export default { Query }
