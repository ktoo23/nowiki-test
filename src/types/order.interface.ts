import { MenuItem } from "./menu.interface";

export interface OrderInfo {
  isTakeOut: boolean;
  orderItem: MenuItem[];
  isTableService: boolean;
  payMethod: string;
}
