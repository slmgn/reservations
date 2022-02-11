import HeaderComponent from "../Components/Header/HeaderComponent";

import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterComponent from "../Components/Footer/FooterComponent";
const BodyComponent = lazy(() => import("../Components/Body/BodyComponent"));

function BookingPage() {
  const { idShow } = useParams();

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <BodyComponent idShow={idShow}></BodyComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default BookingPage;
