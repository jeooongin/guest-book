import React from "react";
import { useSelector } from "react-redux";
import GuestBookCard from "../components/GuestBookCard";

import GuestBookForm from "../components/GuestBookForm";

const index = () => {
  const { guestBooks } = useSelector((state) => state.guestBook);
  return (
    <>
      <GuestBookForm />
      {guestBooks.map((guestBook) => (
        <GuestBookCard key={guestBooks.id} guestBook={guestBook} />
      ))}
    </>
  );
};

export default index;
