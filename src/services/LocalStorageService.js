export function addToLS(key, info) {
  const stringifiedInfo = JSON.stringify(info);
  localStorage.setItem(key, stringifiedInfo);
}

export function getFromLS(key) {
  const info = JSON.parse(localStorage.getItem(key));

  return info;
}
