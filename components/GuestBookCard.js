import { Button, Card, Popover } from "antd";
import React from "react";
import styled from "styled-components";

import GuestBookDeleteForm from "./GuestBookDeleteForm";

const CardWrapper = styled(Card)`
  margin-top: 10px;
`;

const GuestBookCard = ({ guestBook }) => {
  return (
    <CardWrapper
      title={guestBook.name}
      extra={
        <Popover
          content={<GuestBookDeleteForm />}
          title="패스워드를 입력해주세요."
          trigger="click"
        >
          <Button>삭제</Button>
        </Popover>
      }
    >
      {guestBook.content}
    </CardWrapper>
  );
};

export default GuestBookCard;
