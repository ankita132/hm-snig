import React, { Component } from "react";
import { Input, Button } from "antd";
import history from "../routerHistory";
import { toast } from "react-toastify";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};
	}
	passRoute = () => {
		if (this.state.username === "admin" && this.state.password === "admin") {
			localStorage.setItem("login", true);
			history.push("/admin");
		} else if (
			this.state.username === "user123" &&
			this.state.password === "user123"
		) {
			localStorage.setItem("login", true);
			history.push("/student");
		} else {
			toast.error("Login failed.Try again.");
		}
	};
	render() {
		return (
			<div className="LoginBox">
				<h1>Login</h1>
				<Input
					placeholder="Username"
					value={this.state.username}
					onChange={e => this.setState({ username: e.target.value })}
					style={{ width: 500, padding: 20, margin: 10 }}
				/>
				<Input
					placeholder="Password"
					value={this.state.password}
					onChange={e => this.setState({ password: e.target.value })}
					style={{ width: 500, padding: 20, margin: 10 }}
					type="password"
				/>
				<Button type="primary" onClick={() => this.passRoute()}>
					Login
				</Button>
			</div>
		);
	}
}

export default Login;
