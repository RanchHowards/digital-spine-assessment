import { Elevator } from "./elevator";

type Organization = {
  name: string;
  elevators: Elevator[];
};

export interface User {
  user: string;
  organization: Organization;
}
