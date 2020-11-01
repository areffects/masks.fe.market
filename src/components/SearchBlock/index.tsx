import styled from 'styled-components'
import Icon from 'src/components/Icon/Icon'
import { Input } from 'antd'

const SearchWrapper = styled.div`
	display: flex;
	& > button {
		margin-left: 1rem;
	}
`
const SearchBlock: React.FC = ({ children }) => {
	return (
		<SearchWrapper>
			<Input prefix={<Icon name="search" />} width="100%" />
			{children}
		</SearchWrapper>
	)
}

export default SearchBlock
