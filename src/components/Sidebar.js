import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Sidebar extends Component {
	render() {
		return (
			<Sider width={200} className="sideBar">
				<Menu
					mode="inline"
					defaultSelectedKeys={["1"]}
					style={{ height: "100%", borderRight: 0 }}
					theme="dark"
				>
					<Menu.Item key="1">
						<p className="nav-text">User Approval</p>
					</Menu.Item>
					<Menu.Item key="2">
						<p className="nav-text">Teacher Approval</p>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

export default Sidebar;
