import React from 'react';
import {Layout} from 'antd';

import {Logo, ContentWrapper} from './Layout.styled';

const {Header, Content} = Layout;

const LayoutComponent = () => (
	<Layout>
		<Header>
			<Logo>Top JavaScript Repos</Logo>
		</Header>
		<Content>
			<ContentWrapper>Content</ContentWrapper>
		</Content>
	</Layout>
);

export default LayoutComponent;
