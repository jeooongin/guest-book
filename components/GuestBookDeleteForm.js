import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import useInput from "../hooks/useInput";
import { deleteGuestBook } from "../reducers/guestBook";

const ButtonWrapper = styled(Button)`
  margin-top: 10px;
`;

const GuestBookDeleteForm = () => {
  const [password, onChangePassword, setPassword] = useInput("");

  const dispatch = useDispatch();
  const { deleteGuestBookDone } = useSelector((state) => state.guestBook);

  useEffect(() => {
    if (deleteGuestBookDone) {
      setPassword("");
    }
  }, [deleteGuestBookDone]);

  const onSubmitForm = useCallback(() => {
    dispatch(deleteGuestBook({ password }));
  }, [password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <Input
          name="password"
          value={password}
          onChange={onChangePassword}
          type="password"
          required
        />
      </div>
      <div>
        <ButtonWrapper type="primary" htmlType="submit">
          삭제
        </ButtonWrapper>
      </div>
    </Form>
  );
};

export default GuestBookDeleteForm;
