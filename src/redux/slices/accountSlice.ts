import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TAccount = {
  name: string;
};
type TAccountSliceInitialState = {
  selectedAccount: TAccount | null;
};

const initialState: TAccountSliceInitialState = {
  selectedAccount: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    setSelectedAccount: (state, action: PayloadAction<TAccount>) => {
      state.selectedAccount = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedAccount } = accountSlice.actions;

export default accountSlice.reducer;
