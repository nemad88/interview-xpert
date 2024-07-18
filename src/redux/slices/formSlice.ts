import { createSlice } from "@reduxjs/toolkit";
type TSlice = {
  formData: {
    [key: string]: any;
  };
};

const initialState: TSlice = {
  formData: {},
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.formData[action.payload.formId] = action.payload.formData;
    },
    updateForm: (state, action) => {
      state.formData[action.payload.formId] = {
        ...state.formData[action.payload.formId],
        ...action.payload.formData,
      };
    },
  },
});

export const { setForm, updateForm } = formSlice.actions;

export default formSlice.reducer;
