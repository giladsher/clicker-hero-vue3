import { reactive } from 'vue';
import { GameState } from '@/types';
import { DEFAULT_BUILDINGS, LOCAL_STORAGE_KEYS } from '@/constants';

const DEFAULT_STATE: GameState = {
	playerMoney: 100,
	achievements: [],
	availablePowerUps: [],
	buildings: DEFAULT_BUILDINGS,
	cps: 0,
	powerUps: [],
	amountOfClicks: 0
};

const state: GameState = localStorage.getItem(LOCAL_STORAGE_KEYS.GAME_STATE)
	? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.GAME_STATE)!)
	: DEFAULT_STATE;

export const store: GameState = reactive(state)