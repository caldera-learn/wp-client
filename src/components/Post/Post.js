import React from 'react';
import PropTypes from 'prop-types';
export const Post = (props) =>  {
	return(
		<div
			className={props.className}
		>
			<h3>
				{props.post.title.rendered}
			</h3>
			<div>
				{props.post.content.rendered}
			</div>
		</div>
	);
};

Post.propTypes = {
	className: PropTypes.string.isRequired,
	post: PropTypes.shape({
		title: PropTypes.shape({
			rendered: PropTypes.string,
		}).isRequired,
		content: PropTypes.shape({
			rendered: PropTypes.string,
		}).isRequired,
	}).isRequired
};

Post.defaultProps = {
	className: 'post-wrapper'
};