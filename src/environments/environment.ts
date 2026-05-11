import { environment as environmentProd } from './environment.prod';

export const environment: typeof environmentProd = {
	...environmentProd,
	production: false,
};
