import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  loading: boolean;
  error: null | string;
  token: null | string;
}

const initialState: IAuthState = {
  error: null,
  loading: false,
  token: null,
};

interface ICredentials {
  username: string;
  passsword: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: ICredentials) => {
    try {
      const response = await window.fetch("wwww.api.dommain.com/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });

      const token = await response.json();
      return token;
    } catch (e) {
      const err = e as { message: string };
      throw new Error(err.message);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state, action: any) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(login.pending, (state, action: any) => {
      state.error = null;
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
      state.error = null;
      state.loading = false;
      state.token = action.payload;
    });
  },
});

export default authSlice.reducer;
