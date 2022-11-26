import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addGuestBook } from "../reducers/guestBook";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const FormWrapper = styled(Form)`
  padding: 10px;
  border-radius: 10px;
  background: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const GuestBookForm = () => {
  const [content, onChangeContent, setContent] = useInput("");
  const [name, onChangeName, setName] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  const dispatch = useDispatch();
  const { addGuestBookDone } = useSelector((state) => state.guestBook);

  useEffect(() => {
    if (addGuestBookDone) {
      setContent("");
      setName("");
      setPassword("");
    }
  }, [addGuestBookDone]);

  const onSubmitForn = useCallback(() => {
    dispatch(addGuestBook({ content, name, password }));
  }, [content, name, password]);

  return (
    <FormWrapper onFinish={onSubmitForn}>
      <label htmlFor="guest-book">방명록</label>
      <Input.TextArea
        rows={4}
        value={content}
        onChange={onChangeContent}
        placeholder="방명록을 남겨주세요."
        required
      />
      <div style={{ marginTop: "5px" }}>
        <label htmlFor="name">이름</label>
        <Input
          rows={1}
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="이름을 입력해주세요."
          required
        />
        <label htmlFor="password">비밀번호</label>
        <Input
          rows={1}
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호를 입력해주세요"
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default GuestBookForm;
