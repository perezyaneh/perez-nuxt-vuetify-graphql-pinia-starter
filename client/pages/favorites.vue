<template>
    <v-container>
        <v-table>
			<thead>
				<tr>
					<th class="text-left">Favorite Rocket Name</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="rocketName in favoriteRocketNames" :key="rocketName">
					<td>{{ rocketName }}</td>
				</tr>
			</tbody>
		</v-table>
    </v-container>
  </template>
  
  
  <script setup>
  
  const favoritesStore = useFavorite();
  const favoriteRocketNames = favoritesStore.getFavoriteRocketNames;
  </script>