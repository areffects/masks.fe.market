import Sidebar from 'src/components/Sidebar'
import { withTranslation } from 'i18n'
import { WithTranslation } from 'next-i18next'
import Button from 'src/components/Button'
import { useState } from 'react'
import CreateEffectModal from 'src/components/Modals/CreateEffect'
import { useCreateProduct, useGetProducts } from 'src/lib/gqls/products/hooks'
import SearchBlock from 'src/components/SearchBlock'
import Wrapper from 'src/components/Settings/Wrapper'
import HeaderText from 'src/components/Settings/H1Text'
import ContentWrapper from 'src/components/Settings/ContentWrapper'

const Effects: React.FC<WithTranslation> = () => {
	const [visibleCreate, setVisibleCreate] = useState(false)
	const { createProduct, loading } = useCreateProduct()
	const { loading: loadingGetProducts, data } = useGetProducts()
	const openCreateModal = () => {
		setVisibleCreate(true)
	}
	const handleOk = (values: any) => {
		createProduct({
			variables: values,
		})
		setVisibleCreate(false)
	}
	const handleCancel = () => {
		setVisibleCreate(false)
	}
	// console.log('data :>> ', data)
	return (
		<Wrapper>
			<Sidebar />
			<ContentWrapper>
				<HeaderText>Effects: </HeaderText>
				<SearchBlock>
					<Button onClick={openCreateModal}>ADD NEW</Button>
					<Button>DELETE</Button>
				</SearchBlock>
				<div>
					{!loadingGetProducts ? (
						data &&
						data.findAllUsersProducts.map(({ name, type }: any, index: number) => (
							<div key={index}>
								<div>{name}</div>
								<div>{type}</div>
							</div>
						))
					) : (
						<div>Loading...</div>
					)}
				</div>
			</ContentWrapper>
			<CreateEffectModal
				loading={loading}
				handleCancel={handleCancel}
				handleOk={handleOk}
				visibleCreate={visibleCreate}
			/>
		</Wrapper>
	)
}
export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}
export default withTranslation('common')(Effects)
