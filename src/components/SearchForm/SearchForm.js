import React from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

import useSearchForm from './hooks/useSearchForm';

import {FormStyled, SelectStyled} from './SearchForm.styled';

const {Item} = FormStyled;
const {Option} = SelectStyled;

const SearchForm = ({setFormData}) => {
	const {
		form, listLicence, loadingLicence, onFinish
	} = useSearchForm(setFormData);

	return (
		<FormStyled
			form={form}
			name="horizontal_login"
			layout="inline"
			onFinish={onFinish}
		>
			<Item
				name="query"
			>
				<Input
					prefix={<SearchOutlined/>}
					placeholder="Type here ..."
				/>
			</Item>
			<Item
				name="license"
			>
				<SelectStyled
					defaultValue="All license"
					loading={loadingLicence}
				>
					<Option key={1} id="all">All license</Option>
					{
						listLicence && listLicence.map(({id, name, key}) => (
							<Option key={key} id={id}>{name}</Option>
						))
					}
				</SelectStyled>
			</Item>
			<Item>
				<Button
					type="primary"
					htmlType="submit"
				>
					Search
				</Button>
			</Item>
		</FormStyled>
	);
};

SearchForm.propTypes = {
	setFormData: PropTypes.func
};

export default SearchForm;
