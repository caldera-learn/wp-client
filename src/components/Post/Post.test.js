import React from 'react';
import {Post} from "./Post";
import renderer from 'react-test-renderer';
describe( 'Post component', () => {
	/** Mock WordPress post to test with**/
	const post = {
		title: {
			rendered: 'Hi Roy'
		},
		content: {
			rendered: 'Lorem ipsum, etc.'
		}
	};

	it( 'Matches snapshot with basic props', () => {
		const component = renderer.create(
			<Post
				post={post}
			/>
		);
		expect( component.toJSON() ).toMatchSnapshot();
	});
});