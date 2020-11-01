import { DocumentNode } from 'graphql'
import { normalizeJson } from 'src/utils/file'
import { getGqlString } from 'src/utils/gql'

export const createFileFormData = (file: File, gql: DocumentNode): FormData => {
	const formdata = new FormData()
	const gqlD = normalizeJson(getGqlString(gql))
	formdata.append('operations', `{ "query": "${gqlD}", "variables": { "file": [null] } }`)
	formdata.append('map', '{ "0": ["variables.file"] }')
	formdata.append('0', file, file.name)
	return formdata
}
