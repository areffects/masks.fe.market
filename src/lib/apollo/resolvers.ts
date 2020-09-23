// import { ResolverContext } from './index'
// import { QueryResolvers } from './viewer.gql'

const Query = {
	viewer(): any {
		return { id: String(1), name: 'John Smith', status: 'cached' }
	},
}

export default { Query }
