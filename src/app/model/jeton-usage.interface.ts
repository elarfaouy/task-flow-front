import {UserInterface} from "./user.interface";

export interface JetonUsageInterface {
  id: number;
  action: string;
  actionDate: string;
  user: UserInterface;
}
