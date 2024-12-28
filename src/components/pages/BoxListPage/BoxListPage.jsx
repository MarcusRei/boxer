import { useEffect, useState } from "react";
import { BoxList } from "../../BoxList/BoxList";
import { getAllBoxes } from "../../../services/boxesServices";
import { NewBoxButton } from "../../NewBoxButton/NewBoxButton";

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
      <NewBoxButton></NewBoxButton>
      <BoxList boxes={boxes} />
    </>
  );
};
