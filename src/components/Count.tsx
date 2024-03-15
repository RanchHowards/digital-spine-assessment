import { Card, Col, List } from "antd";
import { Elevator } from "../types/elevator";
import { useState } from "react";
type CountProps = {
  data: Elevator[];
  title: string;
};

const Count: React.FC<CountProps> = ({ title, data }) => {
  const [showCount, setShowCount] = useState(true);
  const clickHandler = () => {
    setShowCount(!showCount);
  };

  return (
    <Col span={8}>
      <Card title={title} style={{ height: "100%" }}>
        <div onClick={clickHandler}>
          {showCount ? (
            <div style={{ fontSize: "3em" }}>{data.length}</div>
          ) : (
            <List
              dataSource={data}
              size="small"
              renderItem={(item) => (
                <List.Item>{item.deviceIdentificationNumber}</List.Item>
              )}
            />
          )}
        </div>
      </Card>
    </Col>
  );
};

export default Count;
