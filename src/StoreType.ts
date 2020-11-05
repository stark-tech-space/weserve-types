import firebase from 'firebase';
import { MenuInfo, CategoryInfo, ItemInfo, ModifierInfo } from './MenuType';
import { OrderRequestItem } from './OrderType';
import { CurrencyCode, Location, Schedule } from './UniversalType';

export type StoreDoc = {
	allowReservations: boolean;
	allowOrders: boolean;
	allowQueue: boolean;
	autoAcceptedOrders: boolean;
	autoConfirmedReservations: boolean;
	requireCustomerConfirmedReservations: boolean;
	orderPrepareMinutes: number;
	preorderLimit: number;
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
	menus: { [menuId: string]: MenuInfo };
	categories: { [categoryId: string]: CategoryInfo };
	items: { [itemId: string]: ItemInfo };
	modifiers: { [modifierId: string]: ModifierInfo };
	operatingTime: Schedule;
	reasonsForCancelling: {
		store: string[];
		customer: string[];
	};
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

export type GroupbuyDoc = {
	host: string;
	cart: { [customerUid: string]: OrderRequestItem[] };
};
