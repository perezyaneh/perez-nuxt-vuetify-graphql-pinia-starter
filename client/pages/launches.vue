<template>
    <v-container>
        
        <h3 class="my-5">Launches</h3>
        <v-chip color="blue">SimpleTable</v-chip>
		<v-chip color="orange">Data from spaceX graphql</v-chip>
        
        <div class="my-5">
            <v-btn color="blue" @click="toggleSortOrder">
            Toggle Sorting Order
            </v-btn>
            <v-select
            v-model="selectedYear"
            :items="availableYears"
            label="Filter by Year"
            class="my-5">
            </v-select>
            <v-btn @click="clearYearFilter">Clear Year Filter</v-btn>
        </div>
        

        <v-table>
			<thead>
				<tr>
					<th class="text-left">Mission Name</th>
					<th class="text-left">Launch Date</th>
                    <th class="text-left">Launch Site Name</th>
                    <th class="text-left">Rocket Name</th>
                    <th class="text-left">Details</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="launch in filteredLaunches" :key="launch.id">
					<td>{{ launch.mission_name }}</td>
                    <td>{{ launch.launch_date_utc }}</td>
                    <td>{{ launch.site_name }}</td>
                    <td>{{ launch.rocket.rocket_name }}</td>
                    <td>{{ launch.details }}</td>
                    <td><v-btn @click="addToFavorites(launch.rocket.rocket_name)" color="primary">Add to Favorites</v-btn></td>
				</tr>
			</tbody>
		</v-table>
       
    </v-container>

</template>

<script lang="ts" setup>
    
    //composables
    import { useUtils } from '../composables/useUtils';
    
    // use composables
    const { launches, toggleSortOrder, sortedLaunches, clearYearFilter, filteredLaunches, availableYears, selectedYear } = useUtils();
    const favoritesStore = useFavorite();
    
    const addToFavorites = (rocketName: string) => {
    favoritesStore.addFavoriteRocket(rocketName);
    };
</script>
