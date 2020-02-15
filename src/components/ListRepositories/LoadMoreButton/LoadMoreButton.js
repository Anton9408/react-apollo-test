import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

import useLoadMoreButton from './hooks/useLoadMoreButton';

import Wrapper from './LoadMoreButton.styled';

const LoadMoreButton = ({
	                        loading, fetchMore, endCursor, hasNextPage, searchQuery, limit
}) => {
	const {onLoadMore} = useLoadMoreButton(endCursor, fetchMore, searchQuery, limit);

	if (!hasNextPage || loading) {
		return null;
	}

	return (
		<Wrapper>
			<Button onClick={onLoadMore}>loading more</Button>
		</Wrapper>
	);
};

LoadMoreButton.propTypes = {
	loading: PropTypes.bool,
	hasNextPage: PropTypes.bool,
	endCursor: PropTypes.string,
	fetchMore: PropTypes.func,
	searchQuery: PropTypes.string,
	limit: PropTypes.number
};

export default LoadMoreButton;
