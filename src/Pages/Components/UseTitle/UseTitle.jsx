import React, { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Byte Cafe`;
  }, [title]);
  return <div></div>;
};

export default UseTitle;
