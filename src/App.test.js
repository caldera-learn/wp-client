import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App/>, div);
	ReactDOM.unmountComponentAtNode(div);
});

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

describe('Rendering posts in app', () => {
	it('Shows the posts', () => {
		const component = mount(
			<App/>
		);
		component.setState({posts: posts});
		expect(component.find('.post-list-wrapper').length).toEqual(2);
	});


	it('Finds the post to edit ', () => {
		const component = mount(
			<App/>
		);
		component.setState({posts: posts});
		component.setState({postToEdit: '2'});
		expect(component.instance().getEditPost().ID).toEqual('2');
	});

	it('Shows the editor', () => {
		const component = mount(
			<App/>
		);
		component.setState({posts: posts});
		component.setState({postToEdit: '2'});
		expect(component.find('.main-editor').length).toBe(2);
	});

	it('Does not show the editor', () => {
		const component = mount(
			<App/>
		);
		component.setState({posts: posts});
		expect(component.find('.main-editor').length).toBe(0);
	});

	it('updates the edit post', () => {
		const component = mount(
			<App/>
		);
		component.instance().updatePostToEdit(5);
		expect(component.state('postToEdit')).toBe(5);
	});


});