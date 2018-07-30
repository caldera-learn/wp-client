import React from 'react';
export const  Post = (props) =>  {
	return(
		<div>
			<h3>
				{props.post.title.rendered}
			</h3>
			<div>
				{props.post.content.rendered}
			</div>
		</div>
	);
};

