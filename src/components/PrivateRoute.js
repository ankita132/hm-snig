import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class PrivateRoute extends Component {
	checkAuthentication = () => {
		if (localStorage.getItem("login") && this.props.location !== "/") {
			return true;
		} else {
			return false;
		}
	};
	render() {
		const { component: Component, ...props } = this.props;
		return (
			<Route
				{...props}
				render={props =>
					this.checkAuthentication() ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: "/",
								state: { from: props.location }
							}}
						/>
					)
				}
			/>
		);
	}
}

export default PrivateRoute;
