import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./slices/EventSlice";



const store = configureStore({
    reducer: {
        [eventsSlice.name]: eventsSlice.reducer,
    }
})


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;