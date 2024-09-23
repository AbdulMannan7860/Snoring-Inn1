import React, { useEffect } from "react";
import Heading from "../components/common/Heading";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const nav = useNavigate();
  useEffect(() => {
    nav("/");
  })
  return (
    <>
      <Heading
        heading="Page Not Found"
        title="Home"
        subtitle="Page Not Found"
      />
    </>
  );
}


