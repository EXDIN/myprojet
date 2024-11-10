import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeEvent } from "../../typesAndInterfaces";


const initialEventState: TypeEvent[] = []

const eventsSlice = createSlice({
    name: "events",
    initialState: initialEventState,
    selectors: {
        getAllEvents: (state) => state,
    },
    reducers: {
        addEvent: (state, action: PayloadAction<TypeEvent>) => {
            state.push(action.payload)
        },
    },
})


export const { addEvent: addEvent } = eventsSlice.actions;
export const { getAllEvents } = eventsSlice.selectors;

export default eventsSlice;