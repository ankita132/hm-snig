import React, { Component } from "react";
import { Button, message, Card, Icon } from "antd";
const { Meta } = Card;

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			start: 0
		};
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
	}
	startTimer() {
		this.setState({
			time: this.state.time,
			start: Date.now()
		});
		this.timer = setInterval(
			() =>
				this.setState({
					time: this.state.time + 1
				}),
			700
		);
		console.log("start");
	}
	stopTimer() {
		clearInterval(this.timer);
		this.setState({
			start: 0
		});
		console.log("stop");
	}
	success = () => {
		message.success(`Pain registered at ${this.state.time} seconds`, 5);
	};
	resetTimer() {
		this.setState({ time: 0, start: 0 });
		console.log("reset");
	}
	successClick = () => {
		message.success(`Discomfort registered at ${this.state.time} seconds`, 5);
		this.stopTimer();
	};
	render() {
		return (
			<div className="homebox">
				<div>
					<Card
						title="Time Monitoring"
						style={{
							width: 300
						}}
						actions={[
							<Button
								onClick={this.startTimer}
								type="primary"
								style={{ margin: "1em" }}
							>
								Start
							</Button>,
							<Button onClick={this.stopTimer} style={{ margin: "1em" }}>
								Stop
							</Button>,
							<Button
								onClick={this.resetTimer}
								type="danger"
								style={{ margin: "1em" }}
							>
								Reset
							</Button>
						]}
					>
						<div className="timer">
							<h1 style={{ fontSize: "2.5em", marginTop: "0em" }}>
								{this.state.time}
							</h1>
							<p style={{ fontSize: "1.5em", marginTop: "-2em" }}>seconds</p>
						</div>
					</Card>
					<div className="boxes">
						<Button type="primary" onClick={this.successClick} className="pain">
							Register Pain
						</Button>
						<Button type="primary" onClick={this.success} className="pain">
							Register Discomfort
						</Button>
					</div>
				</div>
				<div>
					<Card
						hoverable
						style={{ width: 230 }}
						cover={
							<img
								alt="example"
								src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
							/>
						}
					>
						<Meta
							title="Palak Harwani"
							description="palakharwani@gmail.com"
							style={{ marginLeft: "-3em" }}
						/>
					</Card>
				</div>
			</div>
		);
	}
}

export default Homepage;
