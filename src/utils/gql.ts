import { DocumentNode } from 'graphql'

export const getGqlString = (doc: DocumentNode): string => doc?.loc?.source?.body || ''
