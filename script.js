function createTable() {
    //Write your code here
  const table = document.getElementById("myTable");
  
  // Clear any existing table content
  table.innerHTML = "";

  // Prompt for number of rows
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert inputs to numbers
  rn = parseInt(rn);
  cn = parseInt(cn);

  // Validate inputs
  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Please enter positive numeric values for rows and columns.");
    return;
  }

  // Create rows and columns
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
