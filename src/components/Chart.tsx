import { Tooltip } from "antd";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  BarChart,
  Rectangle,
} from "recharts";
import { ChartType } from "../types/elevator";
import moment from "moment";

type ChartProps = { data: ChartType };

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <BarChart
      width={450}
      height={300}
      data={data.data.map((item) => ({
        Cycles: item.door_cycles_count,
        Openings: item.door_openings_count,
        Closings: item.door_closings_count,
        Closed: item.door_closed_count,
        Opened: item.door_opened_count,
        time: moment(item.time).format("DD-MM-YY"),
      }))}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="Cycles"
        fill="#241023"
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
      <Bar
        dataKey="Openings"
        fill="#6b0504"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
      <Bar
        dataKey="Closings"
        fill="#a3320b"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
      <Bar
        dataKey="Closed"
        fill="#d5e68d"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
      <Bar
        dataKey="Opened"
        fill="#47a025"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
    </BarChart>
  );
};

export default Chart;
