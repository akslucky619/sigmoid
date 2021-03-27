export async function getPieData(url = "", data = {}, token = "") {
  // Default options are marked with *
  console.log(token, "=======");
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
 
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function getTableData(url = "", data = {}, token = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
 
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function getBarData(url = "", data = {}, token = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.

    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
