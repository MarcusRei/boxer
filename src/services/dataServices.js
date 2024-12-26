export async function getRequest(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  if (!response.ok) {
    console.log("Get request failed:", response.status, response.statusText);
    return [];
  }
}

export async function postRequest(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return true;
  } else {
    console.error("API call failed:", response.status, response.statusText);
  }
}

export async function putRequest(url, data) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return true;
  } else {
    console.error("API call failed:", response.status, response.statusText);
  }
}
