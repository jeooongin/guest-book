import { Button, Card, Popover } from "antd";
import React from "react";

import GuestBookDeleteForm from "./GuestBookDeleteForm";

const GuestBookCard = ({ guestBook }) => {
  return (
    <Card
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
      style={{ marginTop: "10px" }}
    >
      {guestBook.content}
    </Card>
  );
};

export default GuestBookCard;
