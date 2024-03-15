import { Col, Layout, List, Row } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import "./App.css";
import jsonData from "./db.json";
import Count from "./components/Count";
import { Elevator } from "./types/elevator";

function App() {
  const layoutStyle = {
    height: "100%",
  };
  const data = jsonData["elevate-industries"] as Elevator[];

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
            <Count data={data} title={"Operational"} state={"operational"} />
            <Count data={data} title={"Warning"} state={"warning"} />
            <Count
              data={data}
              title={"Out of Service"}
              state={"out-of-service"}
            />
          </Row>
          <Row>
            <List
              size="small"
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>test</List.Item>}
            />
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
