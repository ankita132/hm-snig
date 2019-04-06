import React, { Component } from "react";
import { Input, Switch, Radio, Card } from "antd";

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
class Settings extends Component {
	constructor() {
		super();
		this.state = {
			disabled: false,
			value: 1
		};
	}
	handleDisabledChange = () => {
		this.setState({
			disabled: !this.state.disabled
		});
	};
	onChange = e => {
		console.log("radio checked", e.target.value);
		this.setState({
			value: e.target.value
		});
	};
	render() {
		return (
			<div className="settingsBox">
				<Card title="Add Caretaker" style={{ margin: "1em" }}>
					<div className="Inputbox">
						<Input placeholder="Caretaker 1 Name" className="usage" />
						<Input placeholder="Caretaker 1 Email Id" className="usage" />
						<Input placeholder="Caretaker 1 Phone" className="usage" />
					</div>
					<div className="Inputbox">
						<Input placeholder="Caretaker 2 Name" className="usage" />
						<Input placeholder="Caretaker 2 Email Id" className="usage" />
						<Input placeholder="Caretaker 2 Phone" className="usage" />
					</div>
				</Card>

				<Card title="Mode Select" style={{ margin: "1em" }}>
					<div className="Inputbox">
						<h3>Custom Mode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
						<Switch
							size="small"
							checked={this.state.disabled}
							onChange={this.handleDisabledChange}
						/>
					</div>
					<div className="Inputbox">
						<h3>Normal Modes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
						<RadioGroup onChange={this.onChange} value={this.state.value}>
							<RadioButton value={1}>Easy</RadioButton>
							<RadioButton value={2}>Medium</RadioButton>
							<RadioButton value={3}>Difficult</RadioButton>
						</RadioGroup>
					</div>
				</Card>
			</div>
		);
	}
}

export default Settings;
