import React from 'react';
import PropTypes from 'prop-types';
import {List, Avatar} from 'antd';
import {StarOutlined, FieldTimeOutlined} from '@ant-design/icons';

import IconText from './IconText/IconText';

const {Item} = List;
const {Meta} = Item;

const ListRepositories = ({listData, loading}) => (
	<List
		itemLayout="horizontal"
		size="default"
		bordered
		pagination={{
			position: 'both'
		}}
		loading={loading}
		dataSource={listData}
		renderItem={({node}) => (
			<Item
				key={node.id}
				actions={[
					<IconText icon={StarOutlined} text={node.stargazers.totalCount} key="list-vertical-star-o"/>,
					<IconText icon={FieldTimeOutlined} text={node.createdAt} key="list-vertical-star-o"/>
				]}
			>
				<Meta
					avatar={<Avatar src={node.owner.avatarUrl} alt={node.owner.login}/>}
					title={<a href={node.url} target="_blank" rel="noopener noreferrer">{node.name}</a>}
					description={(node.licenseInfo && node.licenseInfo.name) || 'No licence'}
				/>
				{node.description}
			</Item>
		)}
	/>
);

ListRepositories.propTypes = {
	listData: PropTypes.array,
	loading: PropTypes.bool
};

export default ListRepositories;
