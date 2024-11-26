import { getRequest } from "./dataServices";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export async function getAllBoxes() {
  //! Input URL here!
  const url = ``;

  const schoolClasses = await getRequest(url);

  return schoolClasses;
}
