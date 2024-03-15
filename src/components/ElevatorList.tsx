import { List, Tag } from "antd";
import { Elevator } from "../types/elevator";
import ElevatorDetail from "./ElevatorDetail";
import { useState } from "react";

type ElevatorListParams = {
  data: Elevator[];
  setViewed: React.Dispatch<React.SetStateAction<Elevator[]>>;
};

const ElevatorList: React.FC<ElevatorListParams> = ({ data, setViewed }) => {
  const [open, setOpen] = useState(false);
  const handleListItemClick = (
    e: React.MouseEvent<HTMLElement>,
    elevator: Elevator
  ) => {
    //state resets... should probably fix
    e.stopPropagation();
    setViewed((old) => [
      elevator,
      ...old.filter(
        (item) =>
          item.deviceIdentificationNumber !==
          elevator.deviceIdentificationNumber
      ),
    ]);

    setOpen(true);
  };
  return (
    <List
      dataSource={data}
      size="small"
      renderItem={(item) => (
        <>
          <ElevatorDetail open={open} setOpen={setOpen} elevator={item} />
          <List.Item style={{ justifyContent: "center" }}>
            <Tag
              style={{ cursor: "pointer" }}
              onClick={(e) => handleListItemClick(e, item)}
            >
              {item.deviceIdentificationNumber}
            </Tag>
          </List.Item>
        </>
      )}
    />
  );
};

export default ElevatorList;
