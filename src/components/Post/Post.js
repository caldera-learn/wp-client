import React from 'react';
import PropTypes from 'prop-types';
import {postShape} from "./postShape";
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
	post: postShape
};

Post.defaultProps = {
	className: 'post-wrapper'
};