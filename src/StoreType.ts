import firebase from "firebase";
import { Location } from "./UniversalType";

export type StoreDoc = {
  allowReservations: boolean;
  allowOrders: boolean;
  allowQueue: boolean;
  autoAcceptedOrders: boolean;
  autoConfirmedReservations: boolean;
  requireCustomerConfirmedReservations: boolean;
  orderPrepareMinutes: number;
  delivery: {
    maxDistance: number;
    costShare: number;
    costShareLimit: number;
    freeLimit: number;
  };
  name: string;
  description: string;
  phoneNumber: string;
  currency: string; //TODO: enum
  timezone: string;
  admins: string[];
  location: Location;
  banner: string;
  logo: string;
  images: string[];
  brands: string[];
  menus: { [menuId: string]: Menu };
  categories: { [categoryId: string]: Category };
  items: { [itemId: string]: Item };
  modifiers: { [modifierId: string]: Modifier };
  operatingTime: Schedule;
};

export type CustomerDoc = {
  displayName: string;
  phoneNumber: string;
  count: { [key: string]: number }; //TODO: set any key to number
  total: number;
  blockedAt: firebase.firestore.Timestamp;
  allowOrders: boolean;
  allowReservations: boolean;
};

export type ScheduleTime = {
  close: number;
  open: number;
};

export type Schedule = {
  SUN?: ScheduleTime[];
  MON?: ScheduleTime[];
  TUE?: ScheduleTime[];
  WED?: ScheduleTime[];
  THU?: ScheduleTime[];
  FRI?: ScheduleTime[];
  SAT?: ScheduleTime[];
};

export type Menu = {
  allowDelivery: boolean;
  allowPickup: boolean;
  allowPreorder: boolean;
  allowPublish: boolean;
  categories: string[];
  name: string;
  schedule: Schedule;
};

export type Category = {
  name: string;
  items: string[];
};

export type Item = {
  name: string;
  description: string;
  image: string;
  modifiers: string[];
  price: number;
  tax: number;
};

export type Option = {
  id: string;
  name: string;
  price: number;
};

export type Modifier = {
  max: number;
  min: number;
  name: string;
  options: Option[];
  required: boolean;
};
