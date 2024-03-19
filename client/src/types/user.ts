import { Elevator } from "./elevator";

type Organization = {
  name: String;
  elevators: Elevator[];
};

export interface User {
  user: string;
  organization: Organization;
}
