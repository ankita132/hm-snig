import React, { Component } from "react";
import {
	AreaChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Area,
	BarChart,
	Legend,
	Bar,
	RadialBarChart,
	RadialBar,
	PolarAngleAxis
} from "recharts";
import { Typography } from "antd";
const { Title } = Typography;
const linedata = [
	{
		name: "Day A",
		uv: 4000,
		pv: 2400,
		amt: 2400
	},
	{
		name: "Day B",
		uv: 3000,
		pv: 1398,
		amt: 2210
	},
	{
		name: "Day C",
		uv: 2000,
		pv: 9800,
		amt: 2290
	},
	{
		name: "Day D",
		uv: 2780,
		pv: 3908,
		amt: 2000
	},
	{
		name: "Day E",
		uv: 1890,
		pv: 4800,
		amt: 2181
	},
	{
		name: "Day F",
		uv: 2390,
		pv: 3800,
		amt: 2500
	},
	{
		name: "Day G",
		uv: 3490,
		pv: 4300,
		amt: 2100
	}
];
const bardata = [
	{
		name: "Day A",
		uv: 4000,
		pv: 2400,
		amt: 2400
	},
	{
		name: "Day B",
		uv: 3000,
		pv: 1398,
		amt: 2210
	},
	{
		name: "Day C",
		uv: 2000,
		pv: 9800,
		amt: 2290
	},
	{
		name: "Day D",
		uv: 2780,
		pv: 3908,
		amt: 2000
	},
	{
		name: "Day E",
		uv: 1890,
		pv: 4800,
		amt: 2181
	},
	{
		name: "Day F",
		uv: 2390,
		pv: 3800,
		amt: 2500
	},
	{
		name: "Day G",
		uv: 3490,
		pv: 4300,
		amt: 2100
	}
];
const radialdata = [{ name: "L1", value: 25 }];

const circleSize = 300;

class Homepage extends Component {
	render() {
		return (
			<div className="studentBox">
				<div className="graph-first">
					<div className="area">
						<AreaChart
							width={650}
							height={250}
							data={linedata}
							style={{ marginRight: "1em" }}
						>
							<defs>
								<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
									<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
								</linearGradient>
								<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
									<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
								</linearGradient>
							</defs>
							<XAxis dataKey="name" />
							<YAxis />
							<CartesianGrid strokeDasharray="3 3" />
							<Tooltip />
							<Area
								type="monotone"
								dataKey="uv"
								stroke="#8884d8"
								fillOpacity={1}
								fill="url(#colorUv)"
							/>
							<Area
								type="monotone"
								dataKey="pv"
								stroke="#82ca9d"
								fillOpacity={1}
								fill="url(#colorPv)"
							/>
						</AreaChart>
						<Title level={4}>Progress Over the Days</Title>
					</div>
					<div className="streakbox" style={{ marginLeft: "2em" }}>
						<RadialBarChart
							width={circleSize - 50}
							height={circleSize - 50}
							cx={circleSize / 2}
							cy={circleSize / 2}
							innerRadius={70}
							outerRadius={500}
							barSize={10}
							data={radialdata}
							startAngle={90}
							endAngle={-270}
							style={{
								marginTop: "-2em",
								marginBottom: "2em"
							}}
						>
							<PolarAngleAxis
								type="number"
								domain={[0, 100]}
								angleAxisId={0}
								tick={false}
							/>
							<RadialBar
								background
								clockWise
								dataKey="value"
								cornerRadius={circleSize / 2}
								fill="#82ca9d"
							/>
							<text
								x={circleSize / 2}
								y={circleSize / 2}
								textAnchor="middle"
								dominantBaseline="middle"
								className="progress-label"
								style={{ fontSize: "2em" }}
							>
								25%
							</text>
						</RadialBarChart>
						<Title level={4}>Streak Completed Today</Title>
					</div>
				</div>
				<div className="graph-second">
					<div className="barbox">
						<BarChart width={650} height={250} data={bardata}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="uv" fill="#82ca9d" />
						</BarChart>
						<Title level={4}>Lol Lol Lol</Title>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;
