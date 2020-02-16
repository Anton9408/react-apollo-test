import styled from 'styled-components';
import {Form, Select} from 'antd';

export const FormStyled = styled(Form)`
	margin-bottom: 1.5em;
	background-color: #fff;
	padding: 1.5em;
	margin-top: 1.5em;
	
	&.ant-form-inline > div {
		min-width: 22em;
		margin-bottom: 1.5em;
		
		&:last-child {
			min-width: auto;
		}	
	}		
	
	@media only screen and (max-width: 823px) {
		flex-direction: column;
		
		&.ant-form-inline > div {
			min-width: 100%;
			margin-bottom: 1.5em;
			
			&:last-child {
				text-align: center;
			}
		}		
	}
`;

export const SelectStyled = styled(Select)`
	min-width: 22em;
	
	@media only screen and (max-width: 823px) {
		min-width: 100%;
	}
`;
