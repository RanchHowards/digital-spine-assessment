import { Card, Col, List } from "antd";
import { Elevator } from "../types/elevator";
import { useState } from "react";
import ElevatorDetail from "./ElevatorDetail";
type CountProps = {
  data: Elevator[];
  title: string;
};

const Count: React.FC<CountProps> = ({ title, data }) => {
  const [showCount, setShowCount] = useState(true);
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setShowCount(!showCount);
  };
  const handleListItemClick = (e: React.MouseEvent<HTMLElement>) => {
    //this doesn't work bc state is resetting
    //may need to add central store :(
    e.stopPropagation();
    setOpen(true);
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
                <>
                  <ElevatorDetail
                    open={open}
                    setOpen={setOpen}
                    elevator={item}
                  />
                  <List.Item style={{ justifyContent: "center" }}>
                    <span onClick={handleListItemClick}>
                      {item.deviceIdentificationNumber}
                    </span>
                  </List.Item>
                </>
              )}
            />
          )}
        </div>
      </Card>
    </Col>
  );
};

export default Count;
