import { useEffect } from "react";
import { BoxList } from "../../BoxList/BoxList";
import { NewBoxButton } from "../../NewBoxButton/NewBoxButton";
import { getRequest } from "../../../services/dataServices";

export const BoxListPage = () => {
  useEffect(() => {
    getRequest("http://localhost:5000/boxes").then((data) => console.log(data));
  }, []);

  return (
    <>
      <NewBoxButton></NewBoxButton>
      <BoxList boxes={["Kartong 1", "Kartong 2", "Kartong 3", "Kökskartong"]} />
    </>
  );
};
