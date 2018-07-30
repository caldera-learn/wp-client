import React from 'react';
import {PostEdit} from "./PostEdit";
import renderer from 'react-test-renderer';
describe( 'PostEdit component', () => {
	/** Mock WordPress post to test with**/
	const post = {
		title: {
			rendered: 'Hi Roy'
		},
		content: {
			rendered: 'Lorem ipsum, etc.'
		}
	};

	const mockHandler = () => {};

	it( 'Matches snapshot with basic props', () => {
		const component = renderer.create(
			<PostEdit
				onChange={mockHandler}
				post={post}
			/>
		);
		expect( component.toJSON() ).toMatchSnapshot();
	});

	it( 'Applies className to outermost element', () => {
		const component = renderer.create(
			<PostEdit
				onChange={mockHandler}
				post={post}
				className={'food'}
			/>
		);
		expect( component.toJSON() ).toMatchSnapshot();
	});
});