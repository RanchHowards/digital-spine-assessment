import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import "./App.css";
import LoginButton from "./components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./components/Dashboard";

function App() {
  const layoutStyle = {
    height: "100%",
  };
  const { isAuthenticated } = useAuth0();

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
          {isAuthenticated ? <Dashboard /> : <LoginButton />}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
