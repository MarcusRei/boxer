import { useEffect, useState } from "react";
import { BoxList } from "../BoxList/BoxList";
import { ButtonBar } from "../ButtonBar/ButtonBar";
import { getRequest } from "../../services/dataServices";

export const BoxListPage = () => {
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    getRequest("http://localhost:8080/boxes").then((data) => {
      console.log(data);
      setBoxes(data);
    });
  }, []);

  return (
    <>
      <ButtonBar></ButtonBar>
      <BoxList boxes={boxes} />
    </>
  );
};
