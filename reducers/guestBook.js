import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

/* api 역할을 담당할 sleep 함수 구현
나중에 비동기 액션의 sleep 함수를 api를 받아오도록 변경 */
function sleep(ms, data = null) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, ms)
  );
}

const dummyGuestBook = (data) => ({
  id: shortid.generate(),
  content: data.content,
  name: data.name,
  password: data.password,
});

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
  async (data, thunkAPI) => {
    try {
      const response = await dummyGuestBook(data);
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
      .addCase(addGuestBook.fulfilled, (state, action) => {
        state.addGuestBookLoading = false;
        state.addGuestBookDone = true;
        state.addGuestBookError = null;
        state.guestBooks = state.guestBooks.concat(action.payload);
      })
      .addCase(addGuestBook.rejected, (state, action) => {
        state.addGuestBookLoading = false;
        state.addGuestBookDone = false;
        state.addGuestBookError = action.payload;
      }),
});

export default guestBookSlice;
