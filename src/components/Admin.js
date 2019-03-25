import React, { Component } from "react";
import { Layout, Menu, Button, Table, Modal, Input } from "antd";
const { Header, Content, Sider } = Layout;
const { TextArea } = Input;
const status = ["Approved", "Pending", "Pending", "Rejected"];
class Admin extends Component {
	constructor() {
		super();
		this.state = {
			visible: false,
			visible2: false,
			imageIndex: 0,
			dataSource: [
				{
					key: "0",
					name: "Mike",
					vname: "lol",
					purpose: "no idea",
					gst: "1234",
					view: <Button onClick={() => this.showModal(0)}>View Bill</Button>,
					status: this.getStatus(0)
				},
				{
					key: "1",
					name: "Mike221212",
					vname: "lol34",
					purpose: "no idea",
					gst: "1234qwq",
					view: <Button onClick={() => this.showModal(1)}>View Bill</Button>,
					status: this.getStatus(1)
				},
				{
					key: "2",
					name: "Kasasa",
					vname: "lol2",
					purpose: "no no idea",
					gst: "123412",
					view: <Button onClick={() => this.showModal(2)}>View Bill</Button>,
					status: this.getStatus(2)
				},
				{
					key: "3",
					name: "sed",
					vname: "lol3",
					purpose: "no no no idea",
					gst: "12",
					view: <Button onClick={() => this.showModal(3)}>View Bill</Button>,
					status: this.getStatus(3)
				}
			],
			img: [
				"https://pay.google.com/about/static/images/social/knowledge_graph_logo.png",
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
			],
			index: 0
		};
	}
	getStatus = key => {
		switch (status[key]) {
			case "Approved":
				return "Approved";
			case "Rejected":
				return "Rejected";
			case "Pending":
				return (
					<Button type="primary" onClick={() => this.showModal2(key)}>
						Update Status
					</Button>
				);
			default:
				return;
		}
	};
	showModal = k => {
		this.setState({
			visible: true,
			imageIndex: k
		});
	};
	showModal2 = k => {
		this.setState({
			visible2: true,
			index: k
		});
	};
	handleOk = e => {
		console.log(e);
		this.setState({
			visible: false,
			visible2: false
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false,
			visible2: false
		});
	};
	updateStatus = check => {
		if (check) {
			var stateCopy = Object.assign({}, this.state);
			stateCopy.dataSource[this.state.index].status = "Approved";
			this.setState(stateCopy);
			this.handleCancel();
		} else {
			var stateCopy = Object.assign({}, this.state);
			stateCopy.dataSource[this.state.index].status = "Rejected";
			this.setState(stateCopy);
			this.handleCancel();
		}
	};
	render() {
		return (
			<div className="adminBox">
				<Layout>
					<Header className="header">
						<div className="logo" />
					</Header>
					<Layout>
						<Sider width={200} theme="dark">
							<Menu
								mode="inline"
								defaultSelectedKeys={["1"]}
								defaultOpenKeys={["sub1"]}
								style={{ height: "100%", borderRight: 0 }}
							>
								<Menu.Item key="1" onClick={() => this.changeView(true)}>
									View Bills
								</Menu.Item>
							</Menu>
						</Sider>
						<Layout style={{ padding: "24px 24px" }}>
							<Content
								style={{
									background: "#fff",
									padding: 24,
									margin: 0,
									minHeight: 530
								}}
							>
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
								<Modal
									title="Update Status"
									visible={this.state.visible2}
									onOk={this.handleOk}
									onCancel={this.handleCancel}
								>
									<TextArea rows={4} placeholder="Type your message" />
									<div className="buttonGroup">
										<Button
											type="primary"
											style={{ marginRight: 10 }}
											onClick={() => this.updateStatus(true)}
										>
											Approve
										</Button>
										<Button onClick={() => this.updateStatus(false)}>
											Reject
										</Button>
									</div>
								</Modal>
							</Content>
						</Layout>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default Admin;
