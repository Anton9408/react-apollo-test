import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
import {StarOutlined, FieldTimeOutlined} from '@ant-design/icons';

import IconText from './IconText/IconText';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import Error from '../Error/Error';

import useListRepositories from './hooks/useListRepositories';

import List from './ListRepositories.styled';

const {Item} = List;
const {Meta} = Item;

const ListRepositories = ({searchQuery, limit}) => {
	const {
		loading, error, list, totalCount, fetchMore, endCursor, hasNextPage
	} = useListRepositories(searchQuery, limit);

	if (error) {
		return (
			<Error errorMessage="Error getting list of repositories."/>
		);
	}

	return (
		<>
			<List
				itemLayout="vertical"
				size="default"
				loading={loading}
				dataSource={list}
				loadMore={(
					<LoadMoreButton
						loading={loading}
						fetchMore={fetchMore}
						endCursor={endCursor}
						hasNextPage={hasNextPage}
						searchQuery={searchQuery}
						limit={limit}
					/>
				)}
				header={`Count repositories: ${totalCount || 0}`}
				renderItem={({node}) => (
					<Item
						key={node.id}
						actions={[
							<IconText
								icon={StarOutlined}
								text={node.stargazers.totalCount}
								key="list-vertical-star-o"
							/>,
							<IconText
								icon={FieldTimeOutlined}
								text={node.createdAt}
								key="list-vertical-star-o"
							/>
						]}
					>
						<Meta
							avatar={<Avatar src={node.owner.avatarUrl} alt={node.owner.login}/>}
							title={<a href={node.url} target="_blank" rel="noopener noreferrer">{node.name}</a>}
							description={(node.licenseInfo && node.licenseInfo.name) || 'The Unlicense'}
						/>
						{node.description}
					</Item>
				)}
			/>
		</>
	);
};

ListRepositories.propTypes = {
	searchQuery: PropTypes.string,
	limit: PropTypes.number
};

export default ListRepositories;
