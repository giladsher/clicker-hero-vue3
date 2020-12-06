import { Building } from '@/types';

export enum BASE_PRICES {
  CLICKER = 15
}

export enum BUILDING_NAMES {
  CLICKER = 'Clicker'
}

export enum BUILDING_IDS {
  CLICKER = 0
}

export enum PURCHASE_AMOUNTS {
  ONE = 1,
  TEN = 10,
  HUNDRED = 100
}

export enum LOCAL_STORAGE_KEYS {
  GAME_STATE = 'LAST_STATE'
}

export const PRICE_MULTIPLIER = 1.15;

export const DEFAULT_BUILDINGS: Building[] = [
	{
    basePrice: BASE_PRICES.CLICKER,
    description: '',
    discount: 0,
    freeAmount: 0,
    id: BUILDING_IDS.CLICKER,
    name: BUILDING_NAMES.CLICKER,
    quantity: 0,
    currentPrice: BASE_PRICES.CLICKER
	}
];