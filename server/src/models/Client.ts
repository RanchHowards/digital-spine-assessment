import { Schema, model } from "mongoose";

const doorCycleCountSchema = new Schema({
  time: { type: Date, required: true },
  door_cycles_count: { type: Number, required: true },
  door_openings_count: { type: Number, required: true },
  door_closings_count: { type: Number, required: true },
  door_closed_count: { type: Number, required: true },
  door_opened_count: { type: Number, required: true },
});

const chartSchema = new Schema({
  name: { type: String, required: true },
  data: { type: [doorCycleCountSchema], required: true },
});

const elevatorSchema = new Schema({
  fabricationNumber: { type: String, required: true },
  address: { type: String, required: true },
  floorNumber: { type: Number, required: true },
  deviceIdentificationNumber: { type: String, required: true },
  manufacturerName: { type: String, required: true },
  productionYear: { type: Number, required: true },
  elevatorType: { type: String, required: true },
  state: { type: String, required: true },
  chart: chartSchema,
});

const elevatorClientSchema = new Schema({
  name: { type: String, required: true },
  elevators: { type: [elevatorSchema], required: true },
});

const ClientModel = model("Client", elevatorClientSchema, "elevator-clients");

export default ClientModel;
