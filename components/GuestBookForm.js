import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { addGuestBook } from "../reducers/guestBook";

const GuestBookForm = () => {
  const dispatch = useDispatch();

  const onSubmitForn = useCallback(() => {
    dispatch(addGuestBook());
  }, []);

  return (
    <Form
      onFinish={onSubmitForn}
      style={{
        padding: "10px",
        borderRadius: "10px",
        background: "white",
      }}
    >
      <label htmlFor="guest-book">방명록</label>
      <Input.TextArea rows={4} placeholder="방명록을 남겨주세요." />
      <div style={{ marginTop: "5px" }}>
        <label htmlFor="name">이름</label>
        <Input rows={1} type="text" placeholder="이름을 입력해주세요." />
        <label htmlFor="password">비밀번호</label>
        <Input rows={1} type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "5px",
        }}
      >
        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </div>
    </Form>
  );
};

export default GuestBookForm;
