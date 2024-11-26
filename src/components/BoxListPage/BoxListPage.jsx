import { useEffect } from "react";
import { BoxList } from "../BoxList/BoxList";
import { ButtonBar } from "../ButtonBar/ButtonBar";
import { getRequest } from "../../services/dataServices";

export const BoxListPage = () => {
  useEffect(() => {
    getRequest("http://localhost:8080/boxes").then((data) => console.log(data));
  }, []);

  return (
    <>
      <ButtonBar></ButtonBar>
      <BoxList boxes={["Kartong 1", "Kartong 2", "Kartong 3", "Kökskartong"]} />
    </>
  );
};
