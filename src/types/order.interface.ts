import { MenuItemWithCount } from "./menu.interface";

export interface OrderInfo {
  isTakeOut: boolean;
  orderItem: MenuItemWithCount[];
  isTableService: boolean;
  payMethod: string;
}
