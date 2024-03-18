import { Card, Col } from "antd";
import { Elevator } from "../types/elevator";
import { useState } from "react";
import ElevatorList from "./ElevatorList";
type CountProps = {
  data: Elevator[];
  title: string;
  setViewed: React.Dispatch<React.SetStateAction<Elevator[]>>;
};

const Count: React.FC<CountProps> = ({ title, data, setViewed }) => {
  const [showCount, setShowCount] = useState(true);

  const clickHandler = () => {
    setShowCount(!showCount);
  };

  return (
    <Col span={8}>
      <Card title={title} style={{ height: "100%" }}>
        <div onClick={clickHandler}>
          {showCount ? (
            <div style={{ cursor: "pointer", fontSize: "3em" }}>
              {data.length}
            </div>
          ) : (
            <ElevatorList data={data} setViewed={setViewed} />
          )}
        </div>
      </Card>
    </Col>
  );
};

export default Count;
