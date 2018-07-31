import React from 'react';
import {Posts} from "./Posts";
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});


describe('Posts component', () => {
	/** Mock WordPress post to test with**/
	const posts = [
		{
			ID: '1',
			title: {
				rendered: 'Hi Roy'
			},
			content: {
				rendered: 'Lorem ipsum, etc.'
			}
		},
		{
			ID: '2',
			title: {
				rendered: 'Hi Mike'
			},
			content: {
				rendered: 'Lorem ipsum, etc.'
			}
		},
	];


	it('Matches snapshot with basic props', () => {
		const component = renderer.create(
			<Posts
				posts={posts}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Applies className to outermost element', () => {
		const component = renderer.create(
			<Posts
				posts={posts}
				className={'food'}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	describe( 'Posts in loop', () => {
		it('Renders the right number of children', () => {
			const component = mount(
				<Posts
					posts={posts}
					className={'post-list-wrapper'}
				/>
			);
			expect(component.find('.post-list-wrapper').length).toEqual(2);
		});
	});
});