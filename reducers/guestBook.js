import { createSlice } from "@reduxjs/toolkit";

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
};

// 비동기 액션

// reducer
const guestBookSlice = createSlice({
  name: "geustBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});

export default guestBookSlice;
