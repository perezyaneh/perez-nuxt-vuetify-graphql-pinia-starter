<template>
	<v-app>
	  <!-- Navigation bar -->
	  <v-navigation-drawer app>
		<!-- ... Navigation items ... -->
		<v-list-item :to="{ name: 'index' }">
		  <v-list-item-content>
			<v-list-item-title>Home</v-list-item-title>
		  </v-list-item-content>
		</v-list-item>
		<v-list-item :to="{ name: 'launches' }">
		  <v-list-item-content>
			<v-list-item-title>Launches</v-list-item-title>
		  </v-list-item-content>
		</v-list-item>
		<v-list-item :to="{ name: 'rockets' }">
		  <v-list-item-content>
			<v-list-item-title>Rockets</v-list-item-title>
		  </v-list-item-content>
		</v-list-item>
		<v-list-item :to="{ name: 'favorites' }">
		  <v-list-item-content>
			<v-list-item-title>Favorites</v-list-item-title>
		  </v-list-item-content>
		</v-list-item>
	  </v-navigation-drawer>
  
	  <v-main>
		<slot />
	  </v-main>
	</v-app>
  </template>
  
  <script>
  export default {
	name: 'DefaultLayout',
  };
  </script>