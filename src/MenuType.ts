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
