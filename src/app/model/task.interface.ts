import {UserInterface} from "./user.interface";
import {JetonUsageInterface} from "./jeton-usage.interface";
import {TagInterface} from "./tag.interface";

export interface TaskInterface {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: string;
  assignDate: string;
  dueDate: string;
  assignTo: UserInterface;
  createdBy: UserInterface;
  jetonUsage: JetonUsageInterface;
  tags: TagInterface[];
}
