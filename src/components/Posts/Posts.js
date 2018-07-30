import React from 'react';
import PropTypes from 'prop-types';
import {Post} from "../Post/Post";
export const Posts = (props) =>  {
	return(
		<div
			className={props.className}
		>
			{props.posts.map( post => {
				return <Post
					post={post}
				/>
			})};
		</div>
	);
};

Posts.propTypes = {
	className: PropTypes.string.isRequired,
	posts: PropTypes.arrayOf(
			PropTypes.shape({
			title: PropTypes.shape({
				rendered: PropTypes.string,
			}).isRequired,
			content: PropTypes.shape({
				rendered: PropTypes.string,
			}).isRequired,
		}).isRequired
	)
};

Posts.defaultProps = {
	className: 'post-list-wrapper'
};