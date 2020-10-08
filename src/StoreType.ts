import firebase from "firebase";
import { CurrencyCode, Location } from "./UniversalType";

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
  currency: CurrencyCode;
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