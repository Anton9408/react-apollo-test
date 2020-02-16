import React from 'react';
import {Layout} from 'antd';

import ListRepositories from '../ListRepositories/ListRepositories';
import SearchForm from '../SearchForm/SearchForm';

import {ContentWrapper, PageHeaderWrapper} from './Layout.styled';

import useLayout from './hooks/useLayout';

const LayoutComponent = () => {
	const {
		limit,
		searchQuery,
		setFormData
	} = useLayout();

	return (
		<Layout>
			<ContentWrapper>
				<PageHeaderWrapper
					title="TOP"
					subTitle="JavaScript repository in month"
				/>
				<SearchForm
					setFormData={setFormData}
				/>
				<ListRepositories
					limit={limit}
					searchQuery={searchQuery}
				/>
			</ContentWrapper>
		</Layout>
	);
};

export default LayoutComponent;
