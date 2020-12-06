<template>
	<section class="game">
		<pre>
      {{ store }}
    </pre>
		<button @click.prevent="buyBuilding({ amount: 2, buildingId: 0 })">
			test
		</button>
	</section>
</template>

<script lang="ts">
	import { defineComponent, toRef } from 'vue';
	import { store } from '@/store/index';
	import { BuyBuildingPayload } from '@/types';
  import { LOCAL_STORAGE_KEYS, PRICE_MULTIPLIER } from '@/constants';
  
  const buildings = toRef(store, 'buildings');

	function calculateAvailablePurchases({
		amount,
		buildingId
	}: BuyBuildingPayload) {
		const playerMoney = store.playerMoney;
    const currentBuildingCost = buildings.value[buildingId].currentPrice;
		if (currentBuildingCost > playerMoney) {
			return {
				allowed: 0,
        price: 0,
        nextBuildingCost: currentBuildingCost
			};
		}
    let maxAllowedPurchase = currentBuildingCost;
    let nextBuildingCostReturn = currentBuildingCost;
    let totalCost = currentBuildingCost;
		for (let i = 1; i <= amount; i++) {
      const nextBuildingCost = Math.ceil(maxAllowedPurchase * PRICE_MULTIPLIER);
      let tempTotal = totalCost;
      nextBuildingCostReturn = nextBuildingCost;
      tempTotal += nextBuildingCost;
			if (tempTotal > playerMoney) {
				return {
					allowed: i,
          price: totalCost,
          nextBuildingCost
				};
      }
      totalCost += nextBuildingCost;
			maxAllowedPurchase = nextBuildingCost;
		}
		return {
			allowed: amount,
      price: maxAllowedPurchase,
      nextBuildingCost: nextBuildingCostReturn
		};
	}

	function buyBuilding(payload: BuyBuildingPayload) {
    const availablePurchases = calculateAvailablePurchases(payload);
		buildings.value[payload.buildingId].quantity +=
      availablePurchases.allowed;
		store.playerMoney -= availablePurchases.price;
		buildings.value[payload.buildingId].currentPrice =
      availablePurchases.nextBuildingCost;
    // TODO add this back once testing is done
    // localStorage.setItem(LOCAL_STORAGE_KEYS.GAME_STATE, JSON.stringify(store));
	}

	export default defineComponent({
		name: 'Game',
		setup() {
			return {
				store,
				buyBuilding
			};
		}
	});
</script>
