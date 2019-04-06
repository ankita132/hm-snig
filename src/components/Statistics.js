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
		name: "Day 1",
		totalTime: 40,
		timeTillFirstPause: 24,
		amt: 24
	},
	{
		name: "Day 2",
		totalTime: 30,
		timeTillFirstPause: 13,
		amt: 22
	},
	{
		name: "Day 3",
		totalTime: 20,
		timeTillFirstPause: 9,
		amt: 21
	},
	{
		name: "Day 4",
		totalTime: 27,
		timeTillFirstPause: 19,
		amt: 20
	},
	{
		name: "Day 5",
		totalTime: 18,
		timeTillFirstPause: 4,
		amt: 21
	},
	{
		name: "Day 6",
		totalTime: 23,
		timeTillFirstPause: 10,
		amt: 25
	},
	{
		name: "Day 7",
		totalTime: 23,
		timeTillFirstPause: 4,
		amt: 26
	}
];
const bardata = [
	{
		name: "Day 1",
		totalTime: 40,
		timeTillFirstPause: 24,
		amt: 31
	},
	{
		name: "Day 2",
		totalTime: 30,
		timeTillFirstPause: 13,
		amt: 22
	},
	{
		name: "Day 3",
		totalTime: 20,
		timeTillFirstPause: 12,
		amt: 23
	},
	{
		name: "Day 4",
		totalTime: 27,
		timeTillFirstPause: 9,
		amt: 30
	},
	{
		name: "Day 5",
		totalTime: 18,
		timeTillFirstPause: 5,
		amt: 21
	},
	{
		name: "Day 6",
		totalTime: 23,
		timeTillFirstPause: 17,
		amt: 25
	},
	{
		name: "Day 7",
		totalTime: 34,
		timeTillFirstPause: 12,
		amt: 42
	}
];
const radialdata = [{ name: "L1", value: 25 }];

const circleSize = 300;

class Statistics extends Component {
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
								<linearGradient id="colortotalTime" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
									<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
								</linearGradient>
								<linearGradient
									id="colortimeTillFirstPause"
									x1="0"
									y1="0"
									x2="0"
									y2="1"
								>
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
								dataKey="totalTime"
								stroke="#8884d8"
								fillOpacity={1}
								fill="url(#colortotalTime)"
							/>
							<Area
								type="monotone"
								dataKey="timeTillFirstPause"
								stroke="#82ca9d"
								fillOpacity={1}
								fill="url(#colortimeTillFirstPause)"
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
							<Bar dataKey="totalTime" fill="#82ca9d" />
						</BarChart>
						<Title level={4}>Lol Lol Lol</Title>
					</div>
				</div>
			</div>
		);
	}
}

export default Statistics;
