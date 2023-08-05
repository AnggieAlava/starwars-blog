const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			vehicles: [],
		},
		actions: {

			loadSWAPI: async (resource, category) => {
				let res = await fetch(`https://www.swapi.tech/api/${resource}`)
				let data = await res.json()
				let res_list = data.results


				let resources = await Promise.all(res_list.map(async (c) => {
					let res = await fetch(c.url)
					let data = await res.json()
					return data.result.properties
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
				getActions().loadSWAPI('starships', 'vehicles')




			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
