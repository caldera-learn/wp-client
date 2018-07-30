import React from 'react';
import PropTypes from 'prop-types';
import {Post} from "../Post/Post";
import {postShape} from "../Post/postShape";

export const Posts = (props) =>  {
	return(
		<div
			className={props.className}
		>
			{props.posts.map( post => {
				return <Post
					key={post.ID}
					post={post}
				/>
			})};
		</div>
	);
};
Posts.propTypes = {
	className: PropTypes.string.isRequired,
	posts: PropTypes.arrayOf(
		postShape
	)
};

Posts.defaultProps = {
	className: 'post-list-wrapper'
};