export type UserDoc = {
	email?: string;
	phoneNumber?: string;
	displayName?: string;
	pushTokens?: string[];
	addressHistory?: {
		address: string;
		floor?: string;
	}[];
};
