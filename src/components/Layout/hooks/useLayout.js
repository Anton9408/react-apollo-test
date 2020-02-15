import {useState} from 'react';

import {
	getSort,
	getLang,
	getCreated,
	getLicenseId,
	getQueryName
} from '../../../utils/utils';

const useLayout = () => {
	const [formData, setFormData] = useState({
		query: '',
		license: ''
	});
	const searchQuery = [
		getSort('stars', 'desc'),
		getLang('Javascript'),
		getCreated(),
		getQueryName(formData.query),
		getLicenseId(formData.license)
	].join(' ');

	return {
		limit: 5,
		searchQuery,
		setFormData
	};
};

export default useLayout;
