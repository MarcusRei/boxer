import { useEffect, useState } from "react";
import { BoxList } from "../../BoxList/BoxList";
import { NewBoxButton } from "../../NewBoxButton/NewBoxButton";
import { getAllBoxes } from "../../../services/boxesServices";

export const BoxListPage = () => {
  const [boxes, setBoxes] = useState(null);
  useEffect(() => {
    getAllBoxes().then((data) => {
      console.log("Data:", data);
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
