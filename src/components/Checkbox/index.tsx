import React from 'react'
import styled from 'styled-components'

import { Primitive } from 'types/Helpers'

const StyledCheckbox = styled.input`
	visibility: hidden;
	position: absolute;
	height: 0;
	width: 0;

	&:checked {
		& ~ .checkmark {
			&:before {
				content: '✓';
				color: ${({ theme }) => theme.color.primary};
			}
		}
		& ~ .label {
			color: #000;
		}
	}
`

const Checkmark = styled.span`
	display: inline-block;
	transition: all 0.6s ease-out;
	width: 21px;
	height: 21px;
	cursor: pointer;
	border-radius: 2.4px;
	background-color: #fff;
	position: relative;
	border: 1px solid ${({ theme }) => theme.color.primary};
	margin-left: -21px;
	right: 11px;
	top: 5px;
	&:before {
		display: block;
		position: absolute;
		text-align: center;
		width: 100%;
		height: 100%;
		font-size: 18px;
		color: ${({ theme }) => theme.color.primary};
	}
`

const StyledLabel = styled.label`
	display: block;
	font-size: 20px;
	font-weight: 300;
	padding-left: 38px;
	position: relative;
	cursor: pointer;
	line-height: normal;
	color: ${({ theme }) => theme.color.primary};
`

interface ICheckbox {
	name: string
	value: Primitive
	formikValue: Primitive
	label?: string | number

	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

const Checkbox: React.FunctionComponent<ICheckbox> = (props) => {
	const { name, label, value, formikValue, ...inputProps } = props

	return (
		<StyledLabel className="checkbox">
			<StyledCheckbox
				id={name}
				name={name}
				type="checkbox"
				checked={formikValue === value}
				value={value.toString()}
				{...inputProps}
			/>
			<Checkmark className="checkmark" />
			<span className="label">{label || value}</span>
		</StyledLabel>
	)
}

export default Checkbox
