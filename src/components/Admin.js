import React, { Component } from "react";
import { Layout, Menu, Button, Table, Modal, Input, List, Icon } from "antd";
const { Header, Content, Sider } = Layout;
const { TextArea } = Input;
const status = ["Approved", "Pending", "Pending", "Declined"];
class Admin extends Component {
	constructor() {
		super();
		this.state = {
			visible: false,
			visible2: false,
			visible3: false,
			verifyindex: 0,
			imageIndex: 0,
			dataSource: [
				{
					key: "1",
					name: "Aman",
					vname: "Sikandar Sounds",
					purpose: "Production",
					gst: "1234",
					view: <Button onClick={() => this.showModal(0)}>View Bill</Button>,
					status: this.getStatus(0),
					vstatus: (
						<Button onClick={() => this.showModal3(0)}>Verifications</Button>
					),
					data: [
						{
							name: "Verified by G. Sec Social and Cultural",
							status: true
						},
						{
							name: "Verified by the concerned PTI",
							status: true
						},
						{
							name: "Hard copy submitted",
							status: true
						},
						{
							name: "Verified by the Registrar",
							status: true
						},
						{
							name: "Verified by the President TSG",
							status: true
						}
					]
				},
				{
					key: "2",
					name: "Yash Khetan",
					vname: "Chowdhary Costumes",
					purpose: "Production costumes",
					gst: "123412",
					view: <Button onClick={() => this.showModal(1)}>View Bill</Button>,
					status: this.getStatus(1),
					vstatus: (
						<Button onClick={() => this.showModal3(1)}>Verifications</Button>
					),
					data: [
						{
							name: "Verified by G. Sec Social and Cultural",
							status: true
						},
						{
							name: "Verified by the concerned PTI",
							status: true
						},
						{
							name: "Hard copy submitted",
							status: false
						},
						{
							name: "Verified by the Registrar",
							status: false
						},
						{
							name: "Verified by the President TSG",
							status: false
						}
					]
				},
				{
					key: "3",
					name: "Siddarth",
					vname: "Jyotsna Carpenter",
					purpose: "Sets",
					gst: "12",
					view: <Button onClick={() => this.showModal(2)}>View Bill</Button>,
					status: this.getStatus(2),
					vstatus: (
						<Button onClick={() => this.showModal3(2)}>Verifications</Button>
					),
					data: [
						{
							name: "Verified by G. Sec Social and Cultural",
							status: true
						},
						{
							name: "Verified by the concerned PTI",
							status: true
						},
						{
							name: "Hard copy submitted",
							status: true
						},
						{
							name: "Verified by the Registrar",
							status: false
						},
						{
							name: "Verified by the President TSG",
							status: false
						}
					]
				},
				{
					key: "3",
					name: "Rahul",
					vname: "Usha Printer",
					purpose: "Annual Magazine",
					gst: "12",
					view: <Button onClick={() => this.showModal(3)}>View Bill</Button>,
					status: this.getStatus(3),
					vstatus: (
						<Button onClick={() => this.showModal3(3)}>Verifications</Button>
					),
					data: [
						{
							name: "Verified by G. Sec Social and Cultural",
							status: true
						},
						{
							name: "Verified by the concerned PTI",
							status: true
						},
						{
							name: "Hard copy submitted",
							status: true
						},
						{
							name: "Verified by the Registrar",
							status: true
						},
						{
							name: "Verified by the President TSG",
							status: true
						}
					]
				}
			],
			img: [
				"http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg",
				"http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg",
				"http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg",
				"http://www.uppclonline.com/en_GB/images/innerpages/login/bill_sample.jpg"
			],
			verify: "",
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
				},
				{
					title: "Verification Status",
					dataIndex: "vstatus",
					key: "vstatus"
				}
			],
			index: 0
		};
	}
	getStatus = key => {
		switch (status[key]) {
			case "Approved":
				return "Approved";
			case "Declined":
				return "Declined";
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
	showModal3 = key => {
		let data = this.state.dataSource[key].data;
		this.setState({
			visible3: true,
			verify: data
		});
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
			visible2: false,
			visible3: false
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false,
			visible2: false,
			visible3: false
		});
	};
	updateStatus = check => {
		if (check) {
			var stateCopy = Object.assign({}, this.state);
			stateCopy.dataSource[this.state.index].status = "Approved";
			this.setState(stateCopy);
			this.handleCancel();
		} else {
			let stateCopy = Object.assign({}, this.state);
			stateCopy.dataSource[this.state.index].status = "Declined";
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
								<Modal
									title="Verification Status"
									visible={this.state.visible3}
									onOk={this.handleOk}
									onCancel={this.handleCancel}
								>
									<List
										dataSource={this.state.verify}
										renderItem={item => (
											<List.Item key={item.name}>
												<List.Item.Meta title={<h2>{item.name}</h2>} />
												<div>
													{item.status ? (
														<Icon
															type="check-circle"
															theme="filled"
															style={{ color: "green" }}
														/>
													) : (
														<div>
															<Button
																type="primary"
																style={{ marginRight: 10 }}
															>
																Verify
															</Button>
														</div>
													)}
												</div>
											</List.Item>
										)}
									/>
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
