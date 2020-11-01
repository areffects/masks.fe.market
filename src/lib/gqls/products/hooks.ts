import { useMutation, useQuery } from '@apollo/react-hooks'
import { GRAPHQL_URI } from 'src/utils/config'
import { globalNotify } from 'src/utils/notifications'
import { CREATE_PRODUCT, GET_PRODUCTS, UPLOAD_FILE_USERS_PRODUCTS_SCREENSHOTS } from './query'
import { request } from 'src/utils/http'
import { createFileFormData } from 'src/helpers/file'

export const useCreateProduct = (): any => {
	const [createProduct, { loading }] = useMutation(CREATE_PRODUCT, {
		onCompleted() {
			globalNotify({ type: 'success', header: 'Created new product!' })
		},
	})
	return { createProduct, loading }
}

export const useGetProducts = (): any => {
	return useQuery(GET_PRODUCTS, {
		onCompleted() {
			// globalNotify({ type: 'success', header: 'Created new product!' })
		},
	})
}

export const uploadScreenshotFile = async ({ file }: { file: File }): Promise<any> => {
	const body = createFileFormData(file, UPLOAD_FILE_USERS_PRODUCTS_SCREENSHOTS)
	return request({ uri: GRAPHQL_URI, method: 'POST', body })
}

export const useUploadProductScreenshotFile = (): any => {
	const [uploadFile, { loading }] = useMutation(UPLOAD_FILE_USERS_PRODUCTS_SCREENSHOTS, {
		// variables: { file },
		onCompleted() {
			globalNotify({ type: 'success', header: 'Upload screenshot!' })
		},
	})
	return { uploadFile, loading }
}
