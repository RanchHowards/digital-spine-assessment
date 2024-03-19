import { Row, Col, Card } from "antd";
import Count from "./Count";
import ElevatorList from "./ElevatorList";
import LogoutButton from "./LogoutButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { Elevator } from "../types/elevator";
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "../types/user";

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  const [data, setData] = useState<Elevator[]>([]);
  const [viewed, setViewed] = useState<Elevator[]>([]);
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const callApi = async () => {
      const token = await getAccessTokenSilently();
      const config = { headers: { Authorization: `Bearer ${token}` } };
      axios
        .get<User>(process.env.REACT_APP_API_AUDIENCE as string, config)
        .then((response) => {
          setData(response?.data.organization.elevators);
        })
        .catch((error) => console.error("AXIOS error fetching data: ", error));
    };
    callApi();
  }, [getAccessTokenSilently]);

  return (
    <>
      <LogoutButton />
      <Row gutter={16}>
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
