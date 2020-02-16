import React from 'react';
import PropTypes from 'prop-types';
import {Result, Typography} from 'antd';
import {CloseCircleOutlined} from '@ant-design/icons';

const {Paragraph, Text} = Typography;

const Error = ({error}) => (
	<>
		<Result
			status="error"
			title="Submission Failed"
		>
			{
				error && error.graphQLErrors.length
					? (
						<div className="desc">
							<Paragraph>
								<Text
									strong
									style={{
										fontSize: 16
									}}
								>
									The content you submitted has the following error:
								</Text>
							</Paragraph>
							{
								error && error.graphQLErrors && error.graphQLErrors.map(({message}, i) => (
									<Paragraph key={i}>
										<CloseCircleOutlined className="site-result-demo-error-icon"/>
										{' '}
										{message}
									</Paragraph>
								))
							}
						</div>
					)
					: null
			}
		</Result>
	</>
);

Error.propTypes = {
	error: PropTypes.object
};

export default Error;
