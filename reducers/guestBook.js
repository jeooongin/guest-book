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

// initialState
const initialState = {
  guestBooks: [],
  addGuestBookLoading: false,
  addGuestBookDone: false,
  addGuestBookError: null,
  deleteGuestBookLoading: false,
  deleteGuestBookDone: false,
  deleteGuestBookError: null,
};

// API
const addGuestBookAPI = (data) => ({
  id: shortid.generate(),
  content: data.content,
  name: data.name,
  password: data.password,
});

const deleteGuestBookAPI = (data) => {
  return data.password;
};

// 비동기 액션
export const addGuestBook = createAsyncThunk(
  "guestbook/addguestbook",
  async (data, thunkAPI) => {
    try {
      const response = await addGuestBookAPI(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteGuestBook = createAsyncThunk(
  "guestbook/deleteguestbook",
  async (data, thunkAPI) => {
    try {
      const response = await deleteGuestBookAPI(data);
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
      })
      .addCase(deleteGuestBook.pending, (state) => {
        state.deleteGuestBookLoading = true;
        state.deleteGuestBookDone = false;
        state.deleteGuestBookError = null;
      })
      .addCase(deleteGuestBook.fulfilled, (state, action) => {
        state.deleteGuestBookLoading = false;
        state.deleteGuestBookDone = true;
        state.deleteGuestBookError = null;
        state.guestBooks = state.guestBooks.filter(
          (v) => v.password !== action.payload
        );
      })
      .addCase(deleteGuestBook.rejected, (state, action) => {
        state.deleteGuestBookLoading = false;
        state.deleteGuestBookDone = false;
        state.deleteGuestBookError = action.payload;
      }),
});

export default guestBookSlice;
