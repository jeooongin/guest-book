import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* api 역할을 담당할 sleep 함수 구현
나중에 비동기 액션의 sleep 함수를 api를 받아오도록 변경 */
function sleep(ms, data = null) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, ms)
  );
}

// initialState
const initialState = {
  guestBooks: [],
  addGuestBookLoading: false,
  addGuestBookDone: false,
  addGuestBookError: null,
};

// 비동기 액션
export const addGuestBook = createAsyncThunk(
  "guestbook/addguestbook",
  async (thunkAPI) => {
    try {
      const response = await sleep(1000);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// reducer
const guestBookSlice = createSlice({
  name: "geustBook",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addGuestBook.pending, (state) => {
        state.addGuestBookLoading = true;
        state.addGuestBookDone = false;
        state.addGuestBookError = null;
      })
      .addCase(addGuestBook.fulfilled, (state) => {
        state.addGuestBookLoading = false;
        state.addGuestBookDone = true;
        state.addGuestBookError = null;
        state.guestBooks = state.guestBooks.concat();
      })
      .addCase(addGuestBook.rejected, (state, action) => {
        state.addGuestBookLoading = false;
        state.addGuestBookDone = false;
        state.addGuestBookError = action.payload;
      }),
});

export default guestBookSlice;
