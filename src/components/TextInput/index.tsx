import { useTranslation } from 'i18n'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { SmallErrorMessage } from '../ErrorMessage'
import Label from '../Label'

export const TextInputBlock = styled.input<{ errors: any }>`
	border: 1px solid #bdbdbd;
	box-sizing: border-box;
	border-radius: 0.4rem;
	padding: 0.7rem 1.2rem;
	outline: none;
	height: 3.4rem;
	font-size: 1.4rem;
	&::placeholder {
		color: ${({ theme }) => theme.color.gray};
	}
	&:disabled {
		color: ${({ theme }) => theme.color.gray};
	}
	${(props: any) => {
		if (props.errors) {
			return `border-color: ${props.theme.color.error}`
		}
		return ``
	}}
`

const WrapInput = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.6rem;
`

import { IProps } from './types'

const TextInput = ({
	name,
	register,
	disabled = false,
	label = '',
	type = 'text',
	placeholder = 'typeHere',
	required = 'required',
	patternValue = new RegExp(''),
	patternMessage = 'invalidMessage',
	errors = {},
}: IProps): ReactElement => {
	const { t } = useTranslation('common')
	return (
		<WrapInput>
			{label && <Label>{t(label)}</Label>}
			<TextInputBlock
				type={type}
				name={name}
				disabled={disabled}
				errors={errors[name]}
				ref={register({
					required,
					pattern: {
						...(patternValue ? { value: patternValue } : {}),
						...(patternMessage ? { message: t(patternMessage) } : {}),
					},
				})}
				placeholder={t(placeholder)}
			/>
			{errors[name] && errors[name].message && (
				<SmallErrorMessage>{t(errors[name].message)}</SmallErrorMessage>
			)}
		</WrapInput>
	)
}
export default TextInput
