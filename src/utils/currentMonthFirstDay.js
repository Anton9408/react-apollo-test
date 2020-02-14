const currentMonthFirstDay = (date = new Date()) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;

	return `${year}-${month > 9 ? month : `0${month}`}-01`;
};

export default currentMonthFirstDay;
