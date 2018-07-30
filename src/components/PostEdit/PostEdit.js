import React from 'react';
import PropTypes from 'prop-types';
import {postShape} from "../Post/postShape";

export const PostEdit = (props) =>  {

	const onChange = (update) => {
		props.onChange({
			...props.post,
			...update
		})
	};
	return(
		<div
			className={props.className}
		>
			<h3>
				<input
					type={'text'}
					value={props.post.title.rendered}
					onChange={(event) => {
						onChange({
							title: {
								rendered: event.target.value
							}
						})
					}}
				/>
			</h3>
			<div>
				{props.post.content.rendered}
			</div>
		</div>
	);
};

PostEdit.propTypes = {
	className: PropTypes.string.isRequired,
	post: postShape,
	onChange: PropTypes.func.isRequired
};

PostEdit.defaultProps = {
	className: 'post-wrapper'
};