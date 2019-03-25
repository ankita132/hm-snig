import React, { Component } from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute.js";

class App extends Component {
	render() {
		return (
			<div className="App">
				<ToastContainer autoClose={2000} />
				<Switch>
					<Route exact path="/" component={Login} />
					<PrivateRoute path="/student" component={Dashboard} />
					<PrivateRoute path="/admin" component={Admin} />
				</Switch>
			</div>
		);
	}
}

export default App;
