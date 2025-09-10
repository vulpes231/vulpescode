import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	toggle: false,
	darkMode: localStorage.getItem("theme") === "dark",
};

const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setToggle(state) {
			state.toggle = !state.toggle;
		},
		setDarkMode(state) {
			state.darkMode = !state.darkMode;
			// ✅ Persist to localStorage whenever toggled
			localStorage.setItem("theme", state.darkMode ? "dark" : "light");
		},
	},
});

export const selectNavSlice = (state) => state.nav;

export const { setToggle, setDarkMode } = navSlice.actions;
export default navSlice.reducer;
