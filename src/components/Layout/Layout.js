import React from 'react';
import {Layout} from 'antd';

import ListRepositories from '../ListRepositories/ListRepositories';
import SearchForm from '../SearchForm/SearchForm';

import Content from './Layout.styled';

import useLayout from './hooks/useLayout';

const LayoutComponent = () => {
	const {
		limit,
		searchQuery,
		setFormData
	} = useLayout();

	return (
		<Layout>
			<Content>
				<SearchForm
					setFormData={setFormData}
				/>
				<ListRepositories
					limit={limit}
					searchQuery={searchQuery}
				/>
			</Content>
		</Layout>
	);
};

export default LayoutComponent;
