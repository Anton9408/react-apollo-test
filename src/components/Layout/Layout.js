import React from 'react';
import {Layout} from 'antd';

/* TODO: Папку позже поменять */
import ListRepositories from '../List/ListRepositories';

import ContentWrapper from './Layout.styled';

import useLayout from './hooks/useLayout';

const {Content} = Layout;

const LayoutComponent = () => {
	const {loading, error, listData} = useLayout('stars-desc', 'JavaScript');

	return (
		<Layout>
			<Content>
				<ContentWrapper>
					<ListRepositories
						listData={listData}
						loading={loading}
					/>
					{
						error && `Error: ${error}`
					}
				</ContentWrapper>
			</Content>
		</Layout>
	);
};

export default LayoutComponent;
