import { BUILDING_IDS, PURCHASE_AMOUNTS } from './constants';

export interface Effect {
  buildingId: number;
  isDiscount: boolean;
  effect: number;
}

export interface GenericInterfaceItem {
  id: number;
  effect?: Effect;
  name: string;
  description: string;
}

export interface Achievement extends GenericInterfaceItem {
  quote?: string;
}

export interface PowerUp extends GenericInterfaceItem {
  quote?: string;
}

export interface Building {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  quantity: number;
  freeAmount: number;
  discount: number;
  currentPrice: number;
}

export interface GameState {
  playerMoney: number;
  cps: number;
  achievements: Achievement[];
  powerUps: PowerUp[];
  availablePowerUps: PowerUp[];
  buildings: Building[];
  amountOfClicks: number;
}

export interface BuyBuildingPayload {
  amount: PURCHASE_AMOUNTS;
  buildingId: BUILDING_IDS;
}