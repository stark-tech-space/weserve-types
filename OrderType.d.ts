import firebase from 'firebase';
import { CurrencyCode, Location } from './UniversalType';

export enum WsPaymentType {
	CASH = 'WS_PAYMENT_CASH',
	CREDIT_CARD = 'WS_PAYMENT_CREDIT_CARD',
}

export enum WsOrderStatusType {
	PENDING = 'WS_STATUS_PENDING',
	CREATED = 'WS_STATUS_CREATED',
	RETRY = 'WS_STATUS_RETRY',
	ACCEPTED = 'WS_STATUS_ACCEPTED',
	PREPARED = 'WS_STATUS_PREPARED',
	PICKED = 'WS_STATUS_PICKED',
	COMPLETED = 'WS_STATUS_COMPLETED',
	FAILED = 'WS_STATUS_FAILED',
	CANCELLED = 'WS_STATUS_CANCELLED',
}

export enum UberOrderStatusType {
	CREATED = 'UBER_STATUS_CREATED',
	ACCEPTED = 'UBER_STATUS_ACCEPTED',
	DENIED = 'UBER_STATUS_DENIED',
	FINISHED = 'UBER_STATUS_FINISHED',
	CANCELLED = 'UBER_STATUS_CANCELLED',
}

export enum OrderType {
	WS_PICKUP = 'WS_PICKUP',
	WS_DELIVERY = 'WS_DELIVERY',
	WS_PREORDER_PICKUP = 'WS_PREORDER_PICKUP',
	WS_PREORDER_DELIVERY = 'WS_PREORDER_DELIVERY',
	UBER_PICKUP = 'UBER_PICKUP',
	UBER_DINE_IN = 'UBER_DINE_IN',
	UBER_DELIVERY_BY_UBER = 'UBER_DELIVERY_BY_UBER',
	UBER_DELIVERY_BY_STORE = 'UBER_DELIVERY_BY_STORE',
}

export enum CarrierType {
	UFAST = 'UFAST',
	GOGOVAN = 'GOGOVAN',
	GRAB = 'GRAB',
	LALAMOVE = 'LALAMOVE',
}

export enum GogovanOrderStatusType {
	PENDING = 'GOGOVAN_PENDING',
	ACTIVE = 'GOGOVAN_ACTIVE',
	PICKED = 'GOGOVAN_PICKED',
	COMPLETED = 'GOGOVAN_COMPLETED',
	CANCELLED = 'GOGOVAN_CANCELLED',
}

export type OrderRequestItem = {
	id: string;
	count: number;
	note: string;
	modifiers: {
		id: string;
		options: string[];
	}[];
};

export type OrderItem = {
	id: string;
	count: number;
	note: string;
	description: string;
	image: string;
	name: string;
	price: number;
	tax: number;
	modifiers: {
		id: string;
		name: string;
		options: {
			id: string;
			name: string;
			price: number;
		}[];
	}[];
};

export type OrderDoc = {
	type: OrderType;
	createdAt: firebase.firestore.Timestamp;
	customer: {
		uid: string;
		displayName: string;
		phoneNumber: string;
	};
	store: {
		id: string;
		currency: CurrencyCode;
		location: Location;
		delivery: {
			maxDistance: number;
			costShareLimit: number;
			costShare: number;
			freeLimit: number;
		};
	};
	preorderAt?: firebase.firestore.Timestamp;
	delivery?: {
		activeCarrierType?: string;
		note: string;
		isSelfDelivery: boolean;
		pickupDate: firebase.firestore.Timestamp;
		orderPrepareMinutes: number;
		estimateInTraffic: number;
		carriers: { [carrier in CarrierType]?: any };
		quotes: { [carrier in CarrierType]?: { price: number } };
		location: Location;
	};
	paymentType: WsPaymentType;
	status: WsOrderStatusType;
	statusRecord: {
		[status in WsOrderStatusType]?: firebase.firestore.Timestamp;
	};
	note: string;
	items: OrderItem[];
	subtotal: number;
	shippingFee: number;
	tax: number;
	total: number;
	reasonForCancelling?: string[];
};

export type OrderRequest = {
	type: OrderType;
	createdAt: firebase.firestore.FieldValue;
	customer: {
		uid: string;
	};
	store: {
		id: string;
	};
	preorderAt?: firebase.firestore.Timestamp;
	paymentType: WsPaymentType;
	status: WsOrderStatusType;
	note: string;
	items: OrderItem[];
	delivery?: {
		location: Location;
		note: string;
	};
};
