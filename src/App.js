import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Posts} from './components/Posts/Posts';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
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
				<div>
					{this.state.posts.length &&
					<Posts
						posts={this.state.posts}
					/>
					}
				</div>
			</div>
		);
	}
}

export default App;
