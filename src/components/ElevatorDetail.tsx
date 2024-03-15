import { Divider, Modal } from "antd";
import { Elevator } from "../types/elevator";
import Chart from "./Chart";
type ElevatorDetailProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  elevator: Elevator;
};

const ElevatorDetail: React.FC<ElevatorDetailProps> = ({
  open,
  setOpen,
  elevator,
}) => {
  return (
    <Modal
      title={elevator.deviceIdentificationNumber}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      {Object.entries(elevator)
        .filter(([key]) => key !== "chart")
        .map(([key, value]) => (
          <p>
            {key}: {value}
          </p>
        ))}
      {elevator.chart && (
        <>
          <Divider /> <Chart data={elevator.chart} />
        </>
      )}
    </Modal>
  );
};

export default ElevatorDetail;
