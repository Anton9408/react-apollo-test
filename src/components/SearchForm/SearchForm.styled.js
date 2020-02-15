import styled from 'styled-components';
import {Form, Select} from 'antd';

export const FormStyled = styled(Form)`
	margin-bottom: 1.5em;
	
	@media only screen and (max-width: 767px) {
		flex-direction: column;
		
		&.ant-form-inline > div {
			width: 100%;
			margin-bottom: 1.5em;
			
			&:last-child {
				text-align: center;
			}
		}		
	}
`;

export const SelectStyled = styled(Select)`
	min-width: 22em;
`;
