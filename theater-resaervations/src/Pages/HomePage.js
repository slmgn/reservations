import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { lazy, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import FooterComponent from "../Components/Footer/FooterComponent";
import HeaderComponent from "../Components/Header/HeaderComponent";
const InfoCardComponent = lazy(() =>
  import("../Components/InfoCard/InfoCardComponent")
);

function HomePage() {
  const [showList, setshowList] = useState([]);

  const fetchShows = () => {
    fetch("http://localhost:3004/shows")
      .then((response) => response.json())
      .then((data) => {
        setshowList(data);
      })
      .catch((error) => console.log("Se produjo un error"));
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Center>
        <Heading>PROXIMOS EVENTOS...</Heading>
      </Center>
      <SimpleGrid columns={3} spacing={10}>
        {showList.length > 0 ? (
          showList.map((show, idx) => {
            return (
              <InfoCardComponent key={idx} show={show}></InfoCardComponent>
            );
          })
        ) : (
          <></>
        )}
      </SimpleGrid>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default HomePage;
