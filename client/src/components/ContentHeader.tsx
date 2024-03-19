import { Header } from "antd/es/layout/layout";
import LogoutButton from "./LogoutButton";

type ContentHeaderProps = { name?: string; isAuthenticated: boolean };

const ContentHeader: React.FC<ContentHeaderProps> = ({
  name,
  isAuthenticated,
}) => {
  return (
    <Header style={{ textAlign: "right", backgroundColor: "green" }}>
      {isAuthenticated && name && (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "white" }}>{name}</h3>
          <LogoutButton />
        </div>
      )}
    </Header>
  );
};
export default ContentHeader;
