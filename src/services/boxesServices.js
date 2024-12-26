import { getRequest } from "./dataServices";

const apiKey = process.env.REACT_APP_API_KEY;

export async function getAllBoxes() {
  console.log("API key:", apiKey);
  const url = `${apiKey}boxes`;

  const boxes = await getRequest(url);

  return boxes;
}
