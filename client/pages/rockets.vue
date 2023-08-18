<template>
    <v-card class="mx-auto my-12" max-width="374" v-for="rocket in rockets" :key="rocket.id">

			<v-img height="250" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg" />

			<v-card-title>{{ rocket.name }}</v-card-title>

			<v-card-text>

				<div>{{ rocket.description  }}</div>
			</v-card-text>

			<v-divider class="mx-4" />

			<v-card-title>{{  rocket.first_flight }}</v-card-title>

			<v-card-text>
				<v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
					<v-chip>Height: {{ rocket.height.meters }}</v-chip>

					<v-chip>Diameter: {{ rocket.diameter.meters }}</v-chip>

					<v-chip>Mass: {{ rocket.mass.kg }}</v-chip>

					<v-chip>Stages: {{ rocket.stages }}</v-chip>
				</v-chip-group>
			</v-card-text>
		</v-card>

</template>

<script lang="ts" setup>
   
   import { useUtils } from '../composables/useUtils';
   
   const { rockets } = useUtils();

</script>
