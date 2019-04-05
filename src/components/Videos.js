import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Card } from "antd";
import { Modal } from "antd";

const { Meta } = Card;

class Videos extends Component {
	constructor() {
		super();
		this.state = {
			visible: false,
			video: "https://www.youtube.com/watch?v=ysz5S6PUM-U"
		};
	}
	showModal = url => {
		this.setState({
			visible: true,
			video: url
		});
	};

	handleOk = e => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false
		});
	};
	render() {
		return (
			<div className="BillBox">
				<div className="box">
					<Card
						hoverable
						style={{ width: 240, margin: "1em" }}
						cover={
							<img
								alt="example"
								src="https://www.besthealthmag.ca/wp-content/uploads/sites/16/2017/05/Health-and-mental-health-benefits-of-exercise.jpg"
							/>
						}
						onClick={() => this.showModal("https://vimeo.com/177035634")}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
					<Card
						hoverable
						style={{ width: 240, margin: "1em" }}
						cover={
							<img
								alt="example"
								src="https://www.besthealthmag.ca/wp-content/uploads/sites/16/2017/05/Health-and-mental-health-benefits-of-exercise.jpg"
							/>
						}
						onClick={() => this.showModal("https://vimeo.com/177035634")}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
					<Card
						hoverable
						style={{ width: 240, margin: "1em" }}
						cover={
							<img
								alt="example"
								src="https://www.besthealthmag.ca/wp-content/uploads/sites/16/2017/05/Health-and-mental-health-benefits-of-exercise.jpg"
							/>
						}
						onClick={() => this.showModal("https://vimeo.com/177035634")}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</div>
				<div className="box">
					<Card
						hoverable
						style={{ width: 240, margin: "1em" }}
						cover={
							<img
								alt="example"
								src="https://www.besthealthmag.ca/wp-content/uploads/sites/16/2017/05/Health-and-mental-health-benefits-of-exercise.jpg"
							/>
						}
						onClick={() => this.showModal("https://vimeo.com/177035634")}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
					<Card
						hoverable
						style={{ width: 240, margin: "1em" }}
						cover={
							<img
								alt="example"
								src="https://www.besthealthmag.ca/wp-content/uploads/sites/16/2017/05/Health-and-mental-health-benefits-of-exercise.jpg"
							/>
						}
						onClick={() => this.showModal("https://vimeo.com/177035634")}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
					<Card
						hoverable
						style={{ width: 240, margin: "1em" }}
						cover={
							<img
								alt="example"
								src="https://www.besthealthmag.ca/wp-content/uploads/sites/16/2017/05/Health-and-mental-health-benefits-of-exercise.jpg"
							/>
						}
						onClick={() => this.showModal("https://vimeo.com/177035634")}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</div>
				<Modal
					title="Basic Modal"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					width={800}
					style={{ alignContent: "center" }}
				>
					<ReactPlayer url={this.state.video} playing />
				</Modal>
			</div>
		);
	}
}

export default Videos;
