import {useQuery} from '@apollo/react-hooks';

import getListRepositories from '../gql/getListRepositories';

const useListRepositories = (searchQuery, limit) => {
	const {
		loading, error, data, fetchMore
	} = useQuery(getListRepositories, {
		variables: {
			searchQuery,
			limit
		}
	});

	return {
		loading,
		error,
		fetchMore,
		list: data && data.search && data.search.edges,
		totalCount: data && data.search && data.search.repositoryCount,
		endCursor: data && data.search.pageInfo && data.search.pageInfo.endCursor,
		hasNextPage: data && data.search.pageInfo && data.search.pageInfo.hasNextPage
	};
};

export default useListRepositories;
