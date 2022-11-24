import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import useInput from "../hooks/useInput";
import { deleteGuestBook } from "../reducers/guestBook";

const GuestBookDeleteForm = () => {
  const [password, setPassword] = useInput("");

  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    dispatch(deleteGuestBook({ password }));
  }, [password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <Input
          name="password"
          value={password}
          onChange={setPassword}
          type="password"
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>
          삭제
        </Button>
      </div>
    </Form>
  );
};

export default GuestBookDeleteForm;
