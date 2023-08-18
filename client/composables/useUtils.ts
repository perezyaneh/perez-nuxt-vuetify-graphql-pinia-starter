export const useUtils = () => {
        
    //query
    const query = gql`
    query getData {
        launches {
          id
          mission_name
          launch_date_utc
          launch_site {
            site_name
          }
          rocket {
            rocket_name
          }
          details
        }
        rockets(limit: 1) {
            id
            name
            description
            first_flight
            height {
              meters
            }
            diameter {
              meters
            }
            mass {
              kg
            }
            stages
          }
      }
`
    // get data
    const { data } = useAsyncQuery<{
        launches: {
            id: String
            mission_name: String
            launch_date_utc: Date
            launch_site: {
                site_name: String
            }
            rocket: {
                rocket_name: String
            }
            details: String
        }
        rockets :{
            id: String
            name: String
            description: String
            first_flight: Date
            height: {
              meters: BigInt
            }
            diameter: {
              meters: BigInt
            }
            mass: {
              kg: BigInt
            }
            stages: BigInt
          }
    }>(query)

    // get launches data
    const launches = computed(() => data.value?.launches ?? []);

    // get rockets data

    const rockets = computed (() => data.value?.rockets ?? []);

    // sorted asc dsc
    
    const sortOrder = ref<'asc' | 'desc'>('desc'); // Initialize with default sorting order

    const toggleSortOrder = () => {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    };

    const sortedLaunches = computed(() => {
        const sorted = [...launches.value];
        sorted.sort((a, b) => {
            const dateA = new Date(a.launch_date_utc).getTime();
            const dateB = new Date(b.launch_date_utc).getTime();
            if (sortOrder.value === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });
        return sorted;
    });

  // filter by year

  const selectedYear = ref<string | null>(null); // Initialize with no filtering
  
  // Generate a list of available years based on launches data
  const availableYears = computed(() => {
  const yearsSet = new Set(
      launches.value.map(launch => new Date(launch.launch_date_utc).getFullYear())
  );
  return Array.from(yearsSet).map(year => year.toString());
  });

  // Filter launches based on the selected year
  const filteredLaunches = computed(() => {
  if (!selectedYear.value) {
      return sortedLaunches.value;
  }
  return sortedLaunches.value.filter(
      launch =>
      new Date(launch.launch_date_utc).getFullYear().toString() ===
      selectedYear.value
  );
  });

  // Clear the selected year filter
  const clearYearFilter = () => {
    selectedYear.value = null;
  };

return { launches, rockets, sortedLaunches, toggleSortOrder, clearYearFilter, filteredLaunches, availableYears, selectedYear }

}