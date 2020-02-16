import React from 'react';
import PropTypes from 'prop-types';

import Result from './Error.styled';

const Error = ({errorMessage}) => (
	<Result
		status="error"
		title={errorMessage}
	/>
);

Error.propTypes = {
	errorMessage: PropTypes.string.isRequired
};

export default Error;
