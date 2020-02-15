import {useQuery} from '@apollo/react-hooks';

import getListRepositories from '../gql/getListRepositories';

const useListRepositories = (searchQuery, limit) => {
	const {loading, error, data} = useQuery(getListRepositories, {
		variables: {
			searchQuery,
			limit
		}
	});

	return {
		loading,
		error,
		listData: data && data.search.edges,
		totalCount: data && data.search.repositoryCount
	};
};

export default useListRepositories;
