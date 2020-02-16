import styled from 'styled-components';
import {Layout, PageHeader} from 'antd';

const {Content} = Layout;

export const ContentWrapper = styled(Content)`
	padding: 1.5em;
	min-height: calc(100vh - 5em);
`;

export const PageHeaderWrapper = styled(PageHeader)`
	background-color: #fff;
`;

export default ContentWrapper;
