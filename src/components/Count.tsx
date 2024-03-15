import { Card, Col } from "antd";
import { Elevator } from "../types/elevator";
type CountProps = {
  data: Elevator[];
  title: string;
  state: Elevator["state"];
};

const Count: React.FC<CountProps> = ({ title, data, state }) => {
  return (
    <Col span={8}>
      <Card title={title} style={{ fontSize: "3em" }}>
        {data.filter((elevator) => elevator.state === state).length}
      </Card>
    </Col>
  );
};

export default Count;
