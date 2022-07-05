import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotesState {
  list: {
    title: string;
    message: string;
  }[];
}

const initialState: NotesState = {
  list: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    newNote(
      state,
      action: PayloadAction<{
        title: string;
        message: string;
      }>
    ) {
      state.list.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      console.log(action.payload);

      state.list.splice(action.payload, 1);
    },
  },
});

export const { newNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
