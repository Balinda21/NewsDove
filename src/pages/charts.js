import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

export default function CombinedCharts() {
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    // Fetch total posts
    fetch("https://blog-6hj4.onrender.com/api/post/select")
      .then((response) => response.json())
      .then((data) => {
        setPostData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    // Fetch total comments
    fetch("https://node-app-plsi.onrender.com/api/klab/comment/read")
      .then((response) => response.json())
      .then((data) => {
        setCommentData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  const postNumber = postData.length;
  const commentLength = commentData.length;

  const data = [
    {
      name: "Posts",
      uv: postNumber,
    },
    {
      name: "Comments",
      uv: commentLength,
    },
  ];

  const data01 = [
    {
      name: "Posts",
      uv: postNumber,
    },
  ];

  const data02 = [
    {
      name: "Comments",
      uv: commentLength,
    },
  ];

  const barChartData = [
    { name: "Posts", uv: postNumber },
    { name: "Comments", uv: commentLength },
  ];

  return (
    <div className="chart_container">
      <div className="line-chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="green"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="pie-chart">
        <ResponsiveContainer width="50%">
          <PieChart className="pie">
            <Pie
              dataKey="uv"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="skyblue"
              label
            />
            <Pie
              dataKey="uv"
              data={data02}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
              margin={{ bottom: 5 }}
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bar-chart">
        <ResponsiveContainer width="100%">
          <BarChart data={barChartData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
