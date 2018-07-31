import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Posts} from './components/Posts/Posts';
import {PostEdit} from "./components/PostEdit/PostEdit";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			postToEdit: 0,
		};
		this.getEditPost = this.getEditPost.bind(this);
		this.updatePostToEdit = this.updatePostToEdit.bind(this);
	}

	getEditPost(){
		return this.state.posts.find( post => this.state.postToEdit === post.ID);
	}

	updatePostToEdit(postToEdit){
		this.setState({postToEdit})
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img
						src={logo}
						className="App-logo"
						alt="logo"
					/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

					{this.state.posts.length &&
						<div>
							<Posts
								posts={this.state.posts}
							/>

							{0 != this.state.postToEdit &&
								<PostEdit
									className={'main-editor'}
									post={this.getEditPost()}
									onChange={() => {
									}}
								/>
							}

						</div>

					}

			</div>
		);
	}
}

export default App;
