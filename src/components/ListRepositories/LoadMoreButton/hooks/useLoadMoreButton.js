const useLoadMoreButton = (cursorBefore, fetchMore, searchQuery, limit) => {
	const onLoadMore = () => fetchMore({
		variables: {
			searchQuery,
			cursorBefore,
			limit
		},
		updateQuery: ((prev, {fetchMoreResult}) => {
			const newEdges = fetchMoreResult.search.edges;
			const {repositoryCount, pageInfo} = fetchMoreResult.search;

			return newEdges.length
				? {
					search: {
						// eslint-disable-next-line no-underscore-dangle
						__typename: prev.search.__typename,
						edges: [...prev.search.edges, ...newEdges],
						repositoryCount,
						pageInfo
					}
				}
				: prev;
		})
	});

	return {
		onLoadMore
	};
};

export default useLoadMoreButton;
