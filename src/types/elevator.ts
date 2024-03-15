export interface Elevator {
  fabricationNumber: string;
  address: string;
  floorNumber: number;
  deviceIdentificationNumber: string;
  manufacturerName: string;
  productionYear: number;
  elevatorType: "Passenger" | "Freight";
  state: "operational" | "warning" | "out-of-order";
  chart?: Chart;
}
export interface Chart {
  name: "door_cycle_count_over_time";
  data: DoorCycleCount[];
}

export interface DoorCycleCount {
  time: Date;
  door_cycles_count: number;
  door_openings_count: number;
  door_closings_count: number;
  door_closed_count: number;
  door_opened_count: number;
}
