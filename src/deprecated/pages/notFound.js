import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  console.log(JSON.stringify(location));
  return (
    <>
      <h1>The page {location.pathname} does not exist</h1>
    </>
  );
}

export { NotFound };
