const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			vehicles: [],
			favorites: [],
		},
		actions: {

			loadSWAPI: async (resource, category) => {
				let res = await fetch(`https://www.swapi.tech/api/${resource}`)
				let data = await res.json()
				let res_list = data.results


				let resources = await Promise.all(res_list.map(async (c) => {
					let res = await fetch(c.url)
					let data = await res.json()
					return { ...data.result.properties, uid: data.result.uid }
				}))
				let store = { ...getStore() }
				store[category] = resources
				setStore(store)
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				getActions().loadSWAPI('people', 'characters')
				getActions().loadSWAPI('planets', 'planets')
				getActions().loadSWAPI('vehicles', 'vehicles')




			},

			addToFavorites: (item) => {
				const store = getStore();
				const favorites = [...store.favorites];

				const indexToRemove = favorites.indexOf(item);

				if (indexToRemove !== -1) {
					// Si ya está en la lista lo quito
					favorites.splice(indexToRemove, 1);
				} else {
					// Si no está en la lista  lo agrego
					favorites.push(item);
				}

				setStore({ ...store, favorites: favorites });
			},

			deleteFavorites: (index) => {
				const store = getStore();
				const favorites = [...store.favorites];

				favorites.splice(index, 1);

				setStore({ ...store, favorites: favorites });

			}


		}


	}
};

export default getState;
