import { Schedule } from './UniversalType';

export type MenuInfo = {
	allowDelivery: boolean;
	allowPickup: boolean;
	allowPreorder: boolean;
	allowPublish: boolean;
	categories: string[];
	name: string;
	schedule: Schedule;
};

export type CategoryInfo = {
	name: string;
	items: string[];
};

export type ItemInfo = {
	name: string;
	description: string;
	image: string;
	modifiers: string[];
	price: number;
	tax: number;
};
export type ModifierInfo = {
	max: number;
	min: number;
	name: string;
	options: Option[];
	required: boolean;
};

export type Menu = MenuInfo & { id: string };
export type Category = CategoryInfo & { id: string };
export type Item = ItemInfo & { id: string };
export type Modifier = ModifierInfo & { id: string };

export type Option = {
	id: string;
	name: string;
	price: number;
};
