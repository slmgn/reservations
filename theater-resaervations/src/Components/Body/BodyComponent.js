import SeatsComponent from "../Seats/SeatsComponent";
import ContentInfoComponent from "../ContentInfo/ContentInfoComponent.js";

import { useEffect, useState } from "react";

function BodyComponent(props) {
  const { idShow } = props;
  const [show, setShow] = useState(null);

  useEffect(() => {
    const getShowInfo = () => {
      fetch(`http://localhost:3004/shows/${idShow}`)
        .then((response) => response.json())
        .then((data) => {
          setShow(data);
        })
        .catch((error) => console.log(error));
    };
    getShowInfo();
  }, [idShow]);

  return (
    <>
      {show ? (
        <>
          <ContentInfoComponent show={show}></ContentInfoComponent>
          <SeatsComponent data={show}></SeatsComponent>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
export default BodyComponent;
