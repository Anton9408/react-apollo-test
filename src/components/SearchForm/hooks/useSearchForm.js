import {useQuery} from '@apollo/react-hooks';
import {FormStyled} from '../SearchForm.styled';

import getListLicenses from '../gql/getListLicence';

const {useForm} = FormStyled;

const useSearchForm = setFormData => {
	const [form] = useForm();
	const {data, loading, error} = useQuery(getListLicenses);

	const onFinish = values => setFormData(values);

	return {
		form,
		error,
		loading,
		listLicence: data && data.licenses,
		onFinish
	};
};

export default useSearchForm;
