import { Row, Col, Card, Spin } from "antd";
import Count from "./Count";
import ElevatorList from "./ElevatorList";
import { useState } from "react";
import { Elevator } from "../types/elevator";

type DashboardProps = { data: Elevator[] };

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const [viewed, setViewed] = useState<Elevator[]>([]);

  return data.length === 0 ? (
    <Spin size="large" />
  ) : (
    <>
      <Row data-cy="dashboard" gutter={16}>
        <Count
          data={data.filter((elevator) => elevator.state === "operational")}
          title={"Operational"}
          setViewed={setViewed}
        />
        <Count
          data={data.filter((elevator) => elevator.state === "warning")}
          title={"Warning"}
          setViewed={setViewed}
        />
        <Count
          data={data.filter((elevator) => elevator.state === "out-of-order")}
          title={"Out of Service"}
          setViewed={setViewed}
        />
      </Row>
      {viewed.length > 0 && (
        <Row gutter={16} justify={"center"}>
          <Col span={8}>
            <Card
              title={"Recently Viewed"}
              style={{ height: "100%", marginTop: "1em" }}
            >
              <ElevatorList data={viewed} setViewed={setViewed} />
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Dashboard;
