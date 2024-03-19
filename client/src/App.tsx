import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import "./App.css";
import LoginButton from "./components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "./types/user";
import ContentHeader from "./components/ContentHeader";

function App() {
  const [data, setData] = useState<User | null>(null);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated) return;
    const callApi = async () => {
      const token = await getAccessTokenSilently();
      const config = { headers: { Authorization: `Bearer ${token}` } };
      axios
        .get<User>(process.env.REACT_APP_API_AUDIENCE as string, config)
        .then((response) => {
          setData(response?.data);
        })
        .catch((error) => console.error("AXIOS error fetching data: ", error));
    };
    callApi();
  }, [isAuthenticated]);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <Layout
        style={{
          height: "100%",
        }}
      >
        <ContentHeader
          name={data?.organization.name}
          isAuthenticated={isAuthenticated}
        />
        <Content
          style={{
            height: "100%",
            padding: "1em",
          }}
        >
          {isAuthenticated && data ? (
            <Dashboard data={data.organization.elevators} />
          ) : (
            <LoginButton />
          )}
        </Content>
      </Layout>
    </div>
  );
}

export default App;
