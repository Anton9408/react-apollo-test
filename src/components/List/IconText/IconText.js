import React from 'react';
import PropTypes from 'prop-types';

const IconText = ({icon, text}) => (
	<span>
		{React.createElement(icon, {style: {marginRight: 8}})}
		{text}
	</span>
);

IconText.propTypes = {
	icon: PropTypes.object.isRequired,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired
};

export default IconText;
