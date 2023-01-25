let table = document.querySelector("table")
let arrayOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tr = document.createElement("tr");

for(let i = 0; i < arrayOfNumber.length; i++){

    let td = document.createElement("td");
    td.textContent = arrayOfNumber[i];

    tr.appendChild(td);
    table.appendChild(tr);
}


for(let i = 1; i < arrayOfNumber.length; i++){

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.textContent = arrayOfNumber[i];

    tr.appendChild(td);
    
    for(let j = 1; j < arrayOfNumber.length; j++){

        let td = document.createElement("td");
        td.textContent = arrayOfNumber[i] * arrayOfNumber[j];
        tr.appendChild(td);

    }

    table.appendChild(tr);
}
