import React, { Component } from "react";
import { Table, Button, Modal } from "antd";

class Student extends Component {
	constructor() {
		super();
		this.state = {
			visible: false,
			imageIndex: 0,
			dataSource: [
				{
					key: "1",
					name: "Mike",
					vname: "lol",
					purpose: "no idea",
					gst: "1234",
					view: <Button onClick={() => this.showModal(0)}>View Bill</Button>,
					status: "Approved"
				},
				{
					key: "2",
					name: "Kasasa",
					vname: "lol2",
					purpose: "no no idea",
					gst: "123412",
					view: <Button onClick={() => this.showModal(1)}>View Bill</Button>,
					status: "Declined"
				},
				{
					key: "3",
					name: "sed",
					vname: "lol3",
					purpose: "no no no idea",
					gst: "12",
					view: <Button onClick={() => this.showModal(2)}>View Bill</Button>,
					status: "Pending"
				}
			],
			img: [
				"https://pay.google.com/about/static/images/social/knowledge_graph_logo.png",
				"https://pay.google.com/about/static/images/social/knowledge_graph_logo.png",
				"https://pay.google.com/about/static/images/social/knowledge_graph_logo.png"
			],
			columns: [
				{
					title: "Name",
					dataIndex: "name",
					key: "name"
				},
				{
					title: "VendorName",
					dataIndex: "vname",
					key: "vname"
				},
				{
					title: "purpose",
					dataIndex: "purpose",
					key: "purpose"
				},
				{
					title: "gst number",
					dataIndex: "gst",
					key: "gst"
				},
				{
					title: "View",
					dataIndex: "view",
					key: "view"
				},
				{
					title: "Status",
					dataIndex: "status",
					key: "status"
				}
			]
		};
	}

	showModal = k => {
		this.setState({
			visible: true,
			imageIndex: k
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
			<div className="studentBox">
				<Table
					dataSource={this.state.dataSource}
					columns={this.state.columns}
				/>
				<Modal
					title="Image Box"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<img
						src={this.state.img[this.state.imageIndex]}
						alt="billimage"
						width="400"
					/>
				</Modal>
			</div>
		);
	}
}

export default Student;
