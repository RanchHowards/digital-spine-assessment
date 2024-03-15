import { Card, Col, Layout, Row } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import "./App.css";
import jsonData from "./db.json";
import Count from "./components/Count";
import { Elevator } from "./types/elevator";
import { useState } from "react";
import ElevatorList from "./components/ElevatorList";

function App() {
  const layoutStyle = {
    height: "100%",
  };
  const data = jsonData["elevate-industries"] as Elevator[];
  const [viewed, setViewed] = useState<Elevator[]>([]);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <Layout style={layoutStyle}>
        <Header style={{ backgroundColor: "green" }}>Header</Header>
        <Content
          style={{
            height: "100%",
            padding: "1em",
          }}
        >
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
              data={data.filter(
                (elevator) => elevator.state === "out-of-order"
              )}
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
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
