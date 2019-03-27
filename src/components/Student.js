import React, { Component } from "react";
import { Table, Button, Modal, List, Icon } from "antd";

class Student extends Component {
	constructor() {
		super();
		this.state = {
			visible: false,
			visible3: false,
			imageIndex: 0,
			verifyindex: 0,
			verify: "",
			dataSource: [
				{
					key: "1",
					name: "Aman",
					vname: "Sikandar Sounds",
					purpose: "Production",
					gst: "1234",
					view: <Button onClick={() => this.showModal(0)}>View Bill</Button>,
					status: "Approved",
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
					status: "Declined",
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
					status: "Pending",
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
				}
			],
			img: [
				"https://www.cesc.co.in/ptrlineins/imags/Service-Charge-Bill.png",
				"https://www.cesc.co.in/ptrlineins/imags/Service-Charge-Bill.png",
				"https://www.cesc.co.in/ptrlineins/imags/Service-Charge-Bill.png"
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
					title: "Purpose",
					dataIndex: "purpose",
					key: "purpose"
				},
				{
					title: "GST Number",
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
			]
		};
	}
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

	handleOk = e => {
		console.log(e);
		this.setState({
			visible: false,
			visible3: false
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false,
			visible3: false
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
										<Icon
											type="exclamation-circle"
											theme="filled"
											style={{ color: "orange" }}
										/>
									)}
								</div>
							</List.Item>
						)}
					/>
				</Modal>
			</div>
		);
	}
}

export default Student;
