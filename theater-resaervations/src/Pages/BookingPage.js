import HeaderComponent from "../Components/Header/HeaderComponent";
import SeatsComponent from "../Components/Seats/SeatsComponent";

import ContentInfoComponent from "../Components/ContentInfo/ContentInfoComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookingPage() {
  const [show, setShow] = useState({
    id: "",
    title: "",
    desciption: "",
    category: "",
    date: "",
    hour: "",
    priceList: { vip: "", general: "" },
  });
  const { idShow } = useParams();

  const getShowInfo = () => {
    fetch(`http://localhost:3004/shows/${idShow}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getShowInfo();
  }, [idShow]);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <ContentInfoComponent show={show}></ContentInfoComponent>
      <SeatsComponent data={show}></SeatsComponent>
    </>
  );
}

export default BookingPage;
