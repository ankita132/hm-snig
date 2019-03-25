import React, { Component } from "react";
import { Form, Input, Button, Upload, message, Icon } from "antd";

class Bill extends Component {
	constructor() {
		super();
		this.state = {
			formLayout: "horizontal"
		};
	}

	handleFormLayoutChange = e => {
		this.setState({ formLayout: e.target.value });
	};
	render() {
		const { formLayout } = this.state;
		const formItemLayout =
			formLayout === "horizontal"
				? {
						labelCol: { span: 4 },
						wrapperCol: { span: 14 }
				  }
				: null;
		const buttonItemLayout =
			formLayout === "horizontal"
				? {
						wrapperCol: { span: 14, offset: 4 }
				  }
				: null;

		return (
			<div className="BillBox">
				<Form layout={formLayout}>
					<Form.Item label="Vendor Name" {...formItemLayout}>
						<Input placeholder="Vendor Name" />
					</Form.Item>
					<Form.Item label="GST Number" {...formItemLayout}>
						<Input placeholder="GST Number" />
					</Form.Item>
					<Form.Item label="Name" {...formItemLayout}>
						<Input placeholder="Name" />
					</Form.Item>
					<Form.Item label="Purpose" {...formItemLayout}>
						<Input placeholder="Purpose" />
					</Form.Item>
					<Form.Item label="Upload" {...formItemLayout}>
						<Upload name="logo" action="/upload.do" listType="picture">
							<Button>
								<Icon type="upload" /> Click to upload
							</Button>
						</Upload>
					</Form.Item>
					<Form.Item {...buttonItemLayout}>
						<Button type="primary">Submit</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default Bill;
