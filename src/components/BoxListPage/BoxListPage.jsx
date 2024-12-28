import { useEffect, useState } from "react";
import { BoxList } from "../BoxList/BoxList";
import { ButtonBar } from "../ButtonBar/ButtonBar";
import { getAllBoxes } from "../../services/boxesServices";

export const BoxListPage = () => {
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    getAllBoxes().then((data) => {
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
