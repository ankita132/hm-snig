import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Student from "./Student";
import Bill from "./Bill";
const { Header, Content, Sider } = Layout;

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			selected: true
		};
	}
	changeView = check => {
		this.setState({
			selected: check
		});
	};
	render() {
		return (
			<div className="studentBox">
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
								<Menu.Item key="2" onClick={() => this.changeView(false)}>
									Add Bills
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
								{this.state.selected ? <Student /> : <Bill />}
							</Content>
						</Layout>
					</Layout>
				</Layout>
				,
			</div>
		);
	}
}

export default Dashboard;
