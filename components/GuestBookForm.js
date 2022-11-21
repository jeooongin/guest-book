import { Button, Form, Input } from "antd";
import React from "react";

const GuestBookForm = () => {
  return (
    <Form>
      <Input.TextArea rows={4} placeholder="방명록을 남겨주세요." />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "5px",
          marginBottom: "10px",
        }}
      >
        <Button type="primary">등록</Button>
      </div>
    </Form>
  );
};

export default GuestBookForm;
