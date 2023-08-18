export const useFavorite = defineStore('favorites', {
    state: () => ({
      favoriteRocketNames: [] as string[],
    }),
    getters: {
      getFavoriteRocketNames: (state) => state.favoriteRocketNames,
    },
    actions: {
      addFavoriteRocket(rocketName: string) {
        this.favoriteRocketNames.push(rocketName);
      },
    },
  });