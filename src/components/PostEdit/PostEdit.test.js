import React from 'react';
import {PostEdit} from "./PostEdit";
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

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

	describe( 'Change events', () => {
		it( 'Updates the post title', () => {
			let updatedPost = {};
			const component = shallow(
				<PostEdit
					onChange={(newValue) => {
						updatedPost = newValue;
					}}
					post={post}
					className={'food'}
				/>
			);
			component.find( 'input' ).simulate( 'change', {
				target: { value: 'New Title'}
			});
			expect( updatedPost.title.rendered ).toEqual( 'New Title' );
		});
	});
});

