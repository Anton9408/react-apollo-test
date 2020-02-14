import {useQuery} from '@apollo/react-hooks';

import currentMonthFirstDay from '../../../utils/currentMonthFirstDay';

import getListRepositories from '../gql/getListRepositories';

const useLayout = (sort, language, created) => {
	const searchData = `sort:${sort} language:${language} created:>=${created || currentMonthFirstDay()}`;
	const limit = 10;
	const {loading, error, data} = useQuery(getListRepositories, {
		variables: {
			searchData,
			limit: limit || 10
		}
	});

	return {
		loading,
		error,
		listData: data && data.search.edges
	};
};

export default useLayout;
