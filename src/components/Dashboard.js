import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Videos from "./Videos";
import Settings from "./Settings";
import Homepage from "./Homepage";
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
	RenderContent = () => {
		if (this.state.selected === 1) {
			return <Homepage />;
		} else if (this.state.selected === 2) {
			return <Videos />;
		} else if (this.state.selected === 3) {
			return <Settings />;
		}
		return <Homepage />;
	};
	render() {
		let renderContent = this.RenderContent();
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
								<Menu.Item key="1" onClick={() => this.changeView(1)}>
									HomePage
								</Menu.Item>
								<Menu.Item key="2" onClick={() => this.changeView(2)}>
									Demo Videos
								</Menu.Item>
								<Menu.Item key="3" onClick={() => this.changeView(3)}>
									Settings
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
								{renderContent}
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
