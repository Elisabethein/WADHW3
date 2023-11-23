import { createStore } from 'vuex';

const store = createStore({
    state: {
        // Your state variables go here
        user: null,
        // Add other state properties as needed
    },
    mutations: {
        // Mutations are responsible for changing the state
        setUser(state, user) {
            state.user = user;
        },
        // Add other mutations as needed
    },
    actions: {
        // Actions are where you perform asynchronous operations and commit mutations
        login({ commit }, user) {
            // Perform login logic (e.g., API request)
            // Once the login is successful, commit the setUser mutation
            commit('setUser', user);
        },
        // Add other actions as needed
    },
    getters: {
        // Getters are used to retrieve state properties with some kind of processing
        isLoggedIn(state) {
            return !!state.user; // Convert to a boolean
        },
        // Add other getters as needed
    },
});

export default store;
