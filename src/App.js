import React, { Component } from "react";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<ToastContainer autoClose={2000} />
				<Switch>
					<Route path="/" component={Dashboard} />
					<Route path="/videos" component={Admin} />
					<Route path="/settings" component={Admin} />
				</Switch>
			</div>
		);
	}
}

export default App;
