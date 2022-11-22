import { Card } from "antd";
import React from "react";

const GuestBookCard = ({ guestBook }) => {
  return (
    <Card title={guestBook.name} style={{ marginTop: "10px" }}>
      {guestBook.content}
    </Card>
  );
};

export default GuestBookCard;
