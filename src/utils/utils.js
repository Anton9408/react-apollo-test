export const getLicenseId = licenseId => {
	if (!licenseId || licenseId === '1') {
		return '';
	}

	return `license:${licenseId}`;
};

export const getQueryName = name => (name ? `name:${name}` : '');

export const getCreated = (date = new Date()) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;

	return `created:>=${year}-${month > 9 ? month : `0${month}`}-01`;
};

export const getLang = lang => (lang ? `language:${lang}` : '');

export const getSort = (sort = 'stars', condition = 'desc') => (sort ? `sort:${sort}-${condition}` : '');
