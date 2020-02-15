import styled from 'styled-components';
import {Layout} from 'antd';

const {Content} = Layout;

const ContentWrapper = styled(Content)`
	background: #fff;
	padding: 1.5em;
	min-height: calc(100vh - 5em);
`;

export default ContentWrapper;
